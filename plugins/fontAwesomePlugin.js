import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome';
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faGithub
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
