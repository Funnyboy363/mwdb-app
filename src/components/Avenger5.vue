<template>
<!-- This is the information for the Sniper Rifles -->
    <div>
      <div class="container" v-for="avenger in avengers" v-bind:key="avenger">
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
      { name: 'EBR-14',
        info: 'Semi-automatic long range battle rifle balances rate of fire with lethality',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/2/24/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221245.jpg?width=640'
      },
      { name: 'MK2 Carbine', 
        info: 'Highly accurate lever action rifle. Will neutralize an enemy with one well placed round to the head or chest',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a3/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221254.jpg?width=640'
      },
      { name: 'Kar98K',
        info: 'Bolt action rifle chambered in 7.92 Mauser. A WW2 relic that is still extremely lethal in the hands of a rebel marksman',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/8c/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221302.jpg?width=640'
      },
      { name: 'Crossbow',
        info: 'Silent and agile, this high-performance crossbow fires 20.0" bolts with exceptional lethality',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/72/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165909.jpg?width=640'
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