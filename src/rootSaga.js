import { all } from "redux-saga/effects";
import { themeSaga } from "./components/features/homepage/Hero/themeSwitcher/themeSaga";
import { homepageSaga } from "./components/features/homepage/homepageSaga";

export default function* rootSaga() {
  yield all([
    homepageSaga(),
    themeSaga(),
  ]);
}  