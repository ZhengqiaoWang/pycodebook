import threading
import time
from typing_extensions import override


class TestThread(threading.Thread):
    def __init__(self, arg1, arg2):
        self.__arg1 = arg1
        self.__arg2 = arg2
        super().__init__()

    @override
    def run(self):
        for i in range(self.__arg1):
            print(self.__arg1, self.__arg2, i)
            time.sleep(1)


if __name__ == "__main__":
    th_list = []  # 缓存创建的Thread对象，用来之后统一等待子线程结束
    for i in range(1, 5):
        th = TestThread(i, "thread")
        th.start()  # 开始执行线程
        th_list.append(th)

    for th in th_list:
        th.join()
