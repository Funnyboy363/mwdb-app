<template>
<!-- This is the information for the Other -->
    <div class="full-container">
      <div class="container d-flex" v-for="avenger in avengers" v-bind:key="avenger">
        <div class="gun-layout">
<div class="gun-info">
     <h4> {{ avenger.name }}</h4>
      <p class="avenger">{{ avenger.info }} </p>
</div>


      <img :src="avenger.image" />
        </div>
    </div>
    </div>

    
</template>



<script>
import Vue from 'vue'
import KTabs from '@kevindesousa/vue-k-tabs'
Vue.use(KTabs)
export default {
      data() {
          return {
    avengers: [
      { name: 'PILA',
        info: 'Portable infrared surface-to-air missile with a free-fire option. Self propelled missiles have a higher speed, and moderate explosive yield',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/80/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221452.jpg?width=640'
      },
      { name: 'Strela-P', 
        info: '84mm recoilless rifle lobs an explosive projectile at a very high velocity. The unguided armor piercing round has a low key explosive yield, but is devastating against vehicles on contact',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/70/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221501.jpg?width=640'
      },
      { name: 'JOKR',
        info: 'Fire and forget lock-on portable mission launcher with a large explosive yield. Infrared guided missiles take a top-attack trajectory, ensuring destruction of heavily armored vehicles',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/72/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221511.jpg?width=640'
      },
      { name: 'RPG-7',
        info: 'Ballistic-proof and explosive-resistant shield with increased melee damage',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/36/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221521.jpg?width=640'
      },
      { name: 'Riot Shield',
        info: 'Fully automatic bullpup battle rifle maintains a slow cycle rate to help control hard hitting 12.7 x 55mm ammunition',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/9/9d/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024144039.jpg?width=640'
      },
       { name: 'Combat Knife',
        info: 'CQC tactical knife. Standard military issue, employed for fast, quiet, and deadly network',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/9/9d/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221531.jpg?width=640'
      },
    ]
  }
},
}
</script>


<style scoped>
li {
    list-style-type: none;
}

.gun-info {
   background-color: #774256;
}

</style>