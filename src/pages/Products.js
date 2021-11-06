const Products = () => {
    const view = `
        <section class="main-products">
            <span></span>
            <h2>Productos</h2>

            <p>
            En Comercializadora ACR te brindamos
            la mejor solución en material para tu empresa
            un costo accesible
            </p>

            <article class="products_field health">
                <div>
                    <h2>Salud</h2>
                </div>

                <p>
                Gel antibacterial, cubrebocas, guantes, batas desechables, overoles, lentes protectores, termómetros, oxímetros…
                </p>
                <img src="./assets/imgs/health.png"/>
            </article>

            <article class="products_field security">
                <div>
                    <h2>Seguridad</h2>
                </div>

                <p>
                Cascos, chalecos reflejantes, arnés, trajes térmicos, conos, zapatos de seguridad…
                </p>
                <img src="./assets/imgs/security.png"/>
            </article>

            <article class="products_field adherents">
                <div>
                    <h2>Empaques / Adhesivos</h2>
                </div>

                <p>
                Masking tape, cinta antiderrapante, cinta doble cara, polyfoam, velcro, lijas…
                </p>
                <img src="./assets/imgs/adherents.png"/>
            </article>

            <article class="products_field stationery">
                <div>
                    <h2>Papelería</h2>
                </div>

                <p>
                Diurex, lápiz, cajas de hojas blancas, carpetas, etiquetas, plumones...
                </p>
                <img src="./assets/imgs/stationery.png"/>
            </article>

            <article class="products_field cleaning">
                <div>
                    <h2>Limpieza</h2>
                </div>

                <p>
                Cloro, desinfectantes, papel higiénico, jabón líquido, sarricidas, pastillas para WC, pulidoras…
                </p>
                <img src="./assets/imgs/cleaning.png"/>
            </article>

            <article class="automotive">
                <div>
                    <h2>Automotriz</h2>
                </div>
            </article>

            <article class="products-contact">
                <span></span>
                <h2>
                    Contamos con
                    una amplia gama
                    de productos
                </h2>
                <span></span>

                <p>¡Solicita aquí nuestra lista completa!</p>

                <button>
                    <img src="./assets/imgs/wa.svg" />
                    WhatsApp
                </button>
            </article>
        </section>
    `;

    return view;
}

export default Products;