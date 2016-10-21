/**
 * Created by Raoul on 2016/7/24.
 */

function fetchLogin() {
    fetch('http://api.neuqstlab.qoder.cn/users/login',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // body: JSON.stringify({
        //     name: 'test',
        //     paddword: '123456'
        // })
        body:"name=test&password=123456"
    }).then(function(res){
        return res.json();
    }).then(function(json){
        console.log(json);
        localStorage.id = json.data.id;
    });

}
var login =document.getElementById("logo").getElementsByTagName("h1")[0];
    login.onclick =function () {
        fetchLogin();
    };
function getTodo() {
    fetch('http://api.neuqstlab.qoder.cn/users/todos/:'+localStorage.id,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(res){
        return res.json();
    }).then(function(json){
        console.log(json);
    });
}
oBun[2].onclick = function () {
    getTodo();
};
function addItem() {
    fetch('http://api.neuqstlab.qoder.cn/users/todos/:'+localStorage.id,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            title:'qoder',
            time:'16:25',
            content:'I need help!!!!!'
        })
    }).then(function(res){
        return res.json();
    }).then(function(json){
        console.log(json);
    });
}
oBun[3].onclick = function () {
    addItem();
};
function deleteAll() {
    fetch('http://api.neuqstlab.qoder.cn/users/todos/:'+localStorage.id,{
        method:'DELETE',
        header:{
            'Accept':'application/json',
            'Content-type':'application/x-www-form-urlencoded'
        }
    }).then(function (res) {
        return res.json;
    }).then(function (json) {
        console.log(json);
    });
}
oBun[4].onclick =function () {
    deleteAll();
};