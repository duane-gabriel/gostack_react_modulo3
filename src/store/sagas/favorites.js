import { call, put, select } from "redux-saga/effects";

import api from "../../services/api";

import { Creators as Favorites } from "../ducks/favorites";

export function* addFavorite(action) {
  // yield == await

  // call chamar funções que retornam promise dentro
  try {
    const { data } = yield call(api.get, `/repos/${action.payLoad.repository}`);

    const isDuplicated = yield select((state) =>
      state.favorites.data.find((favorite) => favorite.id === data.id)
    );

    if (isDuplicated) {
      yield put(Favorites.addFavoriteFailure("Erro ao adicionar repositório"));
      return;
    }

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    yield put(Favorites.addFavoriteSuccess(repositoryData));
  } catch (e) {
    yield put(Favorites.addFavoriteFailure("Erro ao adicionar repositório"));
  }
}
