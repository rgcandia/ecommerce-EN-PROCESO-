
export const iniciarEstado =  (dispatch, action)=>{
 fetch('http://localhost:3001/productos')
 .then(res=>res.json())
 .then(res=>dispatch(action(res)))
}


// 


