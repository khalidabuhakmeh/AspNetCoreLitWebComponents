import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from "./BaseElement";

@customElement("fetch-data")
export class FetchData extends BaseElement {
    constructor(apiUrl: string) {
        super();
        this.url = apiUrl;
        this.forecasts = [];
    }

    @property()
    url: string;

    @property()
    forecasts: Forecast[];

    async firstUpdated() {
        const response = await fetch(this.url);
        this.forecasts = await response.json() as Forecast[];
    }

    render() {
        return html`
            <h2>Weather Forecasts</h2>
            <table class="table table-bordered table-responsive">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Temp. (C)</th>
                    <th scope="col">Temp. (F)</th>
                    <th scope="col">Summary</th>
                </tr>
                </thead>
                <tbody>
                ${this.forecasts.map((forecast) =>
                    html`
                        <tr>
                            <td>${forecast.date}</td>
                            <td>${forecast.temperatureC}</td>
                            <td>${forecast.temperatureF}</td>
                            <td>${forecast.summary}</td>
                        </tr>`
                )}
                </tbody>
            </table>
        `
    }
}

type Forecast = {
    date: Date,
    temperatureC: number,
    temperatureF: number,
    summary: string
}