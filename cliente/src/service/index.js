
export const iniciarEstado =  (dispatch, action)=>{
//  fetch('http://localhost:3001/productos')
 fetch("https://servidor-ecommerce-cotaxnsdg-rgcandia.vercel.app/productos")
 .then(res=>res.json())
 .then(res=>dispatch(action(res)))
}


// 


