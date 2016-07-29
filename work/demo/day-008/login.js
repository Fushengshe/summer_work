/**
 * Created by Raoul on 2016/7/29.
 */
var request =new XMLHttpRequest();
var res = new Array(0);
request.open("POST","http://api.neuqstlab.qoder.cn/users/login");
//需要把整个数组拉取到，keyword怎么写？
var data = "name=test"+"&password=123456";
request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
request.send(data);
request.onreadystatechange =function () {
    if(request.readyState ===4){
        if(request.status === 200){
            res = request.responseText;
        }else {
            alert("error"+request.status);
        }
    }
};
console.log(res);