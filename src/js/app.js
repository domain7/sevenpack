// Tell webpack to compile SASS
import '../styles/style.scss';

// Import modernizr
// import './vendor/modernizr-custom';

// Import a module
import './modules/example';
import { randomNumber } from './modules/helpers';

console.log(randomNumber());
