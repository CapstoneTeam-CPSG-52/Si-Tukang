class AboutSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container" id="about">
                <hr class="featurette-divider">
                <div class="row featurette">
                    <div class="aboutBanner col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Tentang <mark class="bg-info text-white">Si
                                Tukang</mark>
                        </h2>
                        <p class="lead">Si Tukang menyediakan berbagai kebutuhan jasa pertukangan.
                            kami memiliki misi untuk memberikanmu kemudahan dalam mencari Tukang.</p>
                    </div>
                    <div class="col-md-5 text-center">
                        <img src="img/icons.png" style="width: 400px;" alt="">
                    </div>

                    <hr class="featurette-divider">

                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                            <h2 class="featurette-heading fw-normal lh-1 text-center">Kelebihan <mark
                                    class="bg-info text-white">Si
                                    Tukang</mark></h2>
                            <div class="advantagesSitukang">
                                <ul>
                                    <li><span class="dot"></span> Menyediakan tukang yang berpengalaman</li>
                                    <li><span class="dot"></span> Membantu anda menemukan tukang terbaik sesuai
                                        kebutuhan anda
                                    </li>
                                    <li><span class="dot"></span> Customer Service and Technical Support</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-5 order-md-1">
                            <img src="img/advantages.png" style="width: 400px;" alt="">
                        </div>
                    </div>
                </div>

                <!-- Order Guide -->
                <h2 class="orderGuide-title">Cara Pemesanan</h2>
                <div class="orderGuide">
                    <div class="column featurette">
                        <div class="col-md">
                            <div class="row">
                                <div class="col-lg-4 text-center" style="margin-bottom:30px; padding: 20px;">
                                    <img class="rounded-circle" src="img/kategori.png" width="140" height="140"
                                        style="margin-bottom:20px ;">
                                    <p>1. Pilih kategori layanan</p>
                                </div>
                                <div class="col-lg-4 text-center" style="margin-bottom:30px; padding: 20px;">
                                    <img class="rounded-circle" src="img/form.png" width="140" height="140"
                                        style="margin-bottom:20px ;">
                                    <p>2. Isi form pemesanan</p>
                                </div>

                                <div class="col-lg-4 text-center" style="margin-bottom:30px; padding: 20px;">
                                    <img class="rounded-circle" src="img/tracking.png" width="140" height="140"
                                        style="margin-bottom:20px ;">
                                    <p>3. Lacak pemasanan anda</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="deskripsi-orderGuide">
                                <h2 class="featurette-heading fw-normal lh-1">Si Tukang</h2>
                                <p class="lead">Temukan Penyedia Jasa Terpercaya
                                    Sekarang Juga!</p>
                                <button type="submit" class="btn active btn-outline-secondary">Pesan Sekarang</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimoni -->
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

            <!-- About Us -->
            <div class="container">
                <hr class="featurette-divider">

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span
                                class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Some great placeholder content for the first featurette here. Imagine some
                            exciting
                            prose here.</p>
                    </div>
                    <div class="col-md-5">
                        <img src="img/logocpsg52.jpg" class="w-100" alt="">

                    </div>
                </div>

                <hr class="featurette-divider">
            </div>
            <div class="about">
                <h1 class="aboutTitle">
                    About Us
                </h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 text-center text-white">
                            <img class="rounded-circle" src="img/alwin1.jpg" width="140" height="140" alt="">
                            <h3 class="testimoniContentTitle fw-normal" class="fw-normal">Alwin <a
                                    href="https://linktr.ee/izdiharalwin"
                                    style="text-decoration: none; color: white;">🡢</a></h3>
                            <p>Seorang Mahasiswa UPN "Veteran" Jawa TImur</p>
                        </div>
                        <div class="col-lg-3 text-center text-white">
                            <img class="rounded-circle" src="img/user.png" width="140" height="140" alt="">
                            <h3 class="testimoniContentTitle fw-normal" class="fw-normal">Aurel <a
                                    href="https://linktr.ee/izdiharalwin"
                                    style="text-decoration: none; color: white;">🡢</a></h3>
                            <p>Seorang Mahasiswi</p>
                        </div>
                        <div class="col-lg-3 text-center text-white">
                            <img class="rounded-circle" src="img/user.png" width="140" height="140" alt="">
                            <h3 class="testimoniContentTitle fw-normal" class="fw-normal">Aidil <a
                                    href="https://linktr.ee/izdiharalwin"
                                    style="text-decoration: none; color: white;">🡢</a></h3>
                            <p>Seorang Mahasiswa</p>
                        </div>
                        <div class="col-lg-3 text-center text-white">
                            <img class="rounded-circle" src="img/user.png" width="140" height="140" alt="">
                            <h3 class="testimoniContentTitle fw-normal" class="fw-normal">Lutfhi <a
                                    href="https://linktr.ee/izdiharalwin"
                                    style="text-decoration: none; color: white;">🡢</a></h3>
                            <p>Seorang Mahasiswa</p>
                        </div>
                    </div>
                </div>
            </div>
          `;
    }
}

customElements.define('about-section', AboutSection);