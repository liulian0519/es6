//1. forEach
var colors = ["red","yellow","blue"];

//es5
for(var i=0;i<colors.length;i++)
{
    // console.log(colors[i]);
}
//es6
colors.forEach(function(color){
    // console.log(color);
})

//练习相加
var numbers = [1,2,3,4,5,6];
var sum = 0
numbers.forEach(function(number){
    sum+=number;
})
// /console.log(sum);


//2.map
//场景一：将A数组中的值乘以2放入另外一个数组中
var numA = [1,2,3];
var doubleA = numA.map(function(i){
    return i * 2;
});
// console.log(doubleA)

//场景二：将一个对象中某个属性值放入另外一个数组中
var student =[
    {name:"liulian",age:"18",score:"98"},
    {name:"liu",age:"18",score:"90"},
    {name:"lian",age:"18",score:"80"}
]
var score = student.map(function(stu){
    return stu.score;
});
// console.log(score);   

//3. fliter 
// 场景一：将对象数组中的指定类型的对象放入另一个数组
var students =[
    {name:"liulian",age:"18",score:"98",type:"middle"},
    {name:"liu",age:"18",score:"90",type:"junior"},
    {name:"lian",age:"18",score:"80",type:"middle"},
    {name:"dai",age:"20",score:"70",type:"junior"}
]
var fliterstudent = [];
fliterstudent = students.filter(function(stu){
    return stu.type === "middle"
})
// console.log(fliterstudent);
// 场景二：age > 10  score>95 type = middle
var studentone =[
    {name:"liulian",age:"18",score:"98",type:"middle"},
    {name:"liu",age:"18",score:"90",type:"junior"},
    {name:"lian",age:"18",score:"80",type:"middle"},
    {name:"dai",age:"20",score:"70",type:"junior"}
]
var filterResult = [];
filterResult = studentone.filter(function(stu){
    return stu.age > 10
    && stu.score>95
    && stu.type === "middle"
})
// console.log(filterResult)

// 4.every: &&     some:|| 
// 判断 多个input.length>0

function field(value){
    this.value = value;
}

field.prototype.validate = function(){
    return this.value.length > 0;
}

var username = new field("liulian");
var password = new field("123456");
var telephone = new field("12345678910");
var email = new field("1223342263@qq.com");

var fields = [username,password,telephone,email];
var IsValid = fields.every(function(fi){
    return fi.validate();
})
console.log(IsValid)
//接下来 就可以做你想做的事情了

//5. reduce 
// 相加 (代替foeach)
var nums = [10,20,30];
var sumValue = nums.reduce(function(sum,num){
    return sum+num;
},0);
console.log(sumValue);
// 代替map
var student =[
    {name:"liulian",age:"18",score:"98"},
    {name:"liu",age:"18",score:"90"},
    {name:"lian",age:"18",score:"80"}
];

var newStu = student.reduce(function(news,stu){
    news.push(stu.name);
    return news
},[])
console.log(newStu);
//判断字符串中括号是否对称

function balance(string){
    return !string.split("").reduce(function(prevous,char){
        if(prevous<0) {return prevous;}
        if(char == "(") {return ++prevous;}
        if(char == ")") {return --prevous;}
    },0)
}
console.log(balance(")()())"))