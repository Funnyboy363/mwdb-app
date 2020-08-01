<template>
<!-- This is the information for the Weapons Perks -->
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
       <p class="avenger">{{ perk.info7 }} </p> 
       <p class="avenger">{{ perk.info8 }} </p> 
       <p class="avenger">{{ perk.info9 }} </p>
        <p class="avenger">{{ perk.info1 }} </p>
        <p class="avenger">{{ perk.info11 }} </p> 
       <p class="avenger">{{ perk.info12 }} </p> 
       <p class="avenger">{{ perk.info13 }} </p> 
       <p class="avenger">{{ perk.info14 }} </p> 
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
          name: 'Weapon Perks',
          info: 'Heavy Hitter: Melee produces greater stun on targets',
          info2: 'FMJ: Increases bullet penetration and damage against equipment and killstreaks',
          info3: 'Sleight of Hand: Training in reloading faster when under pressure',
          info4: 'Fast Melee: Training in executing melee maneuvers with great speed',
          info5: 'Frangible - Wounding: Bullets cause target healing to be briefly delayed',
          info6: 'Frangible - Disabling: Bullets slow enemy movement and briefly disable tactical sprint when shooting legs',
          info7: 'Fully Loaded: Start with Maximum Reserve Ammo',
          info8: 'Focus: Increased control of aim while being shot',
          info9: 'Presence of Mind: Extended hold breath',
          info1: 'Recon: See enemy nameplates at greater distances',
          info11: 'Mo Money: Earn additional XP for kills',
          info12: 'Burst: Changes fire mode to 3-round burst',
          info13: 'Burst Fire (x2): Changes fire mode to 2-round burst',
          image: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/12883.png'
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

.avenger {
    margin: 2px 0;
}


</style>