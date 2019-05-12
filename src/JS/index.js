/********************************************************************/
//imports for webpack to be injected inside the generated html:
/* Vendor CSS files */
import '../CSS/Grid.css';
import '../CSS/normalize_css.css';
import '../CSS/ionicons.min.css';
import '../CSS/animate.css';
import '../CSS/magnific_popup.css';
/* Our CSS files */
import '../CSS/style.css';
import '../CSS/queries.css';

/* JS files */
//jquery
import './jquery'
import './jquery.waypoints.min'
//magnific popup
import './magnific_popup.js'

//importing all of the images dynamically
const images = [];
const index = [...Array(21)].keys();
for (let i of index) { images.push(`img${i}.jpg`) }
images.slice(1);
const pathToImages = require.context('../images', true);
const getImages = () => images.map(img =>  pathToImages(img. true));
//const getImages = () => images.map(img => `<img src='${pathToImages(img, true)}' alt='Viva Boobs!' />`);
/********************************************************************/
import { elements } from './Views/base';
import * as Views from './Views/views';

// header background image change on button click
elements.first_nav_el.addEventListener('click', () => {
    elements.first_nav_el.textContent = `better now?`;
    elements.header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
    url(../images/background_${Views.getNumber(0, 10)}.jpg)`;
})


/* Hot image section change on click */
elements.section_hot_image.addEventListener('click', (event) => {
   event.target.src = `images/img${Views.getNumber(0, 20)}.jpg`;
})


// making the customer review section responsive
/*------------------------------------------------------*/
const screenWidth1280 = window.matchMedia("(max-width: 1280px)");
screenWidth1280.addListener( () => {
   if (screenWidth1280.matches)  Views.swiper.params.slidesPerView = 3; 
   else Views.swiper.params.slidesPerView = 4; 
} )

const screenWidth1022 = window.matchMedia("(max-width: 1022px)");
screenWidth1022.addListener( () => {
    if (screenWidth1022.matches) Views.swiper.params.slidesPerView = 2; 
    else  Views.swiper.params.slidesPerView = 3; 
} )

const screenWidth900 = window.matchMedia("(max-width: 850px)");
screenWidth900.addListener( () => {
    if (screenWidth900.matches)  Views.swiper.params.slidesPerView = 1;
    else Views.swiper.params.slidesPerView = 2;
} )
/*---------------------------------------------------------*/


