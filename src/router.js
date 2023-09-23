import { changeStyle } from './utils.js'

export class Router {
    
    routes = {}

    add(routeName, path, bgPath){
        const routeData = {path, bgPath}
        this.routes[routeName] = routeData
    }
    
    route(event){
        event = event || window.event
        event.preventDefault()
    
        const button = event.target

        window.history
        .pushState({}, "", button.href || button.dataset.href)  

        this.handle(button)
    }
    handle(buttonElement){
        const { pathname } = window.location
        const route = this.routes[pathname].path

        changeStyle(buttonElement, this.routes[pathname].bgPath)

        fetch(route)
        .then(data => data.text())
        .then(content => {
            document.querySelector("#content")
            .innerHTML = content
        })

    }
}