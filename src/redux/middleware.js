// const middleware = store => next => action => {
//   console.log(action);
  
//   const state = store.getState();
//       store.dispatch({
//         type: 'TEST',
//       });
   
//       next(action)
// }

const actions = [];

const middleware = store => next => action => {

  actions.push(action)
  localStorage.setItem('actions',JSON.stringify(actions))
 
  next(action)
}

export default middleware