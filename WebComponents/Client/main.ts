import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery";
import "jquery-validation";
import "jquery-validation-unobtrusive";

// style
import "./scss/site.scss";

// @ts-ignore - VITE import all Lit components
const files = import.meta.glob(
    './src/**/*',
    { eager: true }
)