import React, { useContext, useState } from "react";
import Context from "../store/context";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Constants from "../constants/url_constants";
import { useCorsRequest } from "../hooks/useCorsRequest";
import { MainImage } from "./MainImage";
import { ErrorImage } from "./ErrorImage";
import { Spinner } from "./Spinner";

const divStyle = {
  minHeight: 80,
  width: "100%",
  textAlign: "center",
};

const DisplayPage = () => {
  const { state, actions } = useContext(Context);
  const [errorLoadingImage, setErrorLoadingImage] = useState(false);
  const currentImage  = useCorsRequest();

  const setLoading = () => {
    setErrorLoadingImage(false);
    actions({
      type: Constants.SET_LOADING,
      payload: {
        loading: false,
      },
    });
  };

  const handleImageError = () => {
    setErrorLoadingImage(true);
  };

  return (
    <Row>
      <Col lg={12} className='border border-dark pt-3 rounded' style={divStyle}>
        { state.loading ? <Spinner /> : null }
        <ErrorImage errorLoadingImage={errorLoadingImage}/>
        <MainImage errorLoadingImage={errorLoadingImage} currentImage={currentImage} handleImageError={handleImageError} setLoading={setLoading} />
      </Col>
    </Row>
  );
};

export default DisplayPage;
