export default class Route {
    constructor(url, title, pathHtml, pathJs = ""){
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJs = pathJs;
    }
}