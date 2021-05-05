import React, {useContext} from 'react';
import Context from "../store/context";

export const ErrorImage = ({errorLoadingImage}) => {

    const { state } = useContext(Context);

    return (
        <img
          width='100%'
          style={!state.loading && errorLoadingImage ? {} : { display: "none" }}
          src={process.env.PUBLIC_URL + "/404.png"}
          alt='image_day'
        />
    )
}
