export default class Route {
    constructor(url, title, pathHtml, autorize, pathJs = ""){
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJs = pathJs;
        this.authorize = autorize;
    }
}