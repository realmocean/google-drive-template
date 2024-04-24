/* http://localhost:4200/landing?query=1#2

window.location.hash: "#2"
​
window.location.host: "localhost:4200"
​
window.location.hostname: "localhost"
​
window.location.href: "http://localhost:4200/landing?query=1#2"
​
window.location.origin: "http://localhost:4200"
​
window.location.pathname: "/landing"
​
window.location.port: "4200"
​
window.location.protocol: "http:"

window.location.search: "?query=1"  */

export const useGetProtocol= () => {
    return window.location.protocol;
};

export const useGetHost= () => {
    return window.location.host;
}


export const useGetHostName= () => {
    return window.location.hostname;
}

export const useGetHDomainName= () => {
    const name = window.location.hostname.split('.');
    if (name.length > 1) {
        return name[1];
    } else {
        return window.location.hostname;
    }
}


export const useGetOrigin= () => {
    return window.location.origin;
}