---
sidebar_position: 1
---

# 准备Python环境

## 准备和安装Python

本教程所使用的Python版本统一为：`3.11`，操作系统以及硬件架构不限，因为在本教程中会尽量规避系统环境的区别，使得项目可以跨平台运行。

:::caution
因此可能会存在：

- 和过去的版本不兼容问题，特别是对于`Python2`项目来说，二者差别巨大。对于`Python3`的一些早期版本而言，差别也十分巨大。
- 和你现在所安装的Python版本不一致的问题
:::

如果条件允许，建议使用`anaconda`或者`miniconda`之类的版本管理器来帮助你隔离和控制Python版本。当然，如果你希望比较简单地使用Python，那么完全可以通过Python官方网站下载并安装指定版本的Python。

- anaconda: [https://www.anaconda.com/](https://www.anaconda.com/)
- miniconda: [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
- python: [https://www.python.org/](https://www.python.org/)

如果你没有使用`anaconda`或者`miniconda`，那么你需要手动安装`Pip`，一般而言会伴随Python自动安装，但并不排除部分同学安装并下载了纯净版的Python。如果你在命令行中无法找到`pip`或者`pip3`，那么你大概率需要[手动安装](https://pip.pypa.io/en/stable/installation/)了。

```shell
pip --version
pip3 --version
```

如果你目前在境内且与境外网络的链接不是那么通畅，那么建议你对`anaconda`,`miniconda`,`pip`换个源。

目前比较好用的包括`清华源`、`阿里源`等等，这里我以`清华源`为例，根据需要切换镜像源：

- anaconda/miniconda: [https://mirror.tuna.tsinghua.edu.cn/help/anaconda/](https://mirror.tuna.tsinghua.edu.cn/help/anaconda/)
- pip: [https://mirror.tuna.tsinghua.edu.cn/help/pypi/](https://mirror.tuna.tsinghua.edu.cn/help/pypi/)

各位可以根据实际网络环境，选择相对更优的镜像源，以提高库的获取速度。

## 安装编辑器

在本教程中，我主要使用`Visual Studio Code`进行编码开发。而目前我所熟知的两个常用的Python程序编辑器是`PyCharm`和`Visual Studio Code`，前者对于企业而言需要付费，后者则可以免费使用。至于二者选择哪一种在本教程中是无所谓的，即便你使用`Windows记事本`工具也并不影响你完成项目。

- Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- PyCharm: [https://code.visualstudio.com/](https://code.visualstudio.com/)

如果你使用`PyCharm`，则直接开箱即用。

如果你使用`Visual Studio Code`则可以使用官方推荐的Python插件，一般会在首次使用Python时弹出提示框。或者在`拓展`一栏中搜索并安装：

- ms-python.python
- donjayamanne.python-extension-pack
- magicstack.MagicPython

三个插件即可。
