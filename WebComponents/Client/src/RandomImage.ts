import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from "./BaseElement";

@customElement("random-image")
export class RandomImage extends BaseElement {
    constructor() {
        super();
    }

    @property()
    imageSrc?: string = `https://source.unsplash.com/random?${new Date().toISOString()}`;

    async random() {
        this.imageSrc = `https://source.unsplash.com/random?${new Date().toISOString()}`;
    }

    button() {
        return html`
            <button @click=${this.random} class="btn btn-primary mb-2">
                Get Random Image
            </button>`
    }

    displayImage() {
        return html`
            <figure class="figure">
                <img src="${this.imageSrc}"
                     class="img-thumbnail m-auto"
                     width="400"
                     alt="random Unsplash image">
                <figcaption class="figure-caption mt-2">
                    Unsplash random image (${new Date().toLocaleTimeString()})
                </figcaption>
            </figure>
        `;
    }

    render() {
        return html`
            <div class="m-5 text-center">
                <div>
                    ${this.button()}

                </div>
                <div>
                    ${this.displayImage()}
                </div>
            </div>
        `
    }
}