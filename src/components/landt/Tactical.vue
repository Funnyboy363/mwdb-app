<template>
<!-- This is the information for the Assault Rifles -->
    <div class="full-container">
      <div class="container d-flex" v-for="tactical in tacticals" v-bind:key="tactical">
        <div class="gun-layout">
<div class="gun-info">
     <h4> {{ tactical.name }}</h4>
      <p class="avenger">{{ tactical.info }} </p>      
</div>
 <img :src="tactical.image" />
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
    tacticals: [
      { name: 'Stun Grenade',
        info: 'Slows the victim’s movement and aiming. Effective against equipment',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a9/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222124.jpg?width=960'
      },
      {
          name: 'Smoke Grenade',
          info: 'Deploys a smoke screen that blocks vision and automated targeting systems',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/ab/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222135.jpg?width=960'
      },
      {
          name: 'Flash Grenade',
          info: 'Blinds and deafens targets',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/2/23/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222112.jpg?width=960'
      },
      {
          name: 'Stim',
          info: 'Military stimulant that cauterises combat wounds',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/0/0f/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222216.jpg?width=960'
      },
      {
          name: 'Decoy Grenade',
          info: 'Counter-intel grenade that simulates fake gunfire and radar signatures that confuse the enemy',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/d/d7/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222225.jpg?width=960'
      },
      {
          name: 'Gas Grenade',
          info: 'Explodes on impact with the ground releasing a lingering cloud of tear gas that causes slowed movement, blurred vision, and coughing',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a8/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222205.jpg?width=960'
      },
      {
          name: 'Snapshot Grenade',
          info: 'Provides a momentary glimpse of enemies within the blast radius',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f3/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222146.jpg?width=960'
      },
      {
          name: 'Heartbeat Sensor',
          info: 'A tablet that displays rough information about nearby enemies',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/9/98/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222156.jpg?width=960'
      }
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
   background-color: #8f3400;
}



</style>