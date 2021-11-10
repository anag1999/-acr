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

            <form class="send-form">
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

                <button style="cursor:pointer" type="button" id="submit"  >Enviar</button>
            </form>

            <article class="main-contant_media">
                <div>
                    <img src="./assets/imgs/facebook.png" />
                    <a class="hidden" href="https://www.facebook.com/acrcomer">https://www.facebook.com/acrcomer</a>
                </div>
                <div>
                    <img src="./assets/imgs/email.png" />
                    <a class="hidden" href="mailto:contacto@comercializadoraar.com">contacto@comercializadoraar.com</a>
                </div>
                <div>
                    <img src="./assets/imgs/whatsapp.png" />
                    <p class="hidden">55 8155 4041</p>
                </div>
                <div>
                    <img src="./assets/imgs/phone-call.png" />
                    <p class="hidden">55 5463 0426</p>
                </div>
            </article>
        </section>
    `;

    return view;
}

export default Contact;