import { useContext, useEffect, useState } from "react";
import Context from "../store/context";
import * as Constants from "../constants/url_constants";
import * as Config from "../utils/ConfigFirstPage";

export const useCorsRequest = () => {

    const { state, actions } = useContext(Context);
    const [currentImage, setCurrentImage] = useState("");

    useEffect(() => {
      console.log('state',state);
        if (state.imageExtension === null) {
          // using async await for request current day
          // if we get error in localhost with CORS go to https://cors-anywhere.herokuapp.com/corsdemo and request access
          Config.doCORSRequest({
            method: "GET",
            url: state.urlCorsChosen,
            data: "",
          }).then(function (response) {
            let html = response.data || "";
            // transform text to html
            let parsedResponse = new window.DOMParser().parseFromString(html, "text/html");
            // get all meta tags
            const metas = parsedResponse.getElementsByTagName("meta");
            let imageFirstPage = "";
            let cuerpoPrincipal = "";
    
            if (response.headers["x-version"] === "desktop") {
              for (let i = 0; i < metas.length; i++) {
                let textHtml = metas[i].outerHTML.toString();
                let includeOgImage = textHtml.includes('property="og:image"');
                if (includeOgImage) {
                  imageFirstPage = metas[i].content;
                  let position550 = imageFirstPage.indexOf("550");
                  // 1440 is a bigger image
                  imageFirstPage = "-1440-" + imageFirstPage.substr(position550 + 4, imageFirstPage.length);
                  actions({
                    type: Constants.SET_IMAGE_EXTENSION,
                    payload: {
                      imageExtension: imageFirstPage,
                      loading: false,
                    },
                  });
                }
                let includeOgUrl = textHtml.includes('property="og:url"');
                if (includeOgUrl) {
                  cuerpoPrincipal = metas[i].content;
                  let indexCP = cuerpoPrincipal.indexOf("cuerpo-principal");
                  if (indexCP !== -1) {
                    console.log("newspaper up.. DisplayPage");
                  }
                }
              }
            } else {
              // mobile version
              let grm_slider = parsedResponse.getElementsByTagName("grm-slider");
              let firstImage = new window.DOMParser().parseFromString(grm_slider[0].firstElementChild.innerHTML, "text/html");
              var imageSrc = firstImage.getElementsByTagName("img")[0].src;
              let position1440 = imageSrc.indexOf("1440");
              imageFirstPage = "-" + imageSrc.substr(position1440, imageSrc.length);
              actions({
                type: Constants.SET_IMAGE_EXTENSION,
                payload: {
                  imageExtension: imageFirstPage,
                  loading: false,
                },
              });
            }
          });
        } else {
          let currentPageInPage = state.currentPage < 10 ? '0' + state.currentPage : state.currentPage;
          let imageFromNewsPaper = state.chosenNewspaper + Constants.DATE_FROM_NEWSPAPER + currentPageInPage + state.imageExtension;
          setCurrentImage(imageFromNewsPaper);
        }
      },[state.imageExtension,state.currentPage]);


    return currentImage;
};
