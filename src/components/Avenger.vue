<template>
<!-- This is the information for the Assault Rifles -->
    <div class="full-container">
      <div class="container d-flex" v-for="avenger in avengers" v-bind:key="avenger">
        <div class="gun-layout">
<div class="gun-info">
     <h4> {{ avenger.name }}</h4>
      <p class="avenger">{{ avenger.info }} </p>
      <p class="avenger-text">Magazine: {{ avenger.mag}} </p>
      <p class="avenger-text">Reload Time: {{ avenger.reload }} </p>
      <p class="avenger-text">RPM: {{ avenger.rpm }} </p>
      
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
      { name: 'Kilo 141',
        info: 'Fully automatic assault rifle with an ergonomic design that improves handling, and a steady fire rate helps stay on target.',
        mag: '30',
        reload: '1.34s',
        rpm: '750',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/31/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220924.jpg?width=640'
      },
      { name: 'FAL', 
        info: 'Semi-automatic battle rifle with a high rate of fire for faster follow up shots',
        mag: '20',
        reload: '1.94s',
        rpm: '470',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/32/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220935.jpg?width=640'
      },
      { name: 'M4A1',
      mag: '30',
        reload: '1.39',
        rpm: '800',
        info: 'Fully automatic, all-purpose battle rifle. Control your shots and this weapon can be very effective at range',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/74/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220940.jpg?width=640'
      },
      { name: 'FR 5.56',
        mag: '30',
        reload: '1.65s',
        rpm: '560',
        info: 'Three round burst bullpup battle rifle. A well placed burst can be extremely deadly at intermittent ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f1/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220946.jpg?width=640'
      },
      { name: 'Oden',
        info: 'Fully automatic bullpup battle rifle maintains a slow cycle rate to help control hard hitting 12.7 x 55mm ammunition',
        mag: '20',
        reload: '1.95s',
        rpm: '410',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/5/5a/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220959.jpg?width=640'
      },
       { name: 'M13',
        info: 'Automatic assault rifle featuring a short stroke piston system that keeps the fire rate high and the recoil low',
        mag: '30',
        reload: '1.30s',
        rpm: '900',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/5/5a/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220959.jpg?width=640'
      },
       { name: 'FN Scar 17',
       mag: '20',
       reload: '1.44s',
       rpm: '570',
        info: 'Large caliber, fully automatic assault rifle that provides high damage over long ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/0/01/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221018.jpg?width=640'
      },
       { name: 'AK-47',
        info: 'Very reliable automatic assault rifle chambered in 7.62mm Soviet. Large caliber ammunition requires skill to control recoil',
        mag: '30',
        reload: '1.17s',
        rpm: '560',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a1/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221027.jpg?width=640'
      },
      { name: 'RAM-7',
        info: 'A fully automatic bullpup assault rifle with a compact design that lends itself to close-quarters engagements',
        mag: '30',
        reload: '1.62s',
        rpm: '860',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f7/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165321.jpg?width=640'
      },
      { name: 'GRAU 5.56',
        info: 'This modular 5.56 weapon platform is lightweight and maneuverable, with exceptional range. Precision engineering and world class aftermarket barrels give this weapon extreme potential',
        mag: '30',
        reload: '1.32s',
        rpm: '730',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/4/42/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165400.jpg?width=640'
      },
      {
        name: 'CR-56 AMAX',
        info: 'The CR-56 AMAX is in the same ballpark of heavier-hitting, slower firing assault rifles like the AK-47, but isn’t necessarily in Oden territory. Compared to the AK-47, the CR-56 sacrifices a little bit of power and range for a better fire rate and mobility',
        mag: '30',
        reload: '2.82s',
        rpm: '620',
        image: 'https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/AGB-MW-Weapon-Detail-CR-56-AMAX-Emissary.jpg'
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
   background-color: #004f8f;
}



</style>