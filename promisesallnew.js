const posts = [
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
]

function getposts() {
    setInterval(() => {
        let output='';
        posts.forEach((post) => {
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}



function createPost(post) {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post)

            const error = false;

            if(!error) {
                resolve();
            }
            else {
                reject('Error:Something went wrong')
            }
           },1000);

    });   
}


function deletePost() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(posts.length>0) {
                resolve(posts.pop());
            }
            else {
                reject('Inside catch no Array is found')
            }


        },1000)
    })
}
createPost({title:'Post three',body:'This is post three'}).then(()=>{
    getposts();deletePost().then(()=>{
        getposts();deletePost().then(()=>{
            getposts();deletePost().then(()=>{
                getposts();deletePost().then(()=>{}).catch(err => {console.log(err)})
            })
        })
    })
}
)
createPost({title:'Post four',body:'This is post four'}).then(()=>{
    setTimeout(()=> {
        // getposts();
        deletePost() },2000)

    })


    const users = [
        {user:'razikha',lastactivity :new Date().getTime()}
    ]

 function createUser() {
     return new Promise((resolve,reject)=>{
     users.forEach( user=>{
        users.push(user)
      } )    
        if(users.push()){
            resolve(console.log("lastactivity" + new Date().getTime()))
        }
        else{
            reject("failed")
        }
     })
 }

 function lastactivity() {
    return new Promise((resolve,reject)=>{
        users.lastactivity=new Date().getTime()
        const a =true;
        if(a){
        resolve(console.log("last activity updated to " + new Date().getTime()))
        }
        else {
            reject("good bye")
        }
    })
 }

  createUser({user:'razikha',lastactivity:new Date().getTime()})
Promise.all([createUser,lastactivity]).then((values)=>{
    console.log(values)
}).catch((message)=>{console.log(message)})


function deleteLast(){
     return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        posts.pop();
        resolve("Deleted")

      },6000)

     }).then((msg)=> {
        console.log(msg)
        getposts()
    })

}