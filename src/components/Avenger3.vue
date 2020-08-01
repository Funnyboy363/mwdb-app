<template>
<!-- This is the information for the Shotguns -->
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
      { name: 'Model 680',
        info: 'Reliable, well-rounded 12 gauge pump-action shotgun',
        mag: '8',
        reload: '7s',
        rpm: '70',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/e/eb/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221129.jpg?width=640'
      },
      { name: 'R9-0 Shotgun', 
        info: 'Double barrels provide two rapid shots before each re-chamber',
        mag: '14',
        reload: '8.81s',
        rpm: '280',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/e/e0/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221138.jpg?width=640'
      },
      { name: '725',
        info: 'Break action shotgun with two round capacity. A long back-bored barrel and cylindrical choke keeps spread tight and lethal over extended ranges', 
        mag: '2',
        reload: '2.59s',
        rpm: '154',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/1/1a/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221150.jpg?width=640'
      },
      { name: 'Origin 12 Shotgun',
        info: 'An agile 12-gauge mag fed shotgun from the VLK extensive options to modify range, stability, and maneuverability',
        mag: '8',
        reload: '3.15s',
        rpm: '230',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/6/61/VLK_Rogue_Class_1.png?width=640'
      },
      { name: 'VLK Rogue',
        info: 'Well-balanced automatic submachine gun with a high capacity helical magazine',
        mag: '8',
        reload: '2.5s',
        rpm: '131',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/6/6b/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221111.jpg?width=640'
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
  background-color: #612212;
}


</style>