<template>
<!-- This is the information for the Handguns -->
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
      { name: 'X16',
        info: 'Semi-automatic pistol chambered in .45 ACP ammunition. A reliable fall back when you find yourself in close quarters',
        mag: '13',
        reload: '1.68s',
        rpm: '280',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/9/95/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221401.jpg?width=640'
      },
      { name: '1911', 
        info: 'A well-rounded semi-automatic side arm with a moderate rate of fire. Slightly more range than your average .45 ACP pistol',
        mag: '7',
        reload: '1.64s',
        rpm: '270',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/c1/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221409.jpg?width=640'
      },
      { name: '.357',
        info: 'Double action revolver firing .357 Magnum ammunition for powerful damage over extended ranges',
        mag: '6',
        reload: '3s',
        rpm: '117',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f0/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221418.jpg?width=640'
      },
      { name: 'M19',
        info: 'Semi-automatic 9mm pistol, excellent stability with a rapid cycle rate',
        mag: '17',
        reload: '2.14s',
        rpm: '312',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/5/5f/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221427.jpg?width=640'
      },
      { name: '.50 GS',
        info: 'The most powerful semi-automatic handgun available, deals heavy damage up to intermediate ranges',
        mag: '7',
        reload: '1.9s',
        rpm: '165',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/32/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221441.jpg?width=640'
      },
      {
        name: 'Renetti',
        info: 'Well rounded semi-auto 9mm pistol. This unassuming sidearm excels in close range combat, and features gunsmithing capabilities unique to the pistol class that permit a variety of engagement strategies',
        mag: '15',
        reload: '1.74s',
        rpm: '315',
        image: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/17647.png'
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
  background-color: #573707;
}

</style>