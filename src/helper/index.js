const API = process.env.REACT_APP_APIBASEURL
const MAIN_MENU = process.env.REACT_APP_MAIN_MENU
const WP = process.env.REACT_APP_WEB

const IsArray = (data) => Array.isArray(data) && data.length

export {
    API,
    MAIN_MENU,
    WP,
    IsArray
}