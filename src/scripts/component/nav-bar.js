class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="img/icons.png" alt="" width="40" height="auto" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#services">Services</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Elektronik</a></li>
                                <li><a class="dropdown-item" href="#">Bangunan</a></li>
                                <li><a class="dropdown-item" href="#">Furniture</a></li>
                                <li><a class="dropdown-item" href="#">Otomotif</a></li>
                                <li><a class="dropdown-item" href="#">Cleaning</a></li>
                                <li><a class="dropdown-item" href="#">Lainnya...</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn active btn-outline-primary signin-button" id="signin-button" type="submit"><a
                                class="signinbutton" href="signin.html">Sign in</a></button>
                    </form>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define('nav-bar', NavBar);