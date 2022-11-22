function buyaCar(cb1,cb2,cb3){   
    setTimeout(()=>{         
        console.log('buy a car')
        cb1(cb2,cb3)
    },10000);
}
function planatrip(cb2,cb3){
    setTimeout(()=>{
        console.log('plan a trip')
        cb2(cb3)
    },2000);
}
//buyaCar();
//planatrip();     //by doing this buy a car takes 10 sec to execute then plan a trip 2 sec,but without buying a car we cant go to manali
                    //so we need to use callback function to execute function buy a car even after with delay of 10se
//buyaCar(planatrip);    // by doing this we can by passing planatrip argument inside function buy a car we get output which we want
                        //like first buy a car den plan a trip
function reachManali(cb){
    setTimeout(()=>{
        console.log('reachmanali')
        cb()
    },2000);
}
//buyaCar(planatrip,reachManali); ////as we proceed further we need to add callback functions as arguments inside main function, as functions
                                //as functoions increased it ll become like callback hell, so we go for promises
function gotomountain(){
    setTimeout(()=>{
        console.log('reachmountain')
    },1000);
}
buyaCar(planatrip,reachManali,gotomountain);// everytime we need to code and it has become like a callback hell,messy and size of code also increases


//promises- suppose i said u that i ll buy a phone means that i made a promise, after that two possibilitues will be there like i may buy it(resolve) or reject it
//actually result will be in a pending state. new promuise is a constructor is called which is taking a callback function inside it

function buyaCar(){   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{         
            resolve('buy a car')
            //or res('buy a car)
        },5000)
    })
    
}
function planatrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('plan a trip')    
        },2000);
    })
    
}
function reachManali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('error:accident happened')
        },2000)
    })
    
}
/*buyaCar().then((msg)=>{   //buy a car is a function need to invoke with a promise, watever we resolve that comes into msg
    console.log(msg)
     planatrip().then((msg2)=>{
        console.log(msg2)
        reachManali().then((msg3)=>{
            console.log(msg3)
        })
     })

});*///by calling .then for all function still it become messy,code length also increases so async awit was introduced it ll work together with promises only
async function fun1(){
    try{
    const msg=await buyaCar();
    console.log(msg);
    const msg2=await planatrip();
    console.log(msg2);
    const msg3=await reachManali();// if reject case is there we need to handle error with try catch
    console.log(msg3);
    }catch(err){
        console.log(err)
    }
}
fun1()