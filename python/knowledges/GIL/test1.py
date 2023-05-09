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
