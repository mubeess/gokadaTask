// export const UsersInit=(users)=>{
// return (dispatch,getState)=>{
// // make an asyn call
// // fetch('https://jsonplaceholder.typicode.com/todos')
// //   .then(response => response.json())
// //   .then(json => dispatch({
// //     type:'USERS_INIT',
// //     payload:users
// // }))
    
// }
// };

export const UsersInit=(users)=>{
    return {
        type:'USERS_INIT',
        payload:users
    }
    };
    
