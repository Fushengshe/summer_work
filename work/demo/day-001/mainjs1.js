/**
 * Created by Raoul on 2016/7/11.
 *
 1.了解ｊｓ变量的声明

 任务:在浏览器的控制台输出自己的名字

 2.了解ｊｓ如何声明一个函数

 任务：编写一个求和函数sum(a,b),在控制台输出自己的1+1的值

 3.了解js中对象的声明方式

 任务：1.定义一个person对象拥有姓名年龄爱好等属性,并且尝试修改这个对象的年龄
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.在控制台输出这个人的姓名

 4.了解ｊｓ**数组**的常用方法

 任务：1.完成数组常用方法
 */
window.onload=function () {
    //1.了解JS变量的声明。
    var name = "Raoul";
    console.dir(name);
    //2.JS声明函数。
    //this is a sum function
    function sum(a, b) {
        var sum = a + b;
        console.dir(sum);
    }

    sum(1, 1);
    /**3.JS声明对象。
     * 1.基于已有对象扩充其对象和方法,适合临时建立。
     * 2.工厂方式创建对象(每次创建一个object后，其中对应的方法(本例中是get)也被创建一次，方法不能被所创建的所有对象.
     * 3.构造函数方式
     * 4.使用原型(prototype)方式创建对象
     * 5.动态原型方式：在构造函数中通过标志量让所有对象共享一个方法，而每个对象拥有自己的属性。
     * http://www.educity.cn/wenda/63995.html
     */
    console.log("+++++++js对象的声明以及操作+++++++")
//        1.
    var obj = new Object();
    obj.name = "Raoul";
    obj.age = 21;
    obj.hobby = "run";
    console.dir(obj);
    console.dir(obj.name);
    console.dir(obj.age);
    obj.age = 20;
    console.dir(obj.age);
    console.dir("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//         2.
    function creatObject(username, password) {
        var obj = new Object();
        obj.name = username;
        obj.password = password;
        obj.get = function () {
            console.dir(this.name + "," + this.password);
        }
        return obj;
    }

    var obj1 = creatObject("Raoul", "unknow");
    obj1.get();

//      3.
    function Person(username, password) {
        this.username = username;
        this.password = password;
        this.getInfo = function () {
            console.dir(this.username + "," + this.password);
        }
    }

    var person = new Person("raoul1996", "unkown");
    person.getInfo();
    /**
     * 4.使用原型(prototype)方式创建对象：
     *优点：创建的多个对象共享同一个方法(getInfo)
     *缺点：创建的多个对象在共享同一个方法的同时也共享了同样的属性(username,password)，实际开发中这样儿是不行的，必须是多个对象都要有自己的属性。
     * 采用该方式创建对象通常是用来扩展已有对象的某一个方法。
     */
    
//        a.
    function Persona() {
    }

    Persona.prototype.username = "RaoulBaby";
    Persona.prototype.password = "unknow";
    Persona.prototype.getInfo = function () {
        console.dir(this.username + "," + this.password);
    }
    var person1 = new Persona();
    var person2 = new Persona();
    person1.username = "RaoulYes";
    person1.getInfo();
    person2.getInfo();
//        b.如果使用原型方式创建对象，那么生成的对象将会共享原型中的属性，这样一个对象改变了该属性也会反映到其他的对象上。
    function Personb() {
    }

    Personb.prototype.username = new Array(0);
    Personb.prototype.password = "unknow";
    Personb.prototype.getInfo = function () {
        console.dir(this.username + "," + this.password);
    }
    var person3 = new Personb();
    var person4 = new Personb();
    person3.username.push("RaoulNo");
    person3.username.push("RaoulNoo");
    person3.password = "Iknow";
    person3.getInfo();
    person4.getInfo();
//       c.使用原型和构造函数方式创建对象
    function PersonF() {
        this.username = new Array(0);
        this.password = "test";
    }

    PersonF.prototype.getInfo = function () {
        console.dir(this.username + "," + this.password);
    }
    var person5 = new PersonF();
    var person6 = new PersonF();
    person5.username.push("RaoulNoF");
    person5.username.push("RaoulNooF");
    person6.username.push("RaoulYesF");
    person6.username.push("RaoulYessF");
    person5.getInfo();
    person6.getInfo();
    /**
     *5.动态原型方式：在构造函数中通过标志量让所有对象共享一个方法，而每对象拥有自己的属性。
     */
    function PersonFF() {
        this.username = "Mitch"
        this.password = "lslslsls"
        if (typeof PersonFF.flag == "undefined") {
            PersonFF.prototype.getInfo = function () {
                console.dir(this.username + "," + this.password);
            }
            PersonFF.flag = true;
        }
    }

    var p = new PersonFF();
    var p2 = new PersonFF();
    p.getInfo();
    p2.getInfo();
    console.dir("+++++++++++下面是js数组操作++++++++++++++++++++++++++++");
//        var a =new Array(0);
//        http://www.cnblogs.com/tianguook/archive/2010/09/30/1839648.html
    var c = ["a", "jfd", "NULL", "0", 0];
    console.dir(c);
    var b = Array([5, 3, 5], [6, 2, 3]);//2维数组
    console.dir(b);
//        数组元素的访问.
    var testGetArrValue = c[1];
    console.log(testGetArrValue);
    c[1] = "change";
    console.dir(c);
//        数组元素的添加
    var arrayObj = new Array(0);
    arrayObj = [1, 2, 3, 4, 5, 6, 7];
    console.log(arrayObj);
    arrayObj.push(8, 9);//在数组尾部添加元素,并返回数组长度.
    console.log(arrayObj);
    arrayObj.unshift(-2, -1);//数组
    console.log(arrayObj);
    arrayObj.splice(2, 0, 0);//中间的一个参数代表把从指定位置开始计算数目的数组元素替换为其后边的所有元素，并不仅限于单个元素。
    console.log(arrayObj);
    //数组元素的删除。
    console.log("++++++++++++++数组元素的删除+++++++++++++++++=");
    console.log(arrayObj);
    var test = arrayObj.pop();//delete the last element of the array and return the element's value.
    console.log("the  pop() return value:" + test);
    console.log(arrayObj);
    var test1 = arrayObj.shift();//delete the first element of the array and  return the element's value ,The remaining elements will go forward.
    console.log("the  shift() return value:" + test1);
    console.log(arrayObj);
    var test2 = arrayObj.splice(2, 3);
    console.log("the  splice(2,3) return value:" + test2);
    console.log(arrayObj);
    console.log("+++++++++++数组的截取和合并++++++++++++++++++++");
    arrayObj = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
    console.log(arrayObj);
    var arrayObjP1 = arrayObj.slice(5);//return a part of the array of the type of array.NOTICE:the nwe array not include the end....
    console.log(arrayObjP1);
    var arrayObjP2 = arrayObj.slice(0, 4);
    console.log(arrayObjP2);
    console.log(arrayObj);
    var arrayObjB = arrayObjP1.concat("test");
    console.log(arrayObjB);
    console.log("++++++++++++++++++++数组的拷贝+++++++++++");
    var arrayObjC1 = arrayObj.slice(0);
    console.log(arrayObjC1);
    var arrayObjC2 = arrayObj.concat();
    console.log(arrayObjC2);
    console.log("+++++++++++++数组的排序+++++++++++++");
    var arrayObjR = arrayObj.reverse();
    arrayObj = arrayObj.reverse();
    console.log(arrayObjR);
    var arrayObjS = [-2, -1, 7, 9, 1, 8, 2, 6, 4, 5, 3, 0].sort();
    console.log(arrayObjS);
    console.log("+++++++++++++++++数组字符串化");
    var arrayObjString = arrayObjR.join(",");
    console.log(arrayObjString);
    var arrayObjTLS = arrayObjC1.toLocaleString();
    console.log(arrayObjTLS);
    var arrayObjTLS1 = arrayObjC2.toString();
    console.log(arrayObjTLS1);
    var arrayObjTLS2 = arrayObjB.valueOf();
    console.log(arrayObjTLS2);
//暂时先不深入了解array的三个属性。url(http://www.cnblogs.com/tianguook/archive/2010/09/30/1839648.html)
    //        js string
    /*
     http://www.cnblogs.com/fslnet/archive/2013/01/08/2850835.html
     1，属性 length
     2，方法
     charAt
     charCodeAt
     concat
     indexof
     lastIndexOf
     localeCompare
     match
     replace
     search
     slice
     split
     substr
     substring
     toLowerCase
     toString
     toUpperCase
     valueOf
     静态方法
     String.fromCharCode
     */
    var myString = new String("welcome to study javascript!");
    var myString1 = "I like javascript!";
    console.dir(myString);
    console.dir(myString1);
    console.log("++++++++++++字符串拼接++++++++");
    var myStringL = "every "+"day "+"is "+"new";
    console.log(myStringL);
    var myStringL1 = "happly " ;
    myStringL1 +="raoul";
    console.log(myStringL1);
    console.log("++++++++++++截取字符串+++++++++");
    var myStringSub ="0123456789ABCDEF"
    var session1 = myStringSub.substring(6);//截取第 6 位开始的字符
    console.log(session1);
    console.log(myStringSub);
    var session2 = myStringSub.substring(6,12);//截取第 6 位开始的字符
    console.log(session2);
    var session3 = myStringSub.substring(15,5);//负数什么鬼？
    console.log(session3);
    console.log("++++++++++++转换大小写+++++++++");
    var Hello ="Hello";
    var hello = Hello.toLowerCase();
    console.log(Hello);
    console.log(hello);
    var HELLO = Hello.toUpperCase();
    console.log(HELLO);
    console.log("+++++++++++检索字符串+++++++=");
    var SearchString = myString;
    console.log(SearchString.indexOf("i"));//return the address of the first time the string can be find.
    console.log(SearchString.replace("javascript","php"));
    console.dir(SearchString);
    /**
    *8.特殊字符:怎么用？
     * \b : 后退符 \t : 水平制表符
     * \n : 换行符 \v : 垂直制表符
     * \f : 分页符 \r : 回车符
     * \" : 双引号 \' : 单引号
     * \\ : 反斜杆
     */
    console.log("+++++++++++将字符转换成Unicode编码+++");
    var code =HELLO.charCodeAt(3);//注意，没有引号。
    console.log(code);
    console.log(String.fromCharCode(66));
    console.log("+++++++++++将字符转换成URL编码+++")
    var noURL="hello world";
    var url =encodeURI(noURL);//注意，没有引号。
    console.log(url);
    console.log(decodeURI(url));
    console.log("+++++++++++js字符串函数++++++")
    //concat:合并字符串
    var Jsa="hello";
    var Jsa1 =" "
    var Jsb="world";
    var Jsc =Jsa.concat(Jsa1,Jsb);
    console.log(Jsc);
    //indexOf：检索字符串,返回地址,没有返回-1
    var Jsd =Jsa.indexOf("o");
    console.log(Jsd);
    //lastIndexOf:逆向检索字符串
    console.log(Jsa.lastIndexOf("o"));
    //charAt:返回指定位置字符.
    console.log(Jsc.charAt(0));


}
