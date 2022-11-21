const posts=[
    {title:"post one" ,des:"this is post one"},
    {title:"post two" ,des:"this is post two"},
    {title:"post three",des:"this is post three"}
    
];
const getPosts=function(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;

    },1000);
}
const UpdateUserLastActivity=()=>{
    const error=false;
    return new Promise((resolve,reject)=>{
        if(!error){
           // setTimeout(()=>{
                console.log(`User LastActivityTime=${new Date()}`);
                
                 resolve();
            
               //},1000)
        }
        else{
            console.log('update user last activity not performed');
            reject()
        }

    })
}


const createPost=function(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
             const error=false;
            if(!error){
                 setTimeout(()=>{
                     UpdateUserLastActivity();
                 },1000)
                //UpdateUserLastActivity();
                resolve();

            }
            else{
                reject('Some error')
            }
        },1000);

    });
            
    };
//createPost({title:"post three",des:"this is post three"})//after promise returned we call getfunction using then
//.then(getPosts)
//.catch(err=>console.log(err));//catching the error by setting error to true and catching it using catch and we console the error.
const deletePost=function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const arr_length=posts.length;
            if(!arr_length){
                reject('Array is empty now');

            }
            else{
                posts.pop();
                resolve();

            }
            
        },5000);
    })
};

/*correct way to call one function after other using then is to make new function by including all the function to be called in correct order and pass on (then).
or by using arrow function inside then for calling two function  eg:line num 97-103.
.then(()=>{
    getPosts();
    deletePost();
})*/
/*const newfunction=()=>{
    getPosts();
    deletePost();
}*/
//deletePost()
//deletePost()//.then(getPosts);
//deletePost()
//deletePost()
//.catch(err=>console.log(err))
console.log(`Before Creating Post 4, User LastActivityTime=${new Date()}`);
console.log('After creating post four');
createPost({title:'post four',des:'this is post four'})
/*.then(setTimeout(()=>{
    getPosts();
    /*deletePost().then(()=>{
        getPosts();
    })*/
//},1000)
//);



// Promise.all([createPost,UpdateUserLastActivity]).then(posts.forEach((post)=>{
//     console.log(post.title)
// }))
Promise.all([createPost,UpdateUserLastActivity]).then(console.log(posts)).then(deletePost)
.then(setTimeout(()=>{
    console.log(posts)

},3000))




//eg:promise.all takes an array of promises

/*const promise1=Promise.resolve('hello');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'hii')});
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
*/