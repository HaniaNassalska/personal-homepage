import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepo } from "./getRepo";
import { fetchProjectsError, fetchProjectsPending, fetchProjectsSuccess } from "./homepageSlice";

function* fetchPortfolioHandler() {
  try {
    const portfolio = yield call(getRepo);
    yield delay(1500);
    yield put(fetchProjectsSuccess(portfolio));
  }
  catch (error) {
    yield put(fetchProjectsError())
  }
}

export function* homepageSaga() {
  yield takeLatest(fetchProjectsPending.type, fetchPortfolioHandler);
}
