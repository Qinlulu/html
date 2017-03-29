npm nodejs的包管理器

//npm 安装第三方包
npm install packageName -g   全局安装
npm install packageName --save  当前项目安装


//发布一个包
1、http://www.npm.org 注册一个账号
2、打开cmd - npm addUser 输入你的用户名、密码
3、配置package.json 文件准备发布
4、通过 npm publish 发布一个包，并且要确保 package.json 文件的 name 不能与npm 服务器有重复，否则报错