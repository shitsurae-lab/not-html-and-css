/*
 *JavaScript
 */

//original drawer.js
//import Default from './drawer.js';
import './drawer.js';

//jQueryの読み込み
// import jQuery from 'jquery';
//ドルマークに参照を代入(慣習的な $ を使うため)
// const $ = jQuery;
import './jquery-3.6.0.min.js';
// not-text.js
import './script.js';
// import './original.js';

/* *****
 *CSS
 ***** */
//normalize.css
import 'normalize.css';
import '../css/style.scss';

//font awesome
// Font-awesome 5 doesn't work(https://bit.ly/3GdFxAi)
import fontawesome from '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import regular from '@fortawesome/fontawesome-free/scss/regular.scss';
import solid from '@fortawesome/fontawesome-free/scss/solid.scss';
import brands from '@fortawesome/fontawesome-free/scss/brands.scss';

fontawesome.library.add(solid, regular, brands);
