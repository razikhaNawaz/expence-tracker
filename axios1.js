//axios global-in every function of axios,token is added-actually used for authentication
axios.defaults.headers.common['X-Auth-token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

function getTodos() {
    /*axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todos?_limit=5', 
        //params:{
         //   _limit:5
        //} 
        //to limit data, add to url ?_limit5 5 users data will be added or add parameters
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err)); *///res.data gives the data of 200 users,showOutput(res) shows output below getpost i.e., html content
//OR can be done like this
    axios
.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{timeOut:5000})
.then(res=>showOutput(res))
.catch(err=>console.error(err)); 
}                                  
  
  // POST REQUEST
  function addTodo() {  //sending data
   /* axios({
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data: {
            title:'New Todo',
            completed: false
        }
    })*/
    //OR can be done as, and for data we simply put as second parameter as data
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title:'New Todo',
        completed: false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err));
  }
  
  // PUT/PATCH REQUEST-updating first user and method used is put, to patch the data
  function updateTodo() {
    axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
        title:'Updated Todo',
        completed: false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err));
  }
  
  // DELETE REQUEST -no need to add any data
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')  //user1 data is deleted
    .then(res=>showOutput(res))
    .catch(err=>console.error(err));
  }
  
  // SIMULTANEOUS DATA-if we want to get todos data(200) and posts data(100users), we can do it by using .then(postsdata).then(tododata) but this is not an ideal way so use axios.all()
  //axios.all is a method takes the array of requests and once the promises are fulfilled den we handle it  
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    /*.then(res=>{
        console.log(res[0]);
        console.log(res[1]);
        showOutput(res[1]);
    })*/
    .then(axios.spread((todos,posts)=>showOutput(posts)))
    .catch(err=>console.error(err));
    
  }
  
  // CUSTOM HEADERS-if we have authentication with JSON web tokens and we made a request to login
  //to validate login and get back the token den we  need to send token to header to access protected routes
  //so add getpost first, then create config with details and den add to getpos with as a third parameter
  function customHeaders() {
    const config={
        headers:{
            'content-type':'application/JSON',
            authoriation:'sometoken'
        }
    };
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title:'New Todo',
        completed: false
    }, config)
    .then(res=>showOutput(res))
    .catch(err=>console.error(err));
  }
  
  // TRANSFORMING REQUESTS & RESPONSES-create a variable options and add a method and add a post request to todos url
  //and data that we need to send-actually done to protect the data, if for whole bunch protected data needs to be created then need to go global
  //go to top and create a token for global
  function transformResponse() {
    const options={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:'hello world'
        },
        transformResponse:axios.defaults.transformResponse.concat((data)=>{
            data.title=data.title.toUpperCase();
            return data;
        })
    }
    axios(options).then(res=>showOutput(res));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios
       .get('https://jsonplaceholder.typicode.com/todoss')
       .then(res=>showOutput(res))
       .catch(err=> {; 
        //server responded with a status other than 200 range
       if(err.response){
           console.log(err.response.data);
           console.log(err.response.status);
           console.log(err.response.headers);
           if(err.response.status===404){
            alert('Error:page not found');
           }
        }else if(err.request){
            console.log(err.request);//request was made but no response
        }else{
            console.log(err.message);
        }
       });
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    const source = axios.CancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });

  if (true) {
    source.cancel('Request canceled!');
  }
  }
  // INTERCEPTING REQUESTS & RESPONSES-takes a function config as a parameter
  axios.interceptors.request.use(config=>{
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}()`);
    return config;
  },
  error=>{
    return Promise.reject(error);
  }
);
  
  
  // AXIOS INSTANCES
  
const axiosInstance = axios.create({
    // Other custom settings
    baseURL: 'https://jsonplaceholder.typicode.com'
  });
  //axiosInstance.get('/comments').then(res => showOutput(res));
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);