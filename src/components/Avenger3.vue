<template>
<!-- This is the information for the Shotguns -->
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
      { name: 'Model 680',
        info: 'Reliable, well-rounded 12 gauge pump-action shotgun',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/e/eb/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221129.jpg?width=640'
      },
      { name: 'R9-0 Shotgun', 
        info: 'Double barrels provide two rapid shots before each re-chamber',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/e/e0/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221138.jpg?width=640'
      },
      { name: '725',
        info: 'Break action shotgun with two round capacity. A long back-bored barrel and cylindrical choke keeps spread tight and lethal over extended ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/1/1a/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221150.jpg?width=640'
      },
      { name: 'Origin 12 Shotgun',
        info: 'An agile 12-gauge mag fed shotgun from the VLK extensive options to modify range, stability, and maneuverability',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/6/61/VLK_Rogue_Class_1.png?width=640'
      },
      { name: 'VLK Rogue',
        info: 'Well-balanced automatic submachine gun with a high capacity helical magazine',
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
 background-color: #612212;
  color: white;
  border-radius: 5px 0 0 5px;
}

.gun-layout img {
  border-radius: 0 5px 5px 0;
}

</style>