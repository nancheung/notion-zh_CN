# notion-zh_CN 是什么？

notion-zh_CN是对notion.so的汉化油猴脚本

# 为什么要做这个项目？

官方汉化遥遥无期，网上一些汉化插件也早已无人维护，因此创建此项目。众人拾柴火焰高，每人只需要看到未汉化的地方，随手添加那么一两行的汉化信息，也能很快将web端大概汉化完全。

# 如何使用?
1. ## 安装油猴插件
    此处提供搜索到知乎的一篇教程：https://zhuanlan.zhihu.com/p/128453110
  
2. ## 安装油猴脚本
    打开链接：https://greasyfork.org/zh-CN/scripts/427308-notion-zh-cn-notion%E7%9A%84%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC 。然后点击安装。
    
3. ## 体验汉化效果
    https://www.notion.so

# 大家可以做什么？

1. **完善未汉化的地方**。看到未汉化的地方，将原文和中文释义添加到文件中。
2. **优化汉化语言**。有些地方可能翻译的不太好，大家有更好的翻译欢迎修改。ps:本人打算参考一下wolai的翻译
3. 如果有前端朋友，可以帮忙**整理下程序结构**就更好了。本人js很菜~

# 怎么添加汉化信息？
编辑 <https://github.com/nancheung97/notion-zh_CN/blob/main/notion-zh_CN.js> 文件，找到I18n.install，在其中按照已有格式添加信息：
```js
  // 该函数大概格式如下：
  I18n.install('zh', {
    // '原文':'中文',   注意标点服务为英文符号，末尾有,
    'Hide description':'隐藏说明',
  });
```
