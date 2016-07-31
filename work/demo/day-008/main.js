/**
 * Created by Raoul on 2016/7/16.
 */
    var title =document.getElementById("title");
    var time =document.getElementById("time");
    var content =document.getElementById("content");
    var oBun = document.getElementsByTagName("button");
    var oUl =document.getElementsByTagName("ul")[0];
    var oInput =document.getElementsByTagName("input");
    // var oLi = document.getElementsByTagName("li");
    var ii =localStorage.getItem("num");
        function clearColor() {
        for (var n =0; n<oInput.length;n++){
            // oInput[n].style.backgroundColor="";
            oInput[n].index = n;
            oInput[n].onblur =function () {
                this.style.backgroundColor="";
            }
        }
    }
    oBun[0].onclick =function () {
        if(time.value==""||title.value==""||content.value==""){
            for (var n =0; n<oInput.length;n++){
                if(oInput[n].value==""){
                    oInput[n].style.backgroundColor="red";
                }
            }
            alert("请填写完整！");
        }else{
            ii++;
            var oLi =document.createElement("li");
            localStorage.setItem("title"+[ii],title.value);
            localStorage.setItem("time"+[ii],time.value);
            localStorage.setItem("content"+[ii],content.value);
            localStorage.setItem("num",ii);
            console.dir(localStorage);
            console.dir(ii);
            var oSpan = document.createElement("span");
            oLi.appendChild(oSpan);
            oSpan.innerHTML=localStorage.getItem("title"+[ii]);
            var oSpan1 = document.createElement("span");
            oLi.appendChild(oSpan1);
            oSpan1.innerHTML=localStorage.getItem("time"+[ii]);
            //将input中的字符串设置为li的属性，并显示
            oLi.addEventListener('click',function () {
                oInput[0].value=localStorage.getItem("title"+[ii]);
                oInput[1].value=localStorage.getItem("time"+[ii]);
                oInput[2].value =localStorage.getItem("content"+[ii]);

                clearColor();
            },false);
            oUl.appendChild(oLi);
            // clearColor();
        }
    };
    function set(i) {
    var oLi =document.createElement("li");
    var oSpan = document.createElement("span");
    oLi.appendChild(oSpan);
    oSpan.innerHTML=localStorage.getItem("title"+[i]);
    var oSpan1 = document.createElement("span");
    oLi.appendChild(oSpan1);
    oSpan1.innerHTML=localStorage.getItem("time"+[i]);
    //将input中的字符串设置为li的属性，并显示
    oLi.addEventListener('click',function () {
        oInput[0].value=localStorage.getItem("title"+[i]);
        oInput[1].value=localStorage.getItem("time"+[i]);
        oInput[2].value =localStorage.getItem("content"+[i]);
        clearColor();
    },false);
    oUl.appendChild(oLi);
    clearColor();
};

    oBun[1].onclick =function () {
        time.value="";

        title.value="";
        content.value="";
        localStorage.clear();
        console.log(localStorage);
        console.log(oLi.length);
            if(oUl.firstElementChild===oUl.lastElementChild){
                alert("不可以清除了");
            }else{
                for(var i =0 ; i<ii; i++){
                    oUl.removeChild(oUl.lastChild);
                }
            }
        clearColor();
    };
    for(var i = 1; i<= localStorage.getItem("num");i++){
        set(i);
};//实现使用localstorage存储数据。

