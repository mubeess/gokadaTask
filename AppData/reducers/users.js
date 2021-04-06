const initState={
  users:{}
}
  export default function(state=initState,action){
    switch (action.type) {
      case 'USERS_INIT':
           return {
             ...state,
             users:action.payload
           }
  
      case 'PRESENT_USER':
        const presentUser=action.payload;
        state.filter(user=>{
          if (presentUser.id==user.id) {
            user=presentUser;
          }
        })
          default:
            return state;
          
  }
  }