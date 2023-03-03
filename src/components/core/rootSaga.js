import { all } from "redux-saga/effects";
import { themeSaga } from "../features/homepage/Hero/themeSwitcher/themeSaga";
import { homepageSaga } from "../features/homepage/homepageSaga";

export default function* rootSaga() {
  yield all([
    homepageSaga(),
    themeSaga(),
  ]);
}  