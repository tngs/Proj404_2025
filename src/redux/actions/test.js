export const test = (obj) => dispatch => {
    console.log("action test obj:",obj);
    dispatch({ type: 'TEST', payload: obj });
    //actions.is not actually nessesary but helps to be organised
}