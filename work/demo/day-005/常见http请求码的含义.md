##常见HTTP状态码的含义

*[http://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html](http://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html "HTTP协议详解")*

*time：2016/07/31 周日 14:22:57.02*

*editor：Raoul*

----

http响应也是由3部分构成。包括：状态行、消息报头、响应正文。

1.状态行的格式如下：

**HTTP-Version Status-Code Reason-Phrase CRLF**

其中HTTP-Version表示服务器HTTP协议的版本； Status-Code表示服务器发回的响应状态代码。Reason-Phrase表示状态代码的文本描述。

状态代码一共有三位数字组成，第一个数字定义了响应的类别，且有5种可能的取值：

- 1xx：指示信息--表示请求已接收，继续处理
- 2xx：成功--表示请求已经成功接收、理解、接受
- 3xx：重定向--要完成请求必须进行更一步的操作
- 4xx：客户端错误--请求语法问题或者请求无法实现
- 5xx：服务器端错误--服务器未能实现合法的请求

常见状态代码、状态描述、说明：

- 200 OK  //客户端请求成功
- 400 Bad Request  //客户端请求有语法错误,不能被服务器理解
- 401 Unauthorized  //请求未经授权,**这个状态代码必须和WWW-Authenticate报头域一起使用**
- 403 Forbidden  //服务器收到请求,但是拒绝提供服务
- 404 Not Found  //请求资源不存在.eg:输入了错误的URL
- 500 Internal Server Error  //服务器发生了不可预期的错误
- 503 Server Unavailable //服务器当前不能处理客户请求,一段时间后可能恢复正常

eg:HTTP/1.1 200 OK (CRLF).