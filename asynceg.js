
async function mypromise() {
    
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            let salarycredited = true;
            let salary = 100000;
            let mi = 10000;
            let lenovo = 12000;
            if (salarycredited === true && salary > lenovo) {
                resolve('buy lenovo');
            } else if (salarycredited === true && salary < mi) {
                resolve('buy mi');
            } else{
                reject('next time');
            }
        }, 1000)
    })
    console.log(promise);
}

mypromise();