import store from './redux/store';

const itemListDOM = $('#itemList');
const itemDOM = $('#item');
const txtNuevaNotaDOM = $('#txtNuevaNota')

txtNuevaNotaDOM.keyup((e) => {
  console.log('entro');
  
  if (e.keyCode === 13) {
    console.log(e.keyCode);
    
    const text = txtNuevaNotaDOM.val();
    txtNuevaNotaDOM.val('');

    store.dispatch({
      type: 'AGREGAR',
      payload: {
        text,
      }
    })
  }
})

function actualizarLista(items) {
  itemListDOM.html(''); // Borra la lista

  for(const item of items) {

    const cloneDOM = itemDOM.clone()
    const chkHabilitadoDOM = cloneDOM.find('input');
    const btnBorrarDOM = cloneDOM.find('button');
    const lblNombreDOM = cloneDOM.find('span');

    cloneDOM.removeClass('d-none')

    lblNombreDOM.html(item.text);

    if(item.completado) {
      lblNombreDOM.css('text-decoration', 'line-through');
    }

    btnBorrarDOM.on('click', () => { // Al pulsar el botón borrar queremos emitir la acción BORRAR:
      console.log('Borrar');
      store.dispatch({
        type: 'BORRAR',
        payload: {
          id: item.id
        }
      })
    })
    chkHabilitadoDOM.prop('checked', item.completado);
    chkHabilitadoDOM.on('click', () => {
      console.log('click en checkbox');
      store.dispatch({
        type: 'ALTERNAR',
        payload: {
          id: item.id
        }
      })
      //      
    });

    itemListDOM.append(cloneDOM) // Agrega cloneDOM al ul del html
  }
};

store.subscribe(() => {
  const state = store.getState();
  
  actualizarLista(state)
  debugger
  console.log(state);
});
