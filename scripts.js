console.log("//////////////////////////////////");
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");
console.log("/////////Уровень 1//////////////");
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");

console.log("//////////////////////////////////");
console.log("/////////Задание 1.1//////////////");
console.log("//////////////////////////////////");
let x=213;
if(x<0)console.log(`${x} - число отрицательное`);
else if(x==0)console.log(`${x} - число равно нулю`);
else console.log(`${x} - число положительное`);
console.log("//////////////////////////////////");
let a="abvgdezhz";
console.log(`Длина строки ${a} = ${a.length}`);
console.log("//////////////////////////////////");
console.log(`Последний символ строки - ${a[a.length-1]}`);
console.log("//////////////////////////////////");
if(x%2==0)console.log(`Число ${x} - четное`);
else console.log(`Число ${x} - не четное`);
console.log("//////////////////////////////////");
let b="abevegedeiki"
if(a[0]==b[0])console.log(`Первые буквы строк ${a} и ${b} - совпадают`);
else console.log(`Первые буквы строк ${a} и ${b} -  не совпадают`);
console.log("//////////////////////////////////");
console.log("/////////Задание 1.2//////////////");
console.log("//////////////////////////////////");
let y=String(x);
console.log(`Первая цифра-${y[0]}`);
console.log("//////////////////////////////////");
console.log(`Последняя цифра-${y[y.length-1]}`);
console.log("//////////////////////////////////");
let z1=Number(y[0]);
let z2=Number(y[y.length-1]);
console.log(`Сумма первой и последней цифры=${z1+z2}`);
console.log("//////////////////////////////////");
console.log(`Количество цифр в числе ${x} = ${y.length}`);
console.log("//////////////////////////////////");
let x0=228;
let y0=String(x0);
if(y[0]==y0[0])console.log(`Первые цифры чисел ${x} и ${x0} - совпадают`);
else console.log(`Первые цифры чисел ${x} и ${x0} - не совпадают`);
console.log("//////////////////////////////////");
console.log("/////////Задание 1.3//////////////");
console.log("//////////////////////////////////");
if(b.length>1)console.log(`Предпоследний символ строки ${b} - ${b[b.length-2]}`);
else console.log(`Строка "${b}" состоит из 1-го символа`);
console.log("//////////////////////////////////");
if(x%x0==0)console.log(`Число ${x} делится на ${x0} без остатка`);
else console.log(`Число ${x} делится на ${x0} с остатком`);
console.log("//////////////////////////////////");
console.log("/////////Задание 1.4//////////////");
console.log("//////////////////////////////////");
for(let i=0;i<=100;i++){
console.log(i);
}
console.log("//////////////////////////////////");
for(let i=-100;i<=0;i++){
console.log(i);
}
console.log("//////////////////////////////////");
for(let i=100;i>=1;i--){
console.log(i);
}
console.log("//////////////////////////////////");
for(let i=1;i<=100;i++){
if(i%2==0)console.log(i);
}
console.log("//////////////////////////////////");
for(let i=1;i<=100;i++){
if(i%3==0)console.log(i);
}
console.log("//////////////////////////////////");
console.log("/////////Задание 1.5//////////////");
console.log("//////////////////////////////////");
let x1=0;
for(let i=1;i<=100;i++){
console.log(x1+=i);
}
console.log("//////////////////////////////////");
let x2=0;
for(let i=1;i<=100;i++){
if(i%2==0)console.log(x2+=i);
}
console.log("//////////////////////////////////");
let x3=0;
for(let i=1;i<=100;i++){
if(i%2!=0)console.log(x3+=i);
}
console.log("//////////////////////////////////");
console.log(`Остаток от деления ${x}/${x0}=${x%x0}`);
console.log("//////////////////////////////////");
let bToArr=b.split("");
bToArr.reverse();
let bNew=bToArr.join("");
console.log(`Строка ${b} наоборот - ${bNew}`);
console.log("//////////////////////////////////");
console.log("/////////Задание 1.6//////////////");
console.log("//////////////////////////////////");
let arr1=[1,-2,3,-4,11];
let arr2=arr1.map(n=>n*n);
console.log(arr2);
console.log("//////////////////////////////////");
let arr3=arr2.map(n=>Math.sqrt(n));
console.log(arr3);
console.log("//////////////////////////////////");
let sum=0;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>0)sum+=arr1[i];
}
console.log(sum);
console.log("//////////////////////////////////");
sum=0;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>0 && arr1<10)sum+=arr1[i];
}
console.log(sum);
console.log("//////////////////////////////////");
console.log("/////////Задание 1.7//////////////");
console.log("//////////////////////////////////");
let str='abcde';
arr4=str.split("");
console.log(arr4);
console.log("//////////////////////////////////");
let num=12345;
let str1=String (num);
arr5=str1.split("");
console.log(arr5);
console.log("//////////////////////////////////");
arr5.reverse();
num2=arr5.join("");
console.log(num2);
console.log("//////////////////////////////////");
let arr6=String (num).split("").reduce((sum,elem)=>sum+Number(elem),0)
console.log(arr6);
console.log("//////////////////////////////////");
console.log("/////////Задание 1.8//////////////");
console.log("//////////////////////////////////");
let arr7=[];
for(let i=0;i<10;i++){
    arr7[i]=i+1;
}
console.log(arr7);
console.log("//////////////////////////////////");
let arr8=[];
for(let i=1;i<=100;i++){
    if(i%2==0){
        arr8.push(i);
    }
}
console.log(arr8);
console.log("//////////////////////////////////");
let arr9=[1.456, 2.125, 3.32, 4.1, 5.34];
for(let i=0;i<arr9.length;i++){
    arr9[i]=arr9[i].toFixed(1);
}
console.log(arr9);
console.log("//////////////////////////////////");
console.log("/////////Задание 1.9//////////////");
console.log("//////////////////////////////////");
let arr10=['http://yutub.com','string.html','https://youtub.com','http://notobman.com'];
let arr11=[];
arr11=arr10.filter(el=>el.includes('http://'))
console.log(arr11);
console.log("//////////////////////////////////");
let arr12=[];
arr12=arr10.filter(el=>el.includes('.html'))
console.log(arr12);
console.log("//////////////////////////////////");
arr=[1,2,3,4,5];
arr1=arr.map(el=>el+el*0.1);
console.log(arr1);
console.log("//////////////////////////////////");
x=10;
arr=[];
for(let i=0;i<x;i++){
    arr[i]=Math.round(Math.random()*100);
}
console.log(arr);
console.log("//////////////////////////////////");
console.log(num2);
console.log("//////////////////////////////////");
arr=[1,2,3,4,5,6]
arr1=[];
arr2=[];
arr3=[];
for(let i=0;i<arr.length;i++){
    arr1=arr.filter((el,i)=>i<2)
    arr2=arr.filter((el,i)=>i>=2 && i<4)
    arr3=arr.filter((el,i)=>i>=4)
}
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log("//////////////////////////////////");
arr1=[1,2,3];
arr2=[4,5,6];
arr3=[...arr1,...arr2];
console.log(arr3);

console.log("//////////////////////////////////");
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");
console.log("/////////Уровень 2//////////////");
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");

console.log("//////////////////////////////////");
console.log("/////////Задание 2.1//////////////");
console.log("//////////////////////////////////");
str='adlawldsda1230-asdasd';
arr=str.split("");
for(let i=0;i<arr.length;i++){
    if(arr[i]==0)console.log(i);
}
console.log("//////////////////////////////////");
arr=[];
for(let i=1;i<=1000;i++){
    arr.push(i);
}
arr1=arr.filter(el=>{
    str= String(el);
    num= Number(str[0]);
    num1= Number(str[str.length-1]);
    return num+num1==5;
})
console.log(arr1);
console.log("//////////////////////////////////");
x=5
y="t"
arr=[12,213,123,5,55,231,'t','ertret','monkey'];
for(let i=0;i<arr.length;i++){
   if(arr[i]==x || arr[i]==y)arr.splice(i,1); 
}
console.log(arr);
console.log("//////////////////////////////////");
arr=[1,2,3,4,5,6];
arr1=arr.splice(0,Math.floor(arr.length/2));
arr2=arr1.reduce((acc,el)=>acc+el,0)
console.log(arr2);
console.log("//////////////////////////////////");
console.log("/////////Задание 2.2//////////////");
console.log("//////////////////////////////////");
arr=[]
for(let i=0;i<10;i++){
    arr[i]=Math.floor(Math.random()*(200/*сюда пишем диапазон чисел*/)-100/*сюда пишем минимальное значение*/);
}
let count=0;
arr.forEach(el=> {
    if(el<0)count++;
});
console.log(count);
console.log("//////////////////////////////////");
console.log(arr);
arr.forEach((el,i)=> {
    if(el<0)arr.splice(i,1);
});
console.log(arr);
console.log("//////////////////////////////////");
str="abvgde";
str1=str.slice(0, -2) + str.slice(-1)
console.log(str1)
console.log("//////////////////////////////////");
arr=[1,2,3,4,5,6];
arr1=arr.splice(0,3);
arr=[1,2,3,4,5,6];
arr2=arr.splice(3,3);
arr3=arr1.reduce((acc,el)=>acc+el,0);
arr4=arr2.reduce((acc,el)=>acc+el,0);
arr5=arr3/arr4;
console.log(arr5);
console.log("//////////////////////////////////");
console.log("/////////Задание 2.3//////////////");
console.log("//////////////////////////////////");
str="lol"
str1="loshka";
if(str.substring(str.length-1,str.length) == str1.substring(0,1))console.log("da");
else console.log("ni");
console.log("//////////////////////////////////");
str="10010202";
str1=str.split("");
count=0;
str1.forEach((el,i)=>{
    if(el==0)count++;
    if(count==3){
        console.log(i);
        count++;}
})
console.log("//////////////////////////////////");
str="12,34,56";
str1=str.split(",");
str2=str1.reduce((acc,el)=>acc+Number(el),0);
console.log(str2);
console.log("//////////////////////////////////");
str="2022-02-24";
str1=str.split("-");
let obj={
    year:'',
    month:'',
    day:''};
    console.log(str1.length);
    obj.year=str1[0];
    obj.month=str1[1];
    obj.day=str1[2];
console.log(obj);
console.log("//////////////////////////////////");
console.log("/////////Задание 2.4//////////////");
console.log("//////////////////////////////////");
str='dfsfdf1v22v123v12mnv12c';
str1=str.split("");
count=0;
str1.forEach((el,i)=>{
    for(let index=0;index<=9;index++){
        if(el==index)count++;
    }
    if(count==1){
        console.log(i);
        count++;}
})
console.log("//////////////////////////////////");
obj={a:1,b:2,c:3};
arr=Object.keys(obj);
arr1=[obj.a,obj.b,obj.c];
console.log(arr,arr1);
console.log("//////////////////////////////////");
num=123456789;
str=String(num);
arr=str.split("");
count=0;
arr.forEach(el=>{
    if(Number(el)%2===0)count++
})
console.log(count);
console.log("//////////////////////////////////");
str="abcde";
arr=str.split("");
res="";
arr.forEach((el,id)=>{
    if(id%2==0)res+=el.toUpperCase()
        else res+=el;
});
console.log(res);
console.log("//////////////////////////////////");
str="aaa bbb ccc";
arr=str.split(" ");
arr1=arr.splice(0,1).join("").split("");
arr2=arr.splice(0,1).join("").split("");
arr3=arr.splice(0,1).join("").split("");
res1="";
res2="";
res3="";
arr1.forEach((el,id)=>{
    if(id===0)res1+=el.toUpperCase()
        else res1+=el;
})
arr2.forEach((el,id)=>{
    if(id===0)res2+=el.toUpperCase()
        else res2+=el;
})
arr3.forEach((el,id)=>{
    if(id===0)res3+=el.toUpperCase()
        else res3+=el;
})
arr1=res1.split(" ");
arr2=res2.split(" ");
arr3=res3.split(" ");
arr4=[...arr1,...arr2,...arr3];
str1=arr4.join(" ");
console.log(str1);
console.log("//////////////////////////////////");
console.log("/////////Задание 2.5//////////////");
console.log("//////////////////////////////////");
str='023m0df0dfg0';
arr=str.split("");
arr1=[];
arr.forEach((el,id)=>{
    if(el==0)arr1.push(id);
})
console.log(arr1);
console.log("//////////////////////////////////");
str='abcdefg';
arr=str.split("");
count=1;
for (let i = 0; i < arr.length; i++,count++) {
    if(count%3===0){
        arr.splice(i,1);
        count=1;
    }
}
console.log(arr);
console.log("//////////////////////////////////");
arr=[1, 2, 3, 4, 5, 6];
let el1=0;
let el2=0;
arr1=arr.map(el=>{
    if(el%2===0)el1+=el;
    if(el%3===0)el2+=el;
    res=el1/el2;
})
console.log(res);
console.log("//////////////////////////////////");
console.log("/////////Задание 2.6//////////////");
console.log("//////////////////////////////////");
str='hs12s1dalsa'
arr=str.split("");
arr1=[]
arr.forEach((el,i)=>{
    if(el>=0 || el<=9)arr1.push(i);
})
console.log(arr1);
console.log("//////////////////////////////////");
arr=[123,456,789];
for(let i=0;i<arr.length;i++){
    str = String(arr[i]);
    let tmp = str.split("");
    tmp.reverse();
    str = tmp.join("")
    arr[i] = Number(str);
}
console.log(arr);
console.log("//////////////////////////////////");
str='1234567';
str1='';
for (let i = str.length-1,count=0; i >=0; i--) {
    str1=str[i]+str1;
    count++;
    if(count%3===0 && i>0){
        str1=' '+str1;
    }
}
console.log(str1);
console.log("//////////////////////////////////");
str = "AbCdE";
str1 = str.split("");

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str1[i].toUpperCase()) {
        str1[i] = str1[i].toLowerCase();
    } else if (str1[i] === str1[i].toLowerCase()) {
        str1[i] = str1[i].toUpperCase();
    }
}

str2 = str1.join("");
console.log(str2);
console.log("//////////////////////////////////");
arr=[1,2,3,4,5,6];
for (let i = arr.length-1; i>=0; i--) {
    if(arr[i]%2===0){
        arr[i]=String(arr[i-1])+String(arr[i]);
        arr[i]=Number(arr[i]);
        arr.splice(i-1,1);
        i--;
    }

}
console.log(arr);
console.log("//////////////////////////////////");
str = 'aaa bbb ccc eee fff';
arr = str.split(" ");

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        arr1 = arr[i].split("");
        arr1[0] = arr1[0].toUpperCase();
        arr[i] = arr1.join("");
    }
}

result = arr.join(" ");
console.log(result);
console.log("//////////////////////////////////");
console.log("/////////Задание 2.7//////////////");
console.log("//////////////////////////////////");
str = 'a bc def ghij';
arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
        arr[i] = arr[i].toUpperCase();
    }
}

result = arr.join(" ");
console.log(result);
console.log("//////////////////////////////////");
el="a";
if(el===el.toLowerCase())console.log(`${el} - в нижнем регистре`);
else console.log(`${el} - в верхнем регистре`);
console.log("//////////////////////////////////");
str = '123789';
result = str.split("").filter(el => Number(el) % 2 === 0).join("");
console.log(result); 
console.log("//////////////////////////////////");
console.log("/////////Задание 2.8//////////////");
console.log("//////////////////////////////////");
str = "Hello World JavaScript";

count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        count++;
    }
}

if (count <= 2) {
    console.log("В строке не более двух заглавных букв");
} else {
    console.log("В строке более двух заглавных букв");
}
console.log("//////////////////////////////////");
str='1 22 333 4444 22 5555 1';
result=str.split(" ").filter(el=> el.length<=3).join(" ");
console.log(result);
console.log("//////////////////////////////////");
arr1 = [1, 2, 3];
arr2 = ['a', 'b', 'c'];

last = arr1.pop();

arr3 = [...arr1, ...arr2, last];

console.log(arr3);
console.log("//////////////////////////////////");
console.log("/////////Задание 2.9//////////////");
console.log("//////////////////////////////////");
arr=[1,2,3,4,5,6];
sum=0;
for (let i = arr.length-1; i>=0; i--) {
    if(arr[i]%2===0){
        arr[i]=String(arr[i-1])+String(arr[i]);
        arr[i]=Number(arr[i]);
        arr.splice(i-1,1);
        i--;
        sum+=arr[i];
    }
}
console.log(sum);
console.log("//////////////////////////////////");
arr=[1, 2, 3, 4, 5];
console.log(arr.reverse());
console.log("//////////////////////////////////");
console.log("/////////Задание 3.1//////////////");
console.log("//////////////////////////////////");
num = 12345
str =String(num)
result = true
for (let i = 0; i < str.length - 1; i++) {
    if(str[i]>str[i+1]) {
        result = false
    } 
}
if (result) {
    console.log(num + " по возрастанию");
}
else {
    console.log(num + " не по возрастанию");
}
console.log("//////////////////////////////////");
arr=[1,'',2,3,'',5];
arr.forEach((el,i)=>{
    if(el=='')arr.splice(i,1);
})
console.log(arr);
console.log("//////////////////////////////////");
arr=[
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
]
for(let i=0;i<arr.length;i++){
    arr[i].sort()
}
console.log(arr);
console.log("//////////////////////////////////");
arr1 = [1, 2, 3];
arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length; i++) {
    if(arr2.length!==arr1.length)arr2.pop();
}
console.log(arr1,arr2);
console.log("//////////////////////////////////");
console.log("/////////Задание 3.2//////////////");
console.log("//////////////////////////////////");
arr=[]
for(let i=0;i<10;i++){
    arr[i]=Math.floor(Math.random()*(1000/*сюда пишем диапазон чисел*/)-0/*сюда пишем минимальное значение*/);
}