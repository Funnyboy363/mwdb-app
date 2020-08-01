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
          name: 'Tier 2',
          image: 'https://cdn.mos.cms.futurecdn.net/KC29Rgu5U2E2JTraXHTNn3-970-80.png.webp',
          info: 'Restock: Recharge equipment over 25 seconds',
          info2: 'Hardline: Your killstreaks cost one less kill',
          info3: 'High Alert: Your vision pulses when enemies outside of your view see you',
          info4: 'Ghost: Undetectable by UAVs, Radar Drones, and Heartbeat Sensors',
          info5: 'Pointman: Change your killstreaks into Scorestreaks',
          info6: 'Overkill: Carry two primary weapons'
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


.container {
    width: 850px;
}


</style>