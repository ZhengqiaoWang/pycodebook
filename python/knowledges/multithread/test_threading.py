import threading
import time


def threadFunc(arg1: int, arg2: str):
    """线程函数，每个子线程都执行这个函数

    Args:
        arg1 (int): 参数1
        arg2 (str): 参数2
    """
    for i in range(arg1):
        print(arg1, arg2, i)
        time.sleep(1)


if __name__ == "__main__":
    th_list = []  # 缓存创建的Thread对象，用来之后统一等待子线程结束
    for i in range(1, 5):
        th = threading.Thread(target=threadFunc,  # 指定了要执行的函数
                              args=(i, "thread",))  # 指定了函数所需的参数，值得注意的是，最后一个,不要忽略
        th.start()  # 开始执行线程
        th_list.append(th)

    for th in th_list:
        th.join()
