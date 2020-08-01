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
       <p class="avenger">{{ perk.info7 }} </p> 
       <p class="avenger">{{ perk.info8 }} </p> 
       <p class="avenger">{{ perk.info9 }} <p> 
       <p class="avenger">{{ perk.info10 }} </p> 
       <p class="avenger">{{ perk.info11 }} </p> 
       <p class="avenger">{{ perk.info12 }} </p> 
       <p class="avenger">{{ perk.info13 }} </p> 
       <p class="avenger">{{ perk.info14 }} </p> 
</div>
 <!-- <img :src="perk.image" /> -->
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
        image: 'https://cdn.mos.cms.futurecdn.net/ff6ynJ4m68ekyPBGi7y7zi-970-80.png.webps'
      },
      {
          name: 'Tier 2',
          image: 'https://mp1st.com/wp-content/uploads/2019/10/Call-of-Duty-Modern-Warfare-Perk-2-Hardline.jpg',
          info: 'Restock: Recharge equipment over 25 seconds',
          info2: 'Hardline: Your killstreaks cost one less kill',
          info3: 'High Alert: Your vision pulses when enemies outside of your view see you',
          info4: 'Ghost: Undetectable by UAVs, Radar Drones, and Heartbeat Sensors',
          info5: 'Pointman: Change your killstreaks into Scorestreaks',
          info6: 'Overkill: Carry two primary weapons'
      },
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
          info10: 'Presence of Mind: Extended hold breath',
          info11: 'Mo Money: Earn additional XP for kills',
          info12: 'Burst: Changes fire mode to 3-round burst',
          info13: 'Burst Fire (x2): Changes fire mode to 2-round burst',
          image: 'https://cdn.mos.cms.futurecdn.net/ZJtPtigXh6LezXYMRWHQ2h-970-80.jpg.webp'
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



</style>