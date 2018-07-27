//字符串模板
//es5
//let template = '<h1>hello,world</h1><p>我一定可以的，你们一定要相信我!</p>'

//es6
let name = "liulian"
function makeupp(word){
    return word.toUpperCase();
}
let template = 
`
<h1>${makeupp('hello')},${name}</h1>
<p>我一定可以的，你们一定要相信我!</p>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>  
</ul>
`
document.getElementById('template').innerHTML = template;


// 箭头函数  缩减代码   改变this指向

// const team ={
//     members:["liulian","daidong"],
//     teamName:"es6",
//     teamSummary:function(){
//         return this.members.map(function(mem){
//             return `${mem}隶属于${this.teamName}小组`
//         })
//     }
// }
// //undefined
// console.log(team.teamSummary());

//es5 改进1
// const team ={
//     members:["liulian","daidong"],
//     teamName:"es6",
//     teamSummary:function(){
//         var self = this;
//         return this.members.map(function(mem){
//             return `${mem}隶属于${self.teamName}小组`
//         })
//     }
// }
// console.log(team.teamSummary());
//es5 改进2
const team ={
    members:["liulian","daidong"],
    teamName:"es6",
    teamSummary:function(){
        return this.members.map(function(mem){
            return `${mem}隶属于${this.teamName}小组`
        }.bind(this))
    }
}
console.log(team.teamSummary());

//增强对象字面量
function createBookshop(books){
    return {
        book:books,
        
        booktotalPrice(){
            //求所有书价格的总和
            // return this.book.reduce(function(total,bo){
            //    return  total +bo.price;
            // },0)
            // 使用箭头函数
            return this.book.reduce((total,bo)=>{
               return total+bo.price;   
            },0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        },
        // 根据书名查价格
        priceFoTitle(title){
            
            // return this.book.find(function(bo){
            //     return bo.title === title
            // }).price
            //箭头函数
            return this.book.find(bo=>bo.title===title).price
        }


    }

}

const books = [
    {title:"JS",price:60},
    {title:"Vue",price:30}
]

const bokshop = createBookshop(books);
console.log(bokshop.booktotalPrice());
console.log(bokshop.priceFoTitle("JS"));