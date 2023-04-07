import { LitElement } from 'lit';
export declare class Counter extends LitElement {
    static get styles(): import("lit").CSSResult;
    constructor();
    count: number;
    display: string;
    increment(): void;
    render(): import("lit-html").TemplateResult<1>;
}
