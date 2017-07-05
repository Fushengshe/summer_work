/**
 * Created by Raoul on 2016/7/29.
 */
function ajaxLogin() {
    var request =new XMLHttpRequest();
    request.open("POST","http://api.neuqstlab.qoder.cn/users/login");
    var data = "name=test"+"&password=123456";
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.send(data);
    request.onreadystatechange = function () {
        if(request.readyState ===4){
            if(request.status === 200){
                var data =JSON.parse(request.responseText);
                console.log(data);
                localStorage.setItem("id",data.data.id);
                console.log(localStorage);
            }else {
                alert("error"+request.status);
            }
        }
    }
}
function GETTodo() {
    var request =new XMLHttpRequest();
    var res = new Array(0);
    request.open("GET","http://api.neuqstlab.qoder.cn/users/todos/:"+localStorage.getItem("id"));
// request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.send();
    request.onreadystatechange =function () {
        if(request.readyState ===4){
            if(request.status === 200){
                var data =JSON.parse(request.responseText);
                console.log(data);
            }else {
                alert("error"+request.status);
            }
        }
    }
}
function addItem() {
    var request =new XMLHttpRequest();
    request.open("POST", "http://api.neuqstlab.qoder.cn/users/todos/:"+localStorage.id);
     //var data="title=1&time=1&content=1";
    // var data ="title:"+oInput[0].value+"&time:"+oInput[1].value+"&content:"+oInput[2].value;
    // var data ={"fileds":[{"title":oInput[0].value},{"time":oInput[1].value},{"content":oInput[2].value}]};
    var data = JSON.stringify({title:oInput[0].value, time:oInput[1].value, content: oInput[2].value});
    request.setRequestHeader("Content-Type","application/x-www-form urlencoded");
    request.send(data);
    request.onreadystatechange = function () {
        if(request.readyState === 4){
            if(request.status ===200){
                var data=JSON.parse(request.responseText);
                console.log(data);
            }
        }
    }
}
function deleteItem() {
    var request =new XMLHttpRequest();
    var res = new Array(0);
    request.open("DELETE","http://api.neuqstlab.qoder.cn/users/todos/"+localStorage.getItem("id"));
//需要把整个数组拉取到，keyword怎么写？
// var data = "name=test"+"&password=123456";
 request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.send();
    request.onreadystatechange =function () {
        if(request.readyState ===4){
            if(request.status === 200){
                var data =JSON.parse(request.responseText);
                console.log(data);
            }else {
                alert("error"+request.status);
            }
        }
    }
}
var login =document.getElementById("logo").getElementsByTagName("h1")[0];
login.onclick =function () {
    ajaxLogin();
};
oBun[2].onclick=function () {
    GETTodo();
};
oBun[3].onclick=function () {
    addItem();
};
oBun[4].onclick=function () {
    deleteItem();
};
