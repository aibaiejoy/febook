# 使用node编写命令行工具

1. 声明编译环境
		//新建一个nodejs文件：hello.js
		#!/usr/bin/env node
2. 改变文件属性，使文件可以执行
		chmod +x hello.js

3. run
		./hello.js

## 更近一步，创建一个node包

1. 首先创建一个文件夹 
		mkdir hello
2. 使用npm生成一个package.json文件
		npm init   //按要求输入即可::
