// function middleware(store, next, action) {
//   const state = store.getState();
//   // al tener acceso al store tenemos acceso a la emisión
//   store.dispatch({
//     type: 'TEST',
//   });
//   // también decide si la acción continúa o no
//   // redux nos provee la función 'next'
//   next(action)
//   // si no se quiere que continúe la acción NO se invoca. Se puede invocar una nueva acción.
// }

// function middleware(store) {
//   return function(next) {
//     return function(action) {
//       const state = store.getState();
//       store.dispatch({
//         type: 'TEST',
//       });
   
//       next(action)
//     }
//   }
// }

const middleware = store => next => action => {
  console.log(action);
  
  // const state = store.getState();
  //     store.dispatch({
  //       type: 'TEST',
  //     });
   
      next(action)
}

export default middleware