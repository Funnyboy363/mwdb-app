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
     { name: 'Dragunov',
        info: 'A soviet workhorse chambered in 7.62mm x 54mmR. This gas-operated semi-automatic sniper rifle allows for rapid followup shots',
        mag: '10',
        reload: '4s',
        rpm: '208',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/0/09/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221314.jpg?width=640'
      },
      { name: 'HDR', 
        info: 'Anti-material bolt action sniper rifle chambered in 12.7x108mm ammunition. 745 gr bullets have a lower muzzle velocity, but are devastating at very long ranges',
        mag: '5',
        reload: '4.4s',
        rpm: '31.5',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/81/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221323.jpg?width=640'
      },
      { name: 'AX-50',
        info: 'Hard hitting, bolt action sniper rifle with .50 cal BMG ammunition. Its tungsten sabot tipped bullets are fast and powerful, but require precise shots over long distances',
        mag: '5',
        reload: '4.145s',
        rpm: '40',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/9/93/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221332.jpg?width=640'
      },
      {
        name: 'Rytec',
        info: 'This semi-automatic Anti-Material Rifle is chambered in .50 BMG for dominant long range assaults',
        mag: '5',
        reload: '3.15s',
        rpm: '165',
        image: 'https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/AGB-MW-Rytec-Challenge-002.jpg'
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
  background-color: #2e6d50;
}

</style>