import { BaseElement } from "./BaseElement";
export declare class FetchData extends BaseElement {
    constructor(apiUrl: string);
    url: string;
    forecasts: Forecast[];
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
type Forecast = {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary: string;
};
export {};
