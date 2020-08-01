<template>
<!-- This is the information for the Perks -->
    <div class="full-container">
      <div class="container mt-5" v-for="perk in perks" v-bind:key="perk">
        <div class="gun-layout">
<div class="gun-info">
     <h4> {{ perk.name }}</h4>
      <p class="avenger">{{ perk.info }} </p>   
       <p class="avenger">{{ perk.info2 }} </p>   
       <p class="avenger">{{ perk.info3 }} </p> 
       <p class="avenger">{{ perk.info4 }} </p> 
       <p class="avenger">{{ perk.info5 }} </p>   
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
      { name: 'Tier 1',
        info: 'Double Time: Double the duration of Tactical Sprint. Increase crouch movement speed by 30%',
        info2: 'Kill Chain: Killstreak kills count towards your next killstreak. Only applies to killstreaks earned this life',
        info3: 'Scavenger: Resupply ammo from dead players',
        info4: 'E.O.D: Take reduced damage from non-killstreak explosives and fire. Hack enemy Claymores, Proximity Mines, and C4',
        info4: 'Cold-Blooded: Undetectable by AI targeting systems and thermal optic. Does not trigger High Alert warning',
        info5: 'Quick Fix: Killing players immediately starts health regeneration. Capturing and holding objectives increases your health regeneration rate',
        image: 'https://cdn.mos.cms.futurecdn.net/ff6ynJ4m68ekyPBGi7y7zi-970-80.png.webp'
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