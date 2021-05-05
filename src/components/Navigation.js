import React, { useContext, useState } from "react";
import Context from "../store/context";
import {Row, Col, Breadcrumb} from "react-bootstrap";
import * as Constants from "../constants/url_constants";
import { GoTo } from "./GoTo";
import { MovePage } from "./MovePage";

const pointerStyle = {
  cursor: "pointer",
};

const Navigation = () => {
  const { state, actions } = useContext(Context);
  const [inputValue, setInputValue] = useState(1);
  const [currentCityActive, setCurrentCityActive] = useState(state.citySeted);

  const movePage = (movePage) =>{
    if(movePage === Constants.NEXT_PAGE){
      if (state.currentPage < state.lastPage) {
        let nextPage = state.currentPage + 1;
        setInputValue(nextPage);
        actions({
          type: Constants.SET_CURRENT_PAGE,
          payload: { currentPage: nextPage },
        });
      }
    }else if(movePage === Constants.PREVIOUS_PAGE){
      if (state.currentPage > state.firstPage) {
        let previousPage = state.currentPage - 1;
        setInputValue(previousPage);
        actions({
          type: Constants.SET_CURRENT_PAGE,
          payload: { currentPage: previousPage },
        });
      }
    }
  }

  const goSpecificPage = e => {
    let inputValueInt = parseInt(inputValue);
      if (state.lastPage >= inputValueInt && state.firstPage <= inputValueInt) {
        setInputValue(inputValueInt);
        actions({
          type: Constants.SET_CURRENT_PAGE,
          payload: { currentPage: inputValueInt },
        });
      }
  };

  const handleArrowKey = e => {
    // 37 left, 38 up, 39 right, 40 down
    if (e.keyCode === 37 || e.keyCode === 40) {
      e.preventDefault();
    } else if (e.keyCode === 38 || e.keyCode === 39) {
      e.preventDefault();
    } else if (e.keyCode === 13) {
      goSpecificPage(e);
    }
  };

  const setCity = city => {
    setCurrentCityActive(city.name);
    setInputValue(Constants.FIRST_PAGE);
    actions({
      type: "SET_CITY",
      payload: {
        chosenNewspaper: city.newspaperUrl,
        urlCorsChosen: city.corsUrl,
        currentPage: Constants.FIRST_PAGE,
        firstPage: Constants.FIRST_PAGE,
        lastPage: Constants.LAST_PAGE,
        imageExtension: null,
        loading: true
      },
    });
  };

  const cityList = Constants.CITY_LIST.map(city => (
    <Breadcrumb.Item key={city.name} active={currentCityActive === city.name} className = {currentCityActive === city.name ? "cityActive" : ""}>
      <span onClick={() => setCity(city)}>{city.name}</span>
    </Breadcrumb.Item>
  ));

  return (
    <>
      <Row>
        <Breadcrumb>{cityList}</Breadcrumb>
      </Row>
      <Row>
        <Col lg={2} md={2} xs={4}>
          <MovePage pointerStyle={pointerStyle} movePage={() => movePage(Constants.PREVIOUS_PAGE)} movement={Constants.PREVIOUS_PAGE}/>
        </Col>
        <Col lg={8} md={2} xs={4}>
          <Row className='justify-content-md-center'>
            <Col lg={3}>
              <GoTo handleArrowKey={handleArrowKey} inputValue={inputValue} setInputValue={setInputValue} />
            </Col>
          </Row>
        </Col>
        <Col lg={2} md={2} xs={4}>
          <MovePage pointerStyle={pointerStyle} movePage={() => movePage(Constants.NEXT_PAGE)} movement={Constants.NEXT_PAGE}/>
        </Col>
      </Row>
    </>
  );
};

export default Navigation;
