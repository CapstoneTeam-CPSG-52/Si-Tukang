class ServicesSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="services container px-5" id="services">
                <h2 class="servicesTitle">
                    Services
                </h2>
                <div class="row">
                    <div class="col-md-4 text-center">
                        <a class="text-body" href="order-elektro.html" style="text-decoration: none;">
                            <img class="rowimg" src="img/elektronik.png" alt="">
                            <p>Elektronik</p>
                        </a>
                    </div>

                    <div class="col-md-4 text-center">
                        <a class="text-body" href="order-bangunan.html" style="text-decoration: none;">
                            <img class="rowimg" src="img/bangunan.png" alt="">
                            <p>Bangunan</p>
                        </a>
                    </div>
                    <div class="col-md-4 text-center">
                        <a class="text-body" href="order-furniture.html" style="text-decoration: none;">
                            <img class="rowimg" src="img/furniture.png" alt="">
                            <p>Furniture</p>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 text-center">
                        <a class="text-body" href="order-otomotif.html" style="text-decoration: none;">
                            <img class="rowimg" src="img/otomotif.png" alt="">
                            <p>Otomotif</p>
                        </a>
                    </div>
                    <div class="col-md-4 text-center">
                        <a class="text-body" href="order-cleaning.html" style="text-decoration: none;">
                            <img class="rowimg" src="img/cleaning.png" alt="">
                            <p>Cleaning</p>
                        </a>
                    </div>
                    <div class="col-md-4 text-center">
                        <img class="rowimg" src="img/lainnya.png" alt="">
                        <p>Lainnya</p>
                    </div>
                </div>
            </div>
          `;
    }
}

customElements.define('services-section', ServicesSection);