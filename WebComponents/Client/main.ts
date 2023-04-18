import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery";
import "jquery-validation";
import "jquery-validation-unobtrusive";

// style
import "./scss/site.scss";

// VITE import all Lit components
import.meta.glob(
    './src/**/*',
    { eager: true }
)