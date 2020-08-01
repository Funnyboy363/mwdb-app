<template>
<!-- This is the information for the Sniper Rifles -->
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
      { name: 'EBR-14',
      mag: '10',
      reload: '1.34s',
      rpm: '265',
        info: 'Semi-automatic long range battle rifle balances rate of fire with lethality',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/2/24/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221245.jpg?width=640'
      },
      { name: 'MK2 Carbine', 
        info: 'Highly accurate lever action rifle. Will neutralize an enemy with one well placed round to the head or chest',
        mag: '20',
        reload: '1.55s',
        rpm: '320',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a3/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221254.jpg?width=640'
      },
      { name: 'Kar98K',
        info: 'Bolt action rifle chambered in 7.92 Mauser. A WW2 relic that is still extremely lethal in the hands of a rebel marksman',
        mag: '5',
        reload: '1.95s',
        rpm: '36.5',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/8c/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221302.jpg?width=640'
      },
      { name: 'Crossbow',
        info: 'Silent and agile, this high-performance crossbow fires 20.0" bolts with exceptional lethality',
        mag: '1',
        reload: '3.04s',
        rpm: '14.35',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/72/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165909.jpg?width=640'
      },
      {
        name: 'SKS',
        info: 'The SKS comes equipped with 20-round magazines firing 7.62x39mm ammunition. It’s got a fast fire rate, but don’t think that means it doesn’t pack a punch',
        mag: '20',
        reload: '1.55s',
        rpm: '320',
        image: 'https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/MW_SKS_Weapon.jpg'
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
  background-color: #6d2e68;
}

</style>