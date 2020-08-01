<template>
<!-- This is the information for the Perks -->
    <div class="full-container d-flex">
      <div class="container d-flex mt-5" v-for="perk in perks" v-bind:key="perk">
        <div class="gun-layout">
<div class="gun-info">
     <h4> {{ perk.name }}</h4>
      <p class="avenger">{{ perk.info }} </p>   
       <p class="avenger">{{ perk.info2 }} </p>   
       <p class="avenger">{{ perk.info3 }} </p> 
       <p class="avenger">{{ perk.info4 }} </p> 
       <p class="avenger">{{ perk.info5 }} </p>    
       <p class="avenger">{{ perk.info6 }} </p>  
</div>
 <img :src="perk.image" />
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
    perks: [
      {
          name: 'Tier 3',
          image: 'https://cdn.mos.cms.futurecdn.net/nFrLrLtaj4woKu9AoGS7N8-970-80.png.webp',
          info: 'Tune Up: Increase the charge rate of field upgrades by 40%',
          info2: 'Amped: Faster weapon swap and rocket launcher reload speed',
          info3: 'Shrapnel: Spawn with an extra piece of lethal equipment. Explosive damage delays enemy health regeneration',
          info4: 'Battle Hardened: Reduce strength of enemy flash, stun, EMP, and gas effects. Immune to Snapshot Grenades',
          info5: 'Spotter: See enemy equipment, field upgrades, and killstreaks through walls. Hack enemy Claymores, Proximity Mines, C4, and Trophy Systems',
          info6: 'Tracker: Enemies leave behind a footprint trail. See markers at enemy death locations and hide the death markers of enemies you kill'
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
   background-color: #885cd8;
  
}

.gun-layout {
    width: 100%;
}


.container {
    width: 850px;
}



</style>