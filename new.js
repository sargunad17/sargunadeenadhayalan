i=10
sum=0
for(n=1;n<=i;n++)
{
 if(n%2==0)
  { 
    sum+=n;
  }
}
 console.log(sum)
 
 function even()
 {
    a=10
    sum=0
    for(n=1;n<=a;n++)
    {
        if(n%2==0)
        {
        sum+=n;
        }
    }
    console.log(sum)
}
even()
                                                                                                  
var arr=[10,20,30,40,50,60]
for(var index in arr)
{
  console.log(index)
}
for(var index of arr)
  {
    console.log(index)
  } 

var obj={ name:"sarguna",dept:"Cs"}                                                                                             
for( var key in obj)
{
  console.log(key)
  console.log(obj[key])
}  

var arr=[1,2,3,4,5]
var arr2=[...arr,6,7,8]
console.log(arr2)

var marks=[90,99,97,98,100]
var[m1,m2,m3,m4,m5]=marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)

function saybye()
{
  console.log("bye")
}
function add(name,callback)
{
 console.log( "hello  " + name)
 callback()
}
add("sarguna",saybye);

const btn=document.getElementById("btn1");
btn.onclick=function()
{
  window.open("https://www.instagram.com")
  alert("welcome")
}

