class HeroSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Welcome to Si Tukang</h1>
                <p class="hero__tagline">Bersama kuli membangun negeri</p>
            </div>
        </div>
          `;
    }
}

customElements.define('hero-section', HeroSection);