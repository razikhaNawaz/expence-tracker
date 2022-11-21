const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);

}
function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error:something went wrong');
            }

        }, 2000);
    });

}
function create4Posts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error:something went wrong');
            }

        }, 3000);
    });

}

const user = {
    username: 'razikha',
    lastActivityTime: '20th of november'
}
function updateLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = newDate().getTime();
            resolve(user.lastActivityTime)
        }, 4000);
    })
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastElement = posts.pop()
                resolve(lastElement);
            }
            else {
                reject('array is empty now');
            }
        }, 1000);
    });
}
createPosts({ title: 'post three', body: 'this is post three' })
    .then(() => {
        create4Posts({ title: 'post four', body: 'this is post four' })
            .then(() => {
                getPosts()
                //deletePost().then(()=>{})
                deletePost().then((deletedElement) => {
                    console.log(deletedElement)
                    getPosts();
                    deletePost().then(() => {
                        getPosts()
                        deletePost().then(() => {
                            getPosts()
                            deletePost().then(() => { 
                                getPosts()
                            })
                                .catch((err) => {
                                    console.log('inside catch block', err)
                                })
                        })
                    })
                })
            })
    })
    .catch(err => console.log(err))

/*.catch((err)=>{
console.log('inside catch block',err*/