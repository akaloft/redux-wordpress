const API = process.env.REACT_APP_APIBASEURL
const MAIN_MENU = process.env.REACT_APP_MAIN_MENU

const IsArray = (data) => Array.isArray(data) && data.length

export {
    API,
    MAIN_MENU,
    IsArray
}