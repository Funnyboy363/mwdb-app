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
     { name: 'Dragunov',
        info: 'A soviet workhorse chambered in 7.62mm x 54mmR. This gas-operated semi-automatic sniper rifle allows for rapid followup shots',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/0/09/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221314.jpg?width=640'
      },
      { name: 'HDR', 
        info: 'Anti-material bolt action sniper rifle chambered in 12.7x108mm ammunition. 745 gr bullets have a lower muzzle velocity, but are devastating at very long ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/81/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221323.jpg?width=640'
      },
      { name: 'AX-50',
        info: 'Hard hitting, bolt action sniper rifle with .50 cal BMG ammunition. Its tungsten sabot tipped bullets are fast and powerful, but require precise shots over long distances',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/9/93/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221332.jpg?width=640'
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

h4 {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 0;
}

.avenger {
    text-align: left;
    margin: 0;
}

.gun-layout {
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  justify-content: center;
}

.gun-info {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 14px;
 background-color: #2e6d50;
  color: white;
  border-radius: 5px 0 0 5px;
}

.gun-layout img {
  border-radius: 0 5px 5px 0;
}

</style>