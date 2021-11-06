const Home = () => {
    const view = `
        <section class="main-introduction">
            <article class="introduction-cover">
                <div class="introduction-cover_text">
                    Expertos en el suministro de material para tu empresa.
                </div>
            </article>

            <article class="introduction-description">
                <p>
                    En Comercializadora ACR encontraras todos los materiales que tu empresa necesita: papeleria, salud, seguridad y mucho más a un costo accesible.
                </p>

                <h2>¿Qué producto necesitas?</h2>
            </article>

            <article class="introduction-button">
                <button>
                    ¡AQUÍ TE LO COTIZAMOS!
                </button>
            </article>

            <section class="main-products">
                <span></span>
                <h2>Productos</h2>
                <img src="./assets/imgs/productos.png"/>

                <ol>
                    <li>Salud</li>
                    <li>Seguridad</li>
                    <li>Empaques</li>
                    <li>Adhesivos</li>
                    <li>Papeleria</li>
                    <li>Limpieza</li>
                    <li>Automotriz</li>
                </ol>
            </section>

            <section class="main-brands">
                <span></span>
                <h2>Marcas</h2>
                <img src="./assets/imgs/brands.png"/>
            </section>
        </section>
    `;

    return view;
}

export default Home;