<template>
<!-- This is the information for the LMGS -->
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
      { name: 'PKM',
        info: 'Fully automatic light machine gun firing 7.62mm ammunition for high damage at a moderate fire rate',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a4/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221210.jpg?width=640'
      },
      { name: 'SA87', 
        info: 'Fully automatic bullpup light machine gun. Lower rate of fire and 5.56mm ammunition keeps this rifle stable and effective at long ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/b/b8/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221219.jpg?width=640'
      },
      { name: 'M92',
        info: 'Robust light machine gun sacrifices mobility for stability. High caliber sustained fire will neutralize targets at long ranges',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/6/67/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221227.jpg?width=640'
      },
      { name: 'MG34',
        info: 'Fully automatic weapon with a high rate of fire and punishing 7.92 Mauser ammunition. Salvages WW2 machine guns are still reliable and deadly on the battlefield',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/8/84/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221236.jpg?width=640'
      },
      { name: 'Holger-26',
        info: 'A versatile fully automatic 5.56mm light machine gun. Modular design can be configured for a broad range of engagements',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/4/42/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20200323165847.jpg?width=640'
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
}

.gun-info {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 14px;
 background-color: #030003;
  color: white;
  border-radius: 5px 0 0 5px;
}

.gun-layout img {
  border-radius: 0 5px 5px 0;
}

</style>