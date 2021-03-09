export const getQueryParamByName = (name: string, url?: string) => {
    if (!url) {
        url = (window as any).location.href;
    }
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export const updateQueryStringParam = (key: string, value: string) => {
    const baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
    const urlQueryString = document.location.search;
    const newParam = key + '=' + value;
    let params = '?' + newParam;
    if (urlQueryString) {
        const keyRegex = new RegExp('([?&])' + key + '[^&]*');
        //   If param exists already, update it
        if (urlQueryString.match(keyRegex) !== null) {
            params = urlQueryString.replace(keyRegex, '$1' + newParam);
        } else { //  Otherwise, add it to end of query string
            params = urlQueryString + '&' + newParam;
        }
    }
    window.history.replaceState({}, '', baseUrl + params);
};
