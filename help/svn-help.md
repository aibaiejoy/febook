<script src='./util.js'></script>

#svn help

## svn resolve

resolved: Remove 'conflicted' state on working copy files or directories.
usage: resolved PATH...

resolved edj.下定决心的，断然的; 坚决的; 已解决的; <br>
v.做决定，分解(resolve的过去式和过去分词);  

Note:  this subcommand does not semantically resolve conflicts or <br>
remove conflict markers; it merely removes the conflict-related<br>
artifact files and allows PATH to be committed again.  It has been<br>
deprecated in favor of running `svn resolve --accept working`.<br>

`这个命令并不能解决冲突，仅仅删除冲突相关的伪文件，并允许重新提交。`

	Valid options:
	  --targets ARG            : pass contents of file ARG as additional args
	  -R [--recursive]         : descend recursively, same as --depth=infinity
	  --depth ARG              : limit operation by depth ARG ('empty', 'files',
								 'immediates', or 'infinity')
	  -q [--quiet]             : print nothing, or only summary information

	Global options:
	  --username ARG           : specify a username ARG
	  --password ARG           : specify a password ARG
	  --no-auth-cache          : do not cache authentication tokens
	  --non-interactive        : do no interactive prompting
	  --trust-server-cert      : accept SSL server certificates from unknown
								 certificate authorities without prompting (but only
								 with '--non-interactive')
	  --config-dir ARG         : read user configuration files from directory ARG
	  --config-option ARG      : set user configuration option in the format:
									 FILE:SECTION:OPTION=[VALUE]
								 For example:
									 servers:global:http-library=serf

## svn resolve

resolve: Resolve conflicts on working copy files or directories.
usage: resolve --accept=ARG [PATH...]

  Note:  the --accept option is currently required.

	Valid options:
	  --targets ARG            : pass contents of file ARG as additional args
	  -R [--recursive]         : descend recursively, same as --depth=infinity
	  --depth ARG              : limit operation by depth ARG ('empty', 'files',
								 'immediates', or 'infinity')
	  -q [--quiet]             : print nothing, or only summary information
	  --accept ARG             : specify automatic conflict resolution source
								 ('base', 'working', 'mine-conflict',
								 'theirs-conflict', 'mine-full', 'theirs-full')

`svn resolve --accept working <file>, 解决冲突，使用working，即本地文件`
## svn revert 
