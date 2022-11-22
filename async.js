//there is an async and need to wait as js is nonblocking, js does not wait for asynchronous
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const preMovie=async()=>{
    const promiseWifeBringing=new Promise((resolve,reject)=>{
        reject('ticket',3000);
    });
   /* const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));

    const getButter=new Promise((resolve,reject)=>resolve(`butter`));
    
    const getColddrinks=new Promise((resolve,reject)=>resolve(`colddrinks`));
    /*let ticket=await promiseWifeBringing;
    console.log('wife:i brought ticket');*/

    //let popcorn=await getPopcorn;
    //console.log('wife: i want popcorn');

    //let butter=await getButter;
    //console.log('wife:i want butter too');
    //console.log('husband:gets butter')

    //let coldDrinks=await getColddrinks;*/
    //console.log('wife:i want cold drinks');
    //console.log('brought cold drinks')
    /*let msg=await Promise.all([getPopcorn,getButter,getColddrinks]); //promise.all all functions will be called together
    console.log(msg);*/
    let ticket
    try{
        ticket=await promiseWifeBringing;
    }catch(e){
        ticket='sad face';
    }
     return ticket;
}
preMovie().then((m)=>console.log(`person3 shows ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket')
