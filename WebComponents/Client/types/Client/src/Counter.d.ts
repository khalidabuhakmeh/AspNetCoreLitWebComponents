import { BaseElement } from "./BaseElement";
export declare class Counter extends BaseElement {
    constructor();
    count: number;
    increment(): void;
    render(): import("lit-html").TemplateResult<1>;
}
