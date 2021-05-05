import moment from "moment";

let todayFormatedDDMMYY = moment().format("DDMMYY");
let todayFormatedDD_MM_YY = moment().format("DD_MM_YY");
let day = moment().format("DD");
let month = moment().format("MM");
let year = moment().format("YYYY");

// we just show actual day if hour is > 7:30
if (parseInt(moment().format("HHmm")) < 730) {
  todayFormatedDDMMYY = moment().subtract(1, "days").format("DDMMYY");
  todayFormatedDD_MM_YY = moment().subtract(1, "days").format("DD_MM_YY");
  day = moment().subtract(1, "days").format("DD");
  month = moment().subtract(1, "days").format("MM");
  year = moment().subtract(1, "days").format("YYYY");
}

export const CITY_LIST = [
  {
    name: "ARICA",
    nameList: "arica",
    newspaperUrl: `https://impresa.soy-chile.cl/EstrellaArica/${todayFormatedDDMMYY}/LaEstrelladeArica/`,
    corsUrl: `https://www.estrellaarica.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "IQUIQUE",
    nameList: "iquique",
    newspaperUrl: `https://impresa.soy-chile.cl/EstellaIquique/${todayFormatedDDMMYY}/LaEstrelladeIquique/`,
    corsUrl: `https://www.estrellaiquique.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "CALAMA",
    nameList: "calama",
    newspaperUrl: `https://impresa.soy-chile.cl/MercurioCalama/${todayFormatedDDMMYY}/ElMercuriodeCalama/`,
    corsUrl: `https://www.mercuriocalama.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "ANTOFAGASTA",
    nameList: "antofagasta",
    newspaperUrl: `https://impresa.soy-chile.cl/ElMercuriodeAntofagasta/${todayFormatedDDMMYY}/ElMercuriodeAntofagasta/`,
    corsUrl: `https://www.mercurioantofagasta.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "COPIAPÓ",
    nameList: "copiapo",
    newspaperUrl: `https://impresa.soy-chile.cl/DiarioAtacama/${todayFormatedDDMMYY}/ElDiariodeAtacama/`,
    corsUrl: `https://www.diarioatacama.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "VALPARAISO",
    nameList: "valparaiso",
    newspaperUrl: `https://impresa.soy-chile.cl/MercurioValparaiso/${todayFormatedDDMMYY}/MercurioValparaiso/`,
    corsUrl: `https://www.mercuriovalpo.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "SAN ANTONIO",
    nameList: "san antonio",
    newspaperUrl: `https://impresa.soy-chile.cl/LiderSanAntonio/${todayFormatedDDMMYY}/LiderSanAntonio/`,
    corsUrl: `https://www.lidersanantonio.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "CHILLÁN",
    nameList: "chillan",
    newspaperUrl: `https://impresa.soy-chile.cl/CronicaChillan/${todayFormatedDDMMYY}/CronicaChillan/`,
    corsUrl: `https://www.cronicachillan.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "CONCEPCIÓN",
    nameList: "concepcion",
    newspaperUrl: `https://impresa.soy-chile.cl/ElSur/${todayFormatedDDMMYY}/ElSur/`,
    corsUrl: `https://www.elsur.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "TEMUCO",
    nameList: "temuco",
    newspaperUrl: `https://impresa.soy-chile.cl/AustralTemuco/${todayFormatedDDMMYY}/AustralTemuco/`,
    corsUrl: `https://www.australtemuco.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "VALDIVIA",
    nameList: "valdivia",
    newspaperUrl: `https://impresa.soy-chile.cl/AustralValdivia/${todayFormatedDDMMYY}/AustralValdivia/`,
    corsUrl: `https://www.australvaldivia.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "OSORNO",
    nameList: "osorno",
    newspaperUrl: `https://impresa.soy-chile.cl/AustralOsorno/${todayFormatedDDMMYY}/AustralOsorno/`,
    corsUrl: `https://www.australosorno.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "PUERTO MONTT",
    nameList: "puerto montt",
    newspaperUrl: `https://impresa.soy-chile.cl/Llanquihue/${todayFormatedDDMMYY}/Llanquihue/`,
    corsUrl: `https://www.ellanquihue.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
  {
    name: "CHILOÉ",
    nameList: "chiloe",
    newspaperUrl: `https://impresa.soy-chile.cl/EstrellaChiloe/${todayFormatedDDMMYY}/EstrellaChiloe/`,
    corsUrl: `https://www.laestrellachiloe.cl/impresa/${year}/${month}/${day}/full/cuerpo-principal/1/`,
  },
];

// just change date
export const DATE_FROM_NEWSPAPER = `${todayFormatedDD_MM_YY}_pag_`;
// first page showing in the newspaper
export const FIRST_PAGE = 1;
// last page showing in the newspaper
export const LAST_PAGE = 35;

export const SET_LOADING          = 'SET_LOADING';
export const SET_CURRENT_PAGE     = 'SET_CURRENT_PAGE';
export const SET_IMAGE_EXTENSION  = 'SET_IMAGE_EXTENSION';
export const SET_CITY             = 'SET_CITY';
export const NEXT_PAGE            = 'NEXT_PAGE';
export const PREVIOUS_PAGE        = 'PREVIOUS_PAGE';

