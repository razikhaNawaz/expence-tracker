const posts=[
    {Title:'Post One',Body:'This is post one'},
    {Title:'Post Two',Body:'This is post Two'}
]
function getPosts(){
    setInterval(() =>{
        let output=''
        posts.forEach((post,index) => {
        output+=`<li> ${post.Title}</li>`
        });
        document.body.innerHTML=output
    },1000)
    }
function createPost(post){

    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post) 
        const error= false
        if(!error){
            resolve()
        } else{
            reject('Error: Something went wrong') ;
        }
    },2000);
})
}
function Postfour(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error= false
            if (!error){
                resolve()
            }else{
                reject('Error: Something Went Wrong')
            }
        })
    },3000)
}
function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                let deletedelement=posts.pop()
                resolve(deletedelement)
            }else{
                reject('Array is empty')
    
            }
                
        },1000)
    })
    
}

async function start(){
    await createPost({Title:'Post Three',Body:'This is post three'})
    await Postfour({Title:'Post 4',Body:'This is post 4'})
    await getPosts()
    await deletePost()
    await getPosts()
    await deletePost()
    await getPosts()
    await deletePost()
    await getPosts()
    await deletePost()
    

}
start()