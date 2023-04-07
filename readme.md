# Lit-Powered Web Components In ASP.NET Core

Razor is awesome and the power of server-rendered cannot be underestimated. That said, sometimes you want a pure client-side experience and that's where JavaScript comes in.

This solution shows how to set up Vite to build Lit components into standalone Web Components that can be reused through out your ASP.NET Core applications.

Important elements in this solution:

- The `Client` folder contains all the client-side assets, including CSS, TypeScript, and images. We let Vite handle those files.
- `packages.json` contains a build script of `vite build` that generates the build output. We aren't using the dev server (you could if you want to).
- All build artifacts end up in `wwwroot` for use by our ASP.NET Core application.
- `Layout.cshtml` has the following `script` element which uses ASP.NET Core's `asp-src-include` which supports wildcard captures. This is because Vite hashes files, but you can disable that if you'd like to.
```html
<script asp-src-include="~/assets/index-*.js" type="module"></script>
```
- The `Index.chstml` file has a `<my-counter></my-counter>` tag. **All Web Components must have a dash in them, it's the law of the internet.**
- The component is implemented under `Client/src/Counter.ts`.

```typescript
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
```
## Conclusion

This is an example, but here are some recommendations if you'd like to use this as a jumping off point:

1. Let Vite process all your assets, you can do neat things link minify, and purge unused files from the final artifacts build.
2. Remove all the `lib` from the project and add the dependencies from NPM, you get the benefits previously mentioned.
3. Read the VITE documentation, seriously.
4. Read the LIT documentation.
5. Get used to TypeScript. Most IDEs have great support for it, and you won't make as many mistakes.

## Conclusion

Hope you find this repository helpful. Cheers. 🍻