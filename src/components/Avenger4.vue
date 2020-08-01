<template>
<!-- This is the information for the LMGS -->
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
      { name: 'PKM',
        info: 'Fully automatic light machine gun firing 7.62mm ammunition for high damage at a moderate fire rate',
        mag: '100',
        reload: '6.77s',
        rpm: '750',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a4/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221210.jpg?width=640'
      },
      { name: 'SA87', 
        info: 'Fully automatic bullpup light machine gun. Lower rate of fire and 5.56mm ammunition keeps this rifle stable and effective at long ranges',
        mag: '30',
        reload: '2.24s',
        rpm: '600',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/b/b8/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221219.jpg?width=640'
      },
      { name: 'M91',
        info: 'Robust light machine gun sacrifices mobility for stability. High caliber sustained fire will neutralize targets at long ranges',
        mag: '100',
        reload: '6.09s',
        rpm: '660',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/6/67/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221227.jpg?width=640'
      },
      { name: 'MG34',
        info: 'Fully automatic weapon with a high rate of fire and punishing 7.92 Mauser ammunition. Salvages WW2 machine guns are still reliable and deadly on the battlefield',
        mag: '50',
        reload: '7.76s',
        rpm: '860',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/84/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221236.jpg?width=640'
      },
      { name: 'Holger-26',
        info: 'A versatile fully automatic 5.56mm light machine gun. Modular design can be configured for a broad range of engagements',
        mag: '100',
        reload: '2.52s',
        rpm: '750',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/4/42/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165847.jpg?width=640'
      },
      {
        name: 'Bruen',
        info: 'Air-cooled open bolt 5.56 light machine gun features a competitive rate of fire and excellent stability that will dominate the mid to long range battlefield',
        mag: '100',
        reload: '4.71s',
        rpm: '750',
        image: 'https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/MW_Bruen_Glitch.jpg'
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
  background-color: #6d6c2e;
}

</style>