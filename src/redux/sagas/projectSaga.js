import axios from 'axios';
import { takeEvery, put as dispatch } from 'redux-saga/effects';



function* projectSaga() {
    yield takeEvery('FETCH_ITEM', fetchItem);
    yield takeEvery('ADD_ITEM', postItem)
    // yield takeEvery('DELETE_PLANT', deletePlant)
}

function* fetchItem() {
    console.log('fetchItem was hit');
    try {
        const itemResponse = yield axios.get('/api/shelf');
        yield dispatch({ type: 'GET_ITEM', payload: itemResponse.data })
    } catch (error) {
        console.log('this was an error with the fetch- probably your fault');

    }
}

function* postItem(action) {
    try {
        yield axios.post('api/shelf', action.payload);
        yield dispatch({ type: 'FETCH_git ITEM' });
    } catch (error) {
        console.log('this was an error with the post- probably your fault');

    }
}
export default projectSaga;