# git help

## git revert <version>

 	git revert是撤销到某次操作，此次操作之前的commit都会被保留,代码会回到指定版本，但是提交记录不会删除
	此次操作之前和之后的commit和history都会保留，并且把这次撤销作为一次最新的提交
	    * git revert HEAD                  撤销前一次 commit
	    * git revert HEAD^               撤销前前一次 commit
	    * git revert commit （比如：fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）撤销指定的版本，撤销也会作为一次提交进行保存。

	git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去，

	版本会递增，不影响之前提交的内容

## git reset <version> 
	
	git reset 是撤销到某次提交，但是此次之后的修改都会被退回到暂存区

	取消stated状态指定文件到unstated状态 git reset HEAD <file>，文件内容不变
	取消全部并删除:git reset --hard HEAD <file>
	
	取消全部用 git reset
	取消全部并删除 git reset --hard 

	一、基本篇
	在git的一般使用中，如果发现错误的将不想staging的文件add进入index之后，想回退取消，则可以使用命令：
		git reset HEAD <file>...，同时git add完毕之后，git也会做相应的提示，比如：
	引用
		# Changes to be committed: 
		#   (use "git reset HEAD <file>..." to unstage) 
	//	# 
		# new file:   Test.scala 
		
		git reset 取消add状态。

		git reset [--hard|soft|mixed|merge|keep] [<commit>或HEAD]：
	将当前的分支重设（reset）到指定的<commit>或者HEAD（默认，如果不显示指定commit，默认是HEAD，即最新的一次提交），并且根据[mode]有可能更新index和working directory。mode的取值可以是hard、soft、mixed、merged、keep。下面来详细说明每种模式的意义和效果。
	A). --hard：重设（reset） index和working directory，自从<commit>以来在working directory中的任何改变都被丢弃，并把HEAD指向<commit>。

## git config

	mac/linux与windows协作开发时，windows同学注意设置一下line-encoding，防止因为平台环境不同导致文件被更改
	git config --global core.autocrlf input
	具体可见：http://www.qinbin.me/git-core-autocrlf%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E
	
	git config --list 查看git配置，
	git config --global user.name 查看全局的用户名配置，（git提交代码和用户名邮箱没有关系，和ssh key）有关系
	git config --global user.email 

	--global --system（设置当前用户账号）--local 当前项目

	remote.origin.url=git@gitlab.rd.chanjet.com:gongzuoquan/gongzuoquan-resource.git
	remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*

## git log
	我们通过'git log -p'命令来显示每一次提交与其父节点提交内容之间快照的差异
	git log --stat -p src/index.html
