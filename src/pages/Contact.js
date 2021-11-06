const Contact = () => {
    const view = `
        <section class="main-contact">
            <span></span>
            <h2>Contacto</h2>

            <p>
                ¿Tienes alguna duda?
                <br>
                ¡Contáctanos!
            </p>

            <p>
            Será un gusto ayudarte a encontrar 
            los productos para tu empresa
            </p>

            <form>
                <div>
                    <label for="name">Nombre</label>
                    <input type="text" id="name">
                </div>

                <div>
                    <label for="phone">Celular</label>
                    <input type="tel" id="phone">
                </div>

                <div>
                    <label for="email">Correo electronico</label>
                    <input type="email" id="email">
                </div>

                <div>
                    <label for="comment">¿Duda, sugerencia o comentario?:</label>
                    <textarea id="comment" placeholder="Escribe un comentario"></textarea>
                </div>

                <button>Enviar</button>
            </form>

            <article class="main-contant_media">
                <img src="./assets/imgs/facebook.png" />
                <img src="./assets/imgs/email.png" />
                <img src="./assets/imgs/whatsapp.png" />
                <img src="./assets/imgs/phone-call.png" />
            </article>
        </section>
    `;

    return view;
}

export default Contact;