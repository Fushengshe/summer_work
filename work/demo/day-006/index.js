/**
 * Created by Raoul on 2016/7/23.
 */
var oBun = document.getElementsByTagName("button");
var confirmU,confirmP ;
oBun[0].onclick =function () {
    var user = document.getElementById("username").value;
    var passwd = document.getElementById("passwd").value;
    if(user==""||passwd==""){
        alert("请将信息填写完整！");
    }else{
        console.log(user);
        confirmU= user.match("[^\u4e00-\u9fa5]");
        //实现输入*必须*为中文的方法是正则匹配非中文。
        console.log(confirmU);
        console.log(passwd);
    confirmP = passwd.match("[_a-zA-Z0-9_]{6,}");
    console.log(confirmP);
    if (confirmP ==null ||confirmU !=null){
        alert("输入不合法");
    }else {
        window.open('../day-004/main.html');
    }
}
}
