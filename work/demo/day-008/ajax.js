/**
 * Created by Raoul on 2016/7/20.
 */
var pull =oBun[2];
var res = new Array(0);
//获取一个已知id元素的value值。
function getIdVal(id) {
    return document.getElementById(id).value;
}
pull.onclick =function () {
    var request =new XMLHttpRequest();
    request.open("GET","http://api.stlab.qoder.cn/test/todos"," ");
    //需要把整个数组拉取到，keyword怎么写？
    request.send();
    request.onreadystatechange =function () {
        if(request.readyState ===4){
            if(request.status === 200){
                res =request.responseText;
            }else {
                alert("error"+request.status);
            }
        }
    }
}
console.dir(res);

//遍历ajax返回数组，并将其设置为li标签的属性，并将其title time属性赋值给其下的子节点。
// for(var i = 0; i<=res.length; i++){
//     oLi[i].setAttribute("title", res[i][0]);
//     oLi[i].setAttribute("time", res[i][1]);
//     oLi[i].setAttribute("content", res[i][2]);
//     oLi[i].childNodes[0].innerHTML = oLi[i].getAttribute("title");
//     oLi[i].childNodes[1].innerHTML = oLi[i].getAttribute("time");
// }
