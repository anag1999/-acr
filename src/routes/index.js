// Utils
import getHash from "../utils/getHash";
import solveRoutes from "../utils/solveRoutes";

// Templates
import Header from "../templates/Header";
import Footer from "../templates/Footer";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Error404 from "../pages/Error404";

const routes = {
    '/': Home,
    '/products': Products,
    '/contact': Contact,
    '/about': About
}

const router = async () => {
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    const content = document.querySelector(".content")

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();

    let hash = getHash();
    let route = await solveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
}

export default router;