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
    console.dir(localStorage);
        function clearColor() {
        for (var n =0; n<oInput.length;n++){
            // oInput[n].style.backgroundColor="";
            oInput[n].index = n;
            oInput[n].style.backgroundColor="";
            oInput[n].onblur =function () {
                this.style.backgroundColor="";
            }
        }
    }
    oBun[0].onclick =function () {
        clearColor();
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
            oLi.setAttribute("content",content.value);
            oLi.setAttribute("title",title.value);
            oLi.setAttribute("time",time.value);
            //将input中的字符串设置为li的属性，并显示
            oLi.addEventListener('click',function () {
                oInput[0].value=oLi.getAttribute("title");
                oInput[1].value=oLi.getAttribute("time");
                oInput[2].value =oLi.getAttribute("content");
            },false);
            oUl.appendChild(oLi);
        }
    };
    oBun[1].onclick =function () {
        clearColor();
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
    };
    for(var i = 1; i<= ii;i++){
    // var oLi = document.createElement("li");
    var oLi =document.createElement("li");
    var oSpan = document.createElement("span");
    oLi.appendChild(oSpan);
    oSpan.innerHTML=localStorage.getItem("title"+[i]);
    var oSpan1 = document.createElement("span");
    oLi.appendChild(oSpan1);
    oSpan1.innerHTML=localStorage.getItem("time"+[i]);
        oLi.setAttribute("content",localStorage.getItem("content"+[i]));
        oLi.setAttribute("title",localStorage.getItem("title"+[i]));
        oLi.setAttribute("time",localStorage.getItem("time"+[i]));
    //将input中的字符串设置为li的属性，并显示
    oLi.addEventListener('click',function () {
        oInput[0].value=this.getAttribute("title");
        oInput[1].value=this.getAttribute("time");
        oInput[2].value =this.getAttribute("content");
        // clearColor();
    },false);
    oUl.appendChild(oLi);
    // clearColor();
};//实现使用localstorage存储数据。

