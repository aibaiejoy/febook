# shell 命令

## find 

<a href="http://www.cnblogs.com/serendipity/articles/2133385.html">find 命令</a>

	find pathname -options [-print -exec -ok ...]

	pathname: find命令所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录。

	-print： find命令将匹配的文件输出到标准输出。

	-exec： find命令对匹配的文件执行该参数所给出的shell命令。相应命令的形式为'command' {  } \;，注意{   }和\；之间的空格。

	-ok： 和-exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，都会给出提示，让
	用户来确定是否执行。

	-mtime -n +n 
	按照文件的更改时间来查找文件， - n表示文件更改时间距现在n天以内，+ n表示文件更改时间距现在n天以前。find命令
	还有-atime和-ctime 选项，但它们都和-m time选项


### find命令选项
	-name 

	按照文件名查找文件。

	find . -type f -name ".DS_Store" -exec rm {} \;

## zip

	zip -q -r -e -m -o [yourName].zip someThing

	-q 表示不显示压缩进度状态

	-r 表示子目录子文件全部压缩为zip  //这部比较重要，不然的话只有something这个文件夹被压缩，里面的没有被压缩进去

	-e 表示你的压缩文件需要加密，终端会提示你输入密码的

	// 还有种加密方法，这种是直接在命令行里做的，比如zip -r -P Password01! modudu.zip SomeDir, 就直接用Password01!来加密modudu.zip了。

	-m 表示压缩完删除原文件

	-o 表示设置所有被压缩文件的最后修改时间为当前压缩时间

	eg.

	zip -q -r './summary.zip' ./summary