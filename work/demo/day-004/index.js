/**
 * Created by Raoul on 2016/7/16.
 */
    var title =document.getElementById("title");
    var time =document.getElementById("time");
    var content =document.getElementById("content");
    var oBun = document.getElementsByTagName("button");
    var oUl =document.getElementsByTagName("ul")[0];
    var oInput =document.getElementsByTagName("input");
    var oLi = document.getElementsByTagName("li");
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
            var oLi =document.createElement("li");
            oLi.setAttribute("title",title.value);
            oLi.setAttribute("time",time.value);
            oLi.setAttribute("content",content.value);
            var oSpan = document.createElement("span");
            oLi.appendChild(oSpan);
            oSpan.innerHTML=oLi.getAttribute("title");
            var oSpan1 = document.createElement("span");
            oLi.appendChild(oSpan1);
            oSpan1.innerHTML=oLi.getAttribute("time");
            oLi.addEventListener('click',function () {
                oInput[0].value=oLi.getAttribute("title");
                oInput[1].value=oLi.getAttribute("time");
                oInput[2].value =oLi.getAttribute("content");
                clearColor();
            },false);
            oUl.appendChild(oLi);
            clearColor();
        }
    };
    oBun[1].onclick =function () {
        time.value="";
        title.value="";
        content.value="";
        clearColor();
    };