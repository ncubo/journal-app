import React, {useContext} from 'react';
import Context from "../store/context";

export const MainImage = ({errorLoadingImage,currentImage,handleImageError,setLoading}) => {

    const { state } = useContext(Context);

    return (
        <img
          width='100%'
          style={!state.loading && !errorLoadingImage ? {} : { display: "none" }}
          src={currentImage}
          onError={handleImageError}
          alt='image_day'
          onLoad={setLoading}
        />
    )
}
