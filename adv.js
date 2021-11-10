var button=document.querySelector("#h3b");
var h3program=document.querySelector("#h3");
var h3b=true;
button.addEventListener("click",function(){
    if(h3b===true){
         h3b=false;
         h3program.textContent="";

    
    }
    else{
         h3program.textContent="Scientific";
         h3b=true;

    }

});

//-------------------------------------
//-------------------------------------
//-------------------------------------

var yak=document.querySelector("#yak");
var zero=document.querySelector("#zero");
var dw=document.querySelector("#dw");
var se=document.querySelector("#se");
var four=document.querySelector("#four");
var five=document.querySelector("#five");
var six=document.querySelector("#six");
var seven=document.querySelector("#seven");
var hasht=document.querySelector("#hasht");
var nine=document.querySelector("#nine");
var input=document.querySelector("#finput");
var add=document.querySelector("#add");
var h5=document.querySelector("h5");
var equal=document.querySelector("#equal");
var fact=document.querySelector("#fact");
var sub=document.querySelector("#sub");
var mul=document.querySelector("#mul");
var c=document.querySelector("#c");
var power3=document.querySelector("#power3");
var powy=document.querySelector("#powy");
var SinInv=document.querySelector("#SinInv");
var CosInv=document.querySelector("#CosInv");
var TanInv=document.querySelector("#TanInv");
var Sin=document.querySelector("#Sin");
var Cos=document.querySelector("#Cos");
var tan=document.querySelector("#tan");
var ce=document.querySelector("#ce");
var pow2=document.querySelector("#pow2");
var root=document.querySelector("#root");
var power10=document.querySelector("#power10");
var log=document.querySelector("#log");
var exp=document.querySelector("#exp");
var div=document.querySelector("#div");
var backSpace=document.querySelector("#backSpace");
var mod=document.querySelector("#mod");
var oneDIx=document.querySelector("#oneDIx");
var ex=document.querySelector("#ex");
var plssub=document.querySelector("#plssub");
var ln=document.querySelector("#ln");
var pi=document.querySelector("#pi");
var sign="";
var result=0;
var check=true;
var second=0;
var first=0;
var final=0;
var alpha=0;
//-----------------------------------------------//-------------------------------------------NUMBERS----//-----------------------------------------------
yak.addEventListener("click",function(){
result=result+1+"";
input.value=result;
})
dw.addEventListener("click",function(){
result=result+2+"";
input.value=result;})
se.addEventListener("click",function(){
result=result+3+"";
input.value=result;})
four.addEventListener("click",function(){
result=result+4+"";
input.value=result;})
five.addEventListener("click",function(){
result=result+5+"";
input.value=result;})
six.addEventListener("click",function(){
result=result+6+"";
input.value=result;})
seven.addEventListener("click",function(){
result=result+7+"";
input.value=result;})
hasht.addEventListener("click",function(){
result=result+8+"";
input.value=result;})
nine.addEventListener("click",function(){
result=result+9+"";
input.value=result;})
zero.addEventListener("click",function(){
result=result+0+"";
input.value=result;})
//---------------------BUTTONS----------------------------
c.addEventListener("click",function(){
result=0;
    input.value="";
    h5.textContent="";
    final=0;
})
backSpace.addEventListener("click",function(){
    var x=input.value;
  x=x.substring(1);
    result=(1*x);
     input.value=x;
    


    
})
ce.addEventListener("click",function(){
result=0;
input.value="";
})
plssub.addEventListener("click",function(){
result=(input.value*1);
result=result*-1;
input.value=result;
})
pi.addEventListener("click",function(){
input.value=Math.PI;
})
add.addEventListener("click",function(){
    sign="+";
    alpha=1;
    if(check===false){
        StoreValueDef();}
    else{
       StoreValueOne();
    }
     check=false;

})
div.addEventListener("click",function(){
    sign="÷";
    alpha=5;
    if(check===false){
        StoreValueDef();}
    else{
       StoreValueOne();
    }
     check=false;

})
mod.addEventListener("click",function(){
    sign="%";
    alpha=6;
    if(check===false){
        StoreValueDef();}
    else{
       StoreValueOne();
    }
     check=false;

})
power3.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=final*final*final;
        h5.textContent="powered to 3 : "+final;

})
pow2.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.pow(final,2);
        h5.textContent=final;

})
fact.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=factorial(final);
        h5.textContent="Factorial is:"+final;

})
ln.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.log(final)
        h5.textContent=final;
    

})
ex.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.pow(Math.E,final);
        h5.textContent=final;

})
oneDIx.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=1/final;
        h5.textContent=final;

})
power10.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.pow(10,final);
        h5.textContent=final;

})
log.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.log10(final);
        h5.textContent=final;

})
exp.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.exp(final);
        h5.textContent=final;

})
root.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.sqrt(final)
        h5.textContent=final;

})
SinInv.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.asin(final);
        h5.textContent="Sin Inverse is: "+final;

})
CosInv.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.acos(final);
        h5.textContent="Cos Inverse is: "+final;

})
TanInv.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.atan(final);
        h5.textContent="Tan Inverse is: "+final;

})
Sin.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.sin(final);
        h5.textContent="Sin is: "+final;

})
Cos.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.cos(final);
        h5.textContent="Cos is: "+final;

})
tan.addEventListener("click",function(){
        sign="";
        StoreValueOne();
        final=Math.tan(final);
        h5.textContent="Tan  is: "+final;

})
powy.addEventListener("click",function(){
    sign="";
    alpha=4;
    
    if(check===false){
        StoreValueDef();
    }
    else{
       StoreValueOne();
    }
     check=false;
    
});
sub.addEventListener("click",function(){
    sign="-"
    alpha=2;
    
    if(check===false){
        StoreValueDef();
    }
    else{
       StoreValueOne();
    }
     check=false;
    
    
})
mul.addEventListener("click",function(){
    sign="*";
    alpha=3;
    
    if(check===false){
        StoreValueDef();}
    else{
       StoreValueOne();}
    
      check=false;
    
    
})
//--------------------FUNCTIONS----------------------------
function factorial(n) {
  if (n == 0 || n == 1){
    return 1;}
  else{
  return factorial(n-1) * n;}
} 
function StoreValueOne(){  
    h5.textContent=sign+" "+result;
    first=(result*1);
    result=0;
    input.value="";
    final=final+first;}
function StoreValueTwo(){
    second=(result*1);
    h5.textContent="";
    result=0; 
    input.value="";
    
}
function StoreValueDef(){
    second=(result*1);
    input.value="";
    result=0; 
    switch(alpha){
     case 1:final=final+second;break;
     case 2:final=final-second;break;
     case 3:final=final*second;break;
     case 4:final=Math.pow(final, second);break;      
     case 5:final=final/second;break;      
     case 6:final=final%second;break;      
}
    h5.textContent=sign+" "+final;
    
}
equal.addEventListener("click",function(){  
   
    StoreValueTwo();
    
 switch(alpha) {
     case 1:final=final+second;break;
     case 2:final=final-second;break;
     case 3:final=final*second;break;
     case 4:final=Math.pow(final, second);break;  
     case 5:final=final/second;break;   
     case 6:final=final%second;break;      
  

 }
    h5.textContent=final;
    check=true;
   
})
