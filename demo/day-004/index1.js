/**
 * Created by Raoul on 2016/7/16.
 */
window.onload = function (){
    var oLi = document.getElementsByTagName("li");
    for(var i = 0; i < oLi.length; i++){
        oLi[i].onclick = function (){
            alert(this.innerHTML);
        }
    }
}
