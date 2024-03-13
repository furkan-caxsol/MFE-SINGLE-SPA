// // Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {
    console.log('print export from services new line')
}

export function setAuthToken( value:string){
    localStorage.setItem("authToken",value)
}

export function getAuthToken():null|string{
    return localStorage.getItem("authToken")
}

export { default as ServiceClient } from "./apollo/apolloProvider";

