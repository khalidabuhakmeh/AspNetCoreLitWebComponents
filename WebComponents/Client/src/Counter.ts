import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from "./BaseElement";
@customElement("my-counter")
export class Counter extends BaseElement {
    constructor() {
        super();
        this.count = 0;
    }
    @property()
    count = 0;
    increment() {
        this.count++;
    }
    render() {
        return html`
            <h2>Counter</h2>
            <p role="status">Current count: ${this.count}</p>
            <button class="btn btn-primary" @click="${this.increment}">Click me</button>
        `
    }
}