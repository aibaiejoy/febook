# febook

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
5. 访问[febook](http://aibaiejoy.github.io/febook/)

## gitbook 安装

	sudo npm install -g gitbook-cli

1. 之前版本安装的是gitbook，如果安装过gitbook需要删除掉，注意 `usr/local/lib/gitbook` 和 `urs/local/bin/gitbook`,都要删除


2. 目录结构
	
	SUMMARY.md  导航
	README.md   简介
	其他.md的文件

3. 参考资料
	[Gitbook 使用入门](http://wanqingwong.com/gitbook-zh/publish/gitpages.html)  

	`使用这个注意gitbook的安装方法`


