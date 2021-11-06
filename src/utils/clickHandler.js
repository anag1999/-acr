const clickHandler = () => {
    const hambBtn = document.querySelector(".hambBtn")
    const xBtn = document.querySelector(".xBtn")
    const navbar = document.querySelector(".header-navbar")

    hambBtn.addEventListener("click", () => {
        navbar.classList.remove("navbar-hidden")
        navbar.classList.add("navbar-visible")
    })

    xBtn.addEventListener("click", () => {
        navbar.classList.remove("navbar-visible")
        navbar.classList.add("navbar-hidden")
    })
}

export default clickHandler;