import { useState } from "react";
import * as Constants from "../constants/url_constants";

const useGlobalState = () => {
  const [state, setState] = useState({
    currentPage: Constants.FIRST_PAGE,
    firstPage: Constants.FIRST_PAGE,
    lastPage: Constants.LAST_PAGE,
    chosenNewspaper: Constants.CITY_LIST[9].newspaperUrl,
    urlCorsChosen: Constants.CITY_LIST[9].corsUrl,
    citySeted: 'TEMUCO',
    imageExtension: null,
    loading: true
  });

  const actions = action => {
    // console.log("actions", action);
    const { type, payload } = action;

    switch (type) {
      case Constants.SET_LOADING:
        return setState({ ...state, loading: payload.loading });
      case Constants.SET_CURRENT_PAGE:
        return setState({ ...state, currentPage: payload.currentPage });
      case Constants.SET_IMAGE_EXTENSION:
        return setState({ ...state, imageExtension: payload.imageExtension, loadind: payload.loading});
      case Constants.SET_CITY:
        return setState({
          ...state,
          currentPage: payload.currentPage,
          firstPage: payload.firstPage,
          lastPage: payload.lastPage,
          chosenNewspaper: payload.chosenNewspaper,
          urlCorsChosen: payload.urlCorsChosen,
          imageExtension: payload.imageExtension,
          loading: payload.loading
        });
      default:
        return state;
    }
  };

  return { state, actions };
};

export default useGlobalState;
