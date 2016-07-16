/**
 * Created by Raoul on 2016/7/16.
 */
window.onload =function () {
    var title =document.getElementById("title");
    var time =document.getElementById("time");
    var content =document.getElementById("content");
    var oBun = document.getElementsByTagName("button");
    var oUl =document.getElementsByTagName("ul")[0];
    var oli =document.getElementsByName("li");
    oBun[0].onclick =function () {
        if(time.value==""||title.value==""||content.value==""){
            alert("请填写完整！")
        }else{
            var oLi =document.createElement("li");
            var string =time.value +"--"+ content.value;
            oLi.innerHTML=string;
            oUl.appendChild(oLi);
        }
    }
    oBun[1].onclick =function () {
        time.value="";
        title.value="";
        content.value="";
        oli.innerHTML="";
    }
}