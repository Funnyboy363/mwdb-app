<template>
<!-- This is the information for the Assault Rifles -->
    <div class="full-container">
      <div class="container d-flex" v-for="lethal in lethals" v-bind:key="lethal">
        <div class="gun-layout">
<div class="gun-info">
     <h4> {{ lethal.name }}</h4>
      <p class="avenger">{{ lethal.info }} </p>      
</div>
 <img :src="lethal.image" />
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
    lethals: [
      { name: 'Frag Grenade',
        info: 'Cookable fragmentation grenade',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/81/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222005.jpg?width=960'
      },
      {
          name: 'Semtex',
          info: 'Sticky Grenade',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/87/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222035.jpg?width=960'
      },
      {
          name: 'Molotov Cocktail',
          info: 'Explode on impact setting a large area on fire temporarily',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/1/1b/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222013.jpg?width=960'
      },
      {
          name: 'Throwing Knife',
          info: 'Retrievable knife that is lethal on impact',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/c2/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222044.jpg?width=960'
      },
      {
          name: 'Claymore',
          info: 'Proximity-activated explosive mine',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/8f/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221952.jpg?width=960'
      },
      {
          name: 'Proximity Mine',
          info: 'Pressure-triggered explosive that deals heavy damage to vehicles',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a3/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222054.jpg?width=960'
      },
      {
          name: 'C4',
          info: 'Large explosive that sticks to surfaces.',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/5/5e/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222027.jpg?width=960'
      },
      {
          name: 'thermite',
          info: 'Burns fiercely for a short while after impact. Sticks to all surfaces',
          image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/78/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222103.jpg?width=960'
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
   background-color: #008f83;
}



</style>