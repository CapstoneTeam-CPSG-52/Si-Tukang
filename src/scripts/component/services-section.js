class ServicesSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        
          `;
    }
}

customElements.define('services-section', ServicesSection);