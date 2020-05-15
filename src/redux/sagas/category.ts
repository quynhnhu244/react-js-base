import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { callElearningApi } from '../../services';
import { set as setCategory } from '../actions/category';
import { CATEGORY_FETCH_ALL } from '../actions/types';

const fetchAllCategory = () => {
  return callElearningApi({
    url: `get-categories`,
    params: null,
    method: 'post'
  });
};

export function* fetch() {
  try {
    const response = yield call(fetchAllCategory);
    yield put(setCategory(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetch() {
  yield takeLatest(CATEGORY_FETCH_ALL, fetch);
}

export default function* category() {
  yield fork(watchFetch);
}