import { all, takeLatest } from "redux-saga/effects";
import { addFavorite } from "./favorites";
import { Types as FavoritesTypes } from "../ducks/favorites";
// all é o combineReducers do redux saga

export default function* rootSaga() {
  // yield é await do generator

  yield all([takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite)]);
}
