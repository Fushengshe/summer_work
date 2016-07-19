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
            oInput[n].style.backgroundColor="";
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
            var oString =title.value+"--"+time.value +"--"+ content.value;
            oLi.innerHTML=oString;
            oUl.appendChild(oLi);
            clearColor();
        }
    }
    var ooLi =document.getElementsByTagName("li");
    oBun[1].onclick =function () {
        time.value="";
        title.value="";
        content.value="";
        clearColor();
    }
    for(var i = 1; i < oLi.length; i++){
        ooLi[i].index =i;
        ooLi[i].addEventListener('click',function () {
            var str = this.innerHTML;
            var arr =str.split("--");
            console.log(arr);
            oInput[0].value=arr[0];
            oInput[1].value=arr[1];
            oInput[2].value = arr[2];
            clearColor();
        },false);
    }
// }