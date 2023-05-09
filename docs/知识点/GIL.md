---
sidebar_position: 1
---

# GIL

## 什么是GIL

`GIL`，即全局解释器锁(Global Interpreter Lock)，这是一个让人又爱又恨的机制，有了它，初学者们可以放心大胆地使用Python而无需去担心各种内存问题，但同样是因为它，让开发者有了更多的烦恼：

- 无法进行真正有效的并行操作
- 编写一些Python的三方库时不得不考虑`GIL`的复杂场景

在官方的文档中，是这样解释`GIL`的：

> (GIL是)CPython 解释器所采用的一种机制，它确保同一时刻只有一个线程在执行 Python bytecode(字节码，在Python执行时将源码编译为字节码)。此机制通过设置对象模型（包括 dict 等重要内置类型）针对并发访问的隐式安全简化了 CPython 实现。给整个解释器加锁使得解释器多线程运行更方便，其代价则是牺牲了在多处理器上的并行性。
> 
> 不过，一些附加模块，例如一些标准或第三方库中会在计算密集型任务中释放GIL锁，举两个简单的例子：压缩和哈希。除此之外，GIL也经常在IO操作时释放。
> 
> 创建一个（以更精细粒度来锁定共享数据的）“自由线程”解释器的努力从未获得成功，因为这会牺牲在普通单处理器情况下的性能。据信克服这种性能问题的措施将导致实现变得更复杂，从而更难以维护。

是不是听起来一头雾水？

简单的来说，`GIL`的作用是在使用多线程时保证同时有且仅有一个线程执行。如此一来，保证了多个线程同时操作同一个对象时的各种读写问题，即在同一时刻只允许一个线程读写操作一个对象。

## 为什么是GIL

至于说为什么Python选择`GIL`，我觉得可能有几个方面原因：

1. 对象采用引用计数的方式判定是否销毁(Python GC的机制)，这样就意味着多线程处理引用计数时很难兼顾性能和准确性。
2. 在易用性和性能上取舍。对于有`GIL`的Python的入门门槛会大大降低，甚至一名小学生都可以很轻松的理解并写出一个Python程序。而Python绝大多数场景下是无需过分关注性能的，即使是有性能场景，也可以通过其他的方式解决：例如用C来写，Python来调用。
3. 兼容非线程安全的C库，如此一来，Python的生态建立门槛会大大降低。

:::tip [知识点：GC](docs/知识点/GC.md)
:::

## GIL的工作原理

在理解GIL的工作原理前，我们可以做一个简单的实验。当然，你无需立刻理解下面这部分代码的具体含义，因为我会介绍它的工作内容。

```python
import threading  # 引用了多线程库
import time  # 引用了时间库

# 这是一个线程函数，每个线程函数的作用是每隔1秒输出到控制台一次


def thread_func(thread_id):
    for i in range(3):
        print("thread_id:", thread_id, "count:", i)
        time.sleep(1)


th_list = []  # 这是一个列表，在这里我用来存放各个线程对象
for t in range(3):
    th = threading.Thread(target=thread_func, args=(t,)
                          )  # 创建3个线程，thread_id分别为0,1,2
    th.start()
    th_list.append(th)

for th in th_list:  # 遍历线程列表，然后等待每个线程终止
    th.join()
```

在上面的代码注释中，我也尽可能详尽地介绍了每段代码的具体功能，简而言之，就是：

> 开启3个线程，每个线程每隔1秒输出一次到控制台，每个线程输出3次。

然后我们运行一下，就可以看到结果：

```text
thread_id: 0 count: 0
thread_id: 1 count: 0
thread_id: 2 count: 0
thread_id: 0 count: 1
thread_id: 2 count: 1
thread_id: 1 count: 1
thread_id: 2 count: 2
thread_id: 1 count: 2
thread_id: 0 count: 2
```

你可能会发现你的控制台结果与我的不太相同？没有关系，这是正常的现象。

我们看到，即便我们知道Python中带有GIL，一次只能执行一个线程，但线程之间仍然是交替执行的（虽然交替的顺序不一定确定）。

那我们思考一下，这个现象与我们在`C/C++`中为了解决多线程同时抢占资源而引入“锁”的现象很相近，事实上也确实是如此。GIL就是多个线程之间共享的一个锁，多个线程抢占它，抢到的那个线程才可以短暂地运行一段时间，然后又会将锁释放丢出去，继续参与下一轮争抢。

正如上面的结果一样，刚开始，线程0因为先发优势（它先Start）而成功在第一轮输出过程中夺得桂冠，并且在第二轮（count == 1）也能保持优势，但在第三轮时却落到了最后。理论上来说，如果`time.sleep(1)`是精准的，那么无论是第二轮还是第三轮，第一名应该都是线程0，但事与愿违。其中一个可能是`time.sleep(1)`并不精准，不同的平台的精度差别也不小，另一种可能就是竞争结果的随机性，大家都抢锁，但不一定谁能抢得到。

这个时候我们修改一下上面的代码，让他在延时的同时输出一下实际延时时间：

```python
def thread_func(thread_id):
    for i in range(3):
        begin_time = time.time_ns()
        time.sleep(1)
        end_time = time.time_ns()
        print("thread_id:", thread_id, "count:", i, end_time-begin_time, "ns")
```

我们再运行一下程序，发现一个神奇的现象：

```text
thread_id: 2 count: 0 1006052000 ns
thread_id: 1 count: 0 1006052000 ns
thread_id: 0 count: 0 1006052000 ns
thread_id: 0 count: 1 1009645400 ns
thread_id: 1 count: 1 1009645400 ns
thread_id: 2 count: 1 1009645400 ns
thread_id: 2 count: 2 1005223800 ns
thread_id: 1 count: 2 1005223800 ns
thread_id: 0 count: 2 1005223800 ns
```

同一轮的三个线程的延时是一模一样的，这就很奇特了。不过这也就意味着三个线程理论上是在同一时间点抢锁。

我们接下来阅读一下Python的源码，下载地址为：[https://www.python.org/downloads/release/python-3113/](https://www.python.org/downloads/release/python-3113/)，在`Python\ceval_gil.h`文件中可以找到相关的文档说明：

>    Notes about the implementation:
> 
>    - The GIL is just a boolean variable (locked) whose access is protected
> 
>      by a mutex (gil_mutex), and whose changes are signalled by a condition
> 
>      variable (gil_cond). gil_mutex is taken for short periods of time,
> 
>      and therefore mostly uncontended.
> 
>    - In the GIL-holding thread, the main loop (PyEval_EvalFrameEx) must be
> 
>      able to release the GIL on demand by another thread. A volatile boolean
> 
>      variable (gil_drop_request) is used for that purpose, which is checked
> 
>      at every turn of the eval loop. That variable is set after a wait of
> 
>      `interval` microseconds on `gil_cond` has timed out.
> 
>       [Actually, another volatile boolean variable (eval_breaker) is used
> 
>        which ORs several conditions into one. Volatile booleans are
> 
>        sufficient as inter-thread signalling means since Python is run
> 
>        on cache-coherent architectures only.]
> 
>    - A thread wanting to take the GIL will first let pass a given amount of
> 
>      time (`interval` microseconds) before setting gil_drop_request. This
> 
>      encourages a defined switching period, but doesn't enforce it since
> 
>      opcodes can take an arbitrary time to execute.
> 
>      The `interval` value is available for the user to read and modify
> 
>      using the Python API `sys.{get,set}switchinterval()`.
> 
>    - When a thread releases the GIL and gil_drop_request is set, that thread
> 
>      ensures that another GIL-awaiting thread gets scheduled.
> 
>      It does so by waiting on a condition variable (switch_cond) until
> 
>      the value of last_holder is changed to something else than its
> 
>      own thread state pointer, indicating that another thread was able to
> 
>      take the GIL.
> 
>      This is meant to prohibit the latency-adverse behaviour on multi-core
> 
>      machines where one thread would speculatively release the GIL, but still
> 
>      run and end up being the first to re-acquire it, making the "timeslices"
> 
>      much longer than expected.
> 
>      (Note: this mechanism is enabled with FORCE_SWITCHING above)

我们可以在其中发现几个关键点，这在一定程度上可以帮助我们理解GIL的工作原理和应用场景：

1. GIL是一个受锁保护的bool变量。

2. Python鼓励线程及时释放GIL,但不强制要求。这也就保证了多个线程的分片执行，也让我们感觉Python的多线程是真的一样。在实现代码中，我们注意到默认的间隔`DEFAULT_INTERVAL`是`5000微秒`，当然，这个值可能随着GIL的申请而发生变化。

3. 多个线程通过等待条件变量的方式抢占GIL，这就意味着抢占结果具有一定的随机性。

:::tip 条件变量
条件变量并发编程中用来协调多个线程同步的机制，是`C/C++`的一种常用用法。有兴趣的同学可以自行搜索，本教程不进行讲解。
:::
