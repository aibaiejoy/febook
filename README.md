# aibaidjoy

## 访问地址
> http://aibaiejoy.github.io/febook/

## 目录：
1. febook

		git clone https://github.com/aibaiejoy/febook.git febook

2. febook-end
		git clone -b gh-pages https://github.com/aibaiejoy/febook.git febook-end 

3. 在这两个目录的父目录执行 
		gitbook build febook febook-end
4. push 到仓库
		cd febook
		git push origin gh-pages
5. 访问
		[febook](http://aibaiejoy.github.io/febook/)

切换出master分支目录。我们需要将gh-pages分支内容存放到另一个目录中去。
克隆gh-pages分支：git clone -b gh-pages https://github.com/aibaiejoy/febook.git febook-end 这步我们只克隆了gh-pages分支，并存放在一个新的目录febook-end里面。
Copy静态多站代码到book-end目录中。
Push到仓库。

## gitbook 安装

	sudo npm install -g gitbook-cli

1. 之前版本安装的是gitbook，如果安装过gitbook需要删除掉，注意 `usr/local/lib/gitbook` 和 `urs/local/bin/gitbook`,都要删除


2. 目录结构
	
	SUMMARY.md  导航
	README.md   简介
	其他.md的文件

	* gitbook build * 把*.md文件编译成html文件并放到 _book下。

	把_book下文件push到gh-pages分支，就可以了。

3. 参考资料
	[Gitbook 使用入门](http://wanqingwong.com/gitbook-zh/publish/gitpages.html)  

	`使用这个注意gitbook的安装方法`


