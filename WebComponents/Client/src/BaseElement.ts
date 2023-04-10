import {LitElement, unsafeCSS} from 'lit';
import bootstrap from "bootstrap/dist/css/bootstrap.css?inline"

export class BaseElement extends LitElement {
    // use Bootstrap styling for components
    static styles = unsafeCSS(bootstrap);
}