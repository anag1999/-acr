const solveRoutes = route => {
    if(route != "/"){
        return `/${route}`;
    }else{
        return route;
    }
}

export default solveRoutes;