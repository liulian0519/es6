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
