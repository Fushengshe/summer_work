/**
 * Created by Raoul on 2016/7/24.
 */
fetch('http://api.neuqstlab.qoder.cn/users/login',{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'test',
        paddword: '123456',
    })
}).then(function(res){
    return res.json();
}).then(function(json){
    console.log(json);
});