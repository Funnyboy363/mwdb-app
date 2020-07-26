<template>
<!-- This is the information for the SMGS -->
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
      { name: 'AUG',
        info: 'A modular fully automatic weapon configured for mobility and close range combat',
        mag: '25',
        reload: '1.57s',
        rpm: '750',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/cf/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221036.jpg?width=640'
      },
      { name: 'P90', 
        info: 'Automatic bullpup submachine gun. A unique top mounted magazine hold carries ample high velocity 5.7 x 28mm ammunition',
        mag: '50',
        reload: '2.09s',
        rpm: '900',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f9/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221045.jpg?width=640'
      },
      { name: 'MP5',
        info: 'Fully automatic 9mm submachine gun. A perfect balance of stability, mobility, and lethality',
        mag: '30',
        reload: '1.70s',
        rpm: '800',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/d/dd/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221054.jpg?width=640'
      },
      { name: 'UZI',
        info: 'Fully automatic open bolt submachine gun. This weapon is simple, steady and effective',
        mag: '32',
        reload: '1.47s',
        rpm: '590',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/ce/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221102.jpg?width=640'
      },
      { name: 'PP19 Bizon',
        info: 'Well-balanced automatic submachine gun with a high capacity helical magazine',
        mag: '64',
        reload: '1.72s',
        rpm: '650',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/6/6b/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221111.jpg?width=640'
      },
       { name: 'MP7',
        info: 'Compact by design, this fully automatic weapon has a high rate of fire and low recoil',
        mag: '40',
        reload: '1.49s',
        rpm: '950',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/3f/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221120.jpg?width=640'
      },
       { name: 'Striker 45',
        info: 'A hard hitting submachine gun chambered in .45 Auto that will shred at longer distances than other weapons in its class. Moderate rate of fire keeps the gun in control while fully automatic',
        mag: '25',
        reload: '1.70',
        rpm: '600',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/4/46/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165638.jpg?width=640'
      },
      {
        name: 'Fennec',
        info: 'An aggressive full auto sub machine gun with buttery smooth recoil and a blazing fast rate of fire that is exceptional for strategic room clearing and holding down the front line',
        mag: '25',
        reload: '2.95s',
        rpm: '1100',
        image: 'https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/AGB-MW-Weapon-Detail-Fennec-Overview.jpg',
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
  background-color: #254b1d;
}

</style>