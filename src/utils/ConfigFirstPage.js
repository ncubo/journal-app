import axios from "axios";

// if we get error in localhost with CORS go to https://cors-anywhere.herokuapp.com/corsdemo and request access
const cors_api_url = "https://cors-anywhere.herokuapp.com/";
export async function doCORSRequest({method,url}) {
  return await axios({
    method,
    url: cors_api_url + url,
    responseType: "text",
  });
}
