<template>
<!-- This is the information for the SMGS -->
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
      { name: 'AUG',
        info: 'A modular fully automatic weapon configured for mobility and close range combat',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/cf/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221036.jpg?width=640'
      },
      { name: 'P90', 
        info: 'Automatic bullpup submachine gun. A unique top mounted magazine hold carries ample high velocity 5.7 x 28mm ammunition',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f9/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221045.jpg?width=640'
      },
      { name: 'MP5',
        info: 'Fully automatic 9mm submachine gun. A perfect balance of stability, mobility, and lethality',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/d/dd/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221054.jpg?width=640'
      },
      { name: 'UZI',
        info: 'Fully automatic open bolt submachine gun. This weapon is simple, steady and effective',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/ce/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221102.jpg?width=640'
      },
      { name: 'PP19 Bizon',
        info: 'Well-balanced automatic submachine gun with a high capacity helical magazine',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/6/6b/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221111.jpg?width=640'
      },
       { name: 'MP7',
        info: 'Compact by design, this fully automatic weapon has a high rate of fire and low recoil',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/3f/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221120.jpg?width=640'
      },
       { name: 'Striker 45',
        info: 'A hard hitting submachine gun chambered in .45 Auto that will shred at longer distances than other weapons in its class. Moderate rate of fire keeps the gun in control while fully automatic',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/4/46/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165638.jpg?width=640'
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
  background-color: #254b1d;
  color: white;
  border-radius: 5px 0 0 5px;
}

.gun-layout img {
  border-radius: 0 5px 5px 0;
}

</style>