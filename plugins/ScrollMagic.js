import Vue from 'vue';
import * as ScrollMagic from 'scrollmagic';
// import gsap from "gsap";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
//import 'imports-loader?imports=scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMq from 'vue-mq'

// Add the specific imported icons
library.add(faEnvelope)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)
library.add(faBars)

// Enable the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1250,
      desktop: Infinity,
    }
  })


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
ScrollMagicPluginIndicator(ScrollMagic);


//ScrollMagicPluginGsap(ScrollMagic, gsap);

Object.defineProperty(Vue.prototype, '$scrollmagic', { value: ScrollMagic });
