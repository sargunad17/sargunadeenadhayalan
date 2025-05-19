var a=10;
var b=20;
console.log(a+b)
console.log(a>b)
console.log(a*b)
console.log(a%b)
function add(a,b)
{
  console.log(a+b)
  console.log(a-b)
}
add(10,5)

const sum=()=>{
  console.log(10+20)
}
sum()

a=20
if(a%2==0)
{
  console.log("even")
}
else{
  console.log("odd")
}

i=1
while(i<=10)
{
  console.log(i)
  i++
}

i=1
do{
  console.log(i)
}
while(i<=10);

for(i=1;i<=10;i++)
{
  if(i%2==0)
  {
    console.log(i)
  }
}

n=3
switch(n){
   case 1:
     console.log("monday")
     break;
   case 2:
     console.log("tuesday")
     break;
   case 3:
     console.log("friday")
     break;    
}

n=10
var result=(n%2==0)?"even":"odd";
console.log(result)