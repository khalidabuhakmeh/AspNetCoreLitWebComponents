import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
@customElement("my-counter")
export class Counter extends LitElement {
    static get styles() {
        return css`
            button { font-size: 3em }
        `;
    }
    constructor() {
        super();
        this.count = 0;
        this.display = "Click Me";
    }
    @property()
    count = 0;
    @property()
    display = "Click Me";
    increment() {
        this.count++;
        this.display = `Current Count: ${this.count}`;
    }
    render() {
        return html`
            <button @click=${this.increment}>
                ${this.display}
            </button>
        `
    }
}