import Weapons from './components/Weapons.vue';
import Lethal from './components/Lethal.vue';
import Perks from './components/Perks.vue';

export const routes = [
    { path: '/', component: Weapons},
    { path: '/Lethal', component: Lethal},
    { path: '/Perks', component: Perks}
];