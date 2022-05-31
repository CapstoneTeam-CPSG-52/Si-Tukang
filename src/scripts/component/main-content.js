class MainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="content container px-5">
            <div class="search">
                <form class="d-flex">
                    <input class="form-control me-2 search-form" type="search" placeholder="Cari Tukang..."
                        aria-label="Search">
                    <button class="btn active btn-outline-success search-button" id="search-button"
                        type="submit">Search</button>
                </form>
            </div>
            <div class="row">

            <div class="col-md-4 text-center">
                <a class="text-body" href="order_elektro.html" style="text-decoration: none;">
                <img class="rowimg" src="img/elektronik.png" alt="">
                <p>Elektronik</p>
                </a>
            </div>

            <div class="col-md-4 text-center">
                <a class="text-body" href="order_bangunan.html" style="  text-decoration: none;">
                <img class="rowimg" src="img/bangunan.png" alt="">
                <p>Bangunan</p>
                </a>
            </div>
            <div class="col-md-4 text-center">
                <a class="text-body" href="order_furniture.html" style="  text-decoration: none;">
                <img class="rowimg" src="img/furniture.png" alt="">
                <p>Furniture</p>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 text-center">
                <a class="text-body" href="order_otomotif.html" style="text-decoration: none;">
                <img class="rowimg" src="img/otomotif.png" alt="">
                <p>Otomotif</p>
                </a>
            </div>
            <div class="col-md-4 text-center">
                <a class="text-body" href="order_cleaning.html" style="  text-decoration: none;">
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
        <div class="testimoniBanner">
            <h2 class="testimoniBannerTitle fs-1">Testimoni</h2>
        </div>
        <div class="testimoniContent container">
            <div class="row">
                <div class="col-lg-4 text-center">
                    <img class="rounded-circle" src="img/kasumi.gif" width="140" height="140" alt="">
                    <h3 class="testimoniContentTitle fw-normal" class="fw-normal">Kasumi</h3>
                    <p>Tukang Ramah Bintang 5</p>
                </div>
                <div class="col-lg-4 text-center">
                    <img class="rounded-circle" src="img/arisaok.jpg" width="140" height="140" alt="">
                    <h3 class="testimoniContentTitle fw-normal" class="fw-normal">Arisa</h3>
                    <p>Tukang Ramah Bintang 5</p>
                </div>
                <div class="col-lg-4 text-center">
                    <img class="rounded-circle" src="img/user.png" width="140" height="140" alt="">
                    <h3 class="testimoniContentTitle fw-normal" class="fw-normal">User</h3>
                    <p>Tukang Ramah Bintang 5</p>
                </div>
            </div>
        </div>
          `;
  }
}

customElements.define("main-content", MainContent);
