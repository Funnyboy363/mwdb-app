<template>
<!-- This is the information for the Assault Rifles -->
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
      { name: 'Kilo 141',
        info: 'Fully automatic assault rifle with an ergonomic design that improves handling, and a steady fire rate helps stay on target.',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/31/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220924.jpg?width=640'
      },
      { name: 'FAL', 
        info: 'Semi-automatic battle rifle with a high rate of fire for faster follow up shots',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/3/32/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220935.jpg?width=640'
      },
      { name: 'M4A1',
        info: 'Fully automatic, all-purpose battle rifle. Control your shots and this weapon can be very effective at range',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/74/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220940.jpg?width=640'
      },
      { name: 'FR 5.56',
        info: 'Three round burst bullpup battle rifle. A well placed burst can be extremely deadly at intermittent ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f1/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220946.jpg?width=640'
      },
      { name: 'Oden',
        info: 'Fully automatic bullpup battle rifle maintains a slow cycle rate to help control hard hitting 12.7 x 55mm ammunition',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/5/5a/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220959.jpg?width=640'
      },
       { name: 'M13',
        info: 'Automatic assault rifle featuring a short stroke piston system that keeps the fire rate high and the recoil low',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/5/5a/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024220959.jpg?width=640'
      },
       { name: 'FN Scar 17',
        info: 'Large caliber, fully automatic assault rifle that provides high damage over long ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/0/01/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221018.jpg?width=640'
      },
       { name: 'AK-47',
        info: 'Very reliable automatic assault rifle chambered in 7.62mm Soviet. Large caliber ammunition requires skill to control recoil',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a1/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221027.jpg?width=640'
      },
      { name: 'RAM-7',
        info: 'A fully automatic bullpup assault rifle with a compact design that lends itself to close-quarters engagements',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f7/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165321.jpg?width=640'
      },
      { name: 'GRAU 5.56',
        info: 'This modular 5.56 weapon platform is lightweight and maneuverable, with exceptional range. Precision engineering and world class aftermarket barrels give this weapon extreme potential',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/4/42/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165400.jpg?width=640'
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
  background-color: #004f8f;
  color: white;
  border-radius: 5px 0 0 5px;
}

.gun-layout img {
  border-radius: 0 5px 5px 0;
}

</style>