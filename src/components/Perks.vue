<template>
    <div>
          <k-tabs class="tabs">
              <p class="push"></p>
        <k-tab name="Tier1" :selected="true"><Tier1/></k-tab>
        <k-tab name="Tier2"><Tier2/></k-tab> 
        <k-tab name="Tier3"><Tier3/></k-tab>  
        <k-tab name="Weapon Perks"><WP/></k-tab>            
     </k-tabs>
    </div> 
</template>


<script>
import Tier1 from './perks/Tier1.vue';
import Tier2 from './perks/Tier2.vue';
import Tier3 from './perks/Tier3.vue';
import WP from './perks/wp.vue'
export default {
    components: {
        Tier1,
        Tier2,
        Tier3,
        WP
    }
}
</script>

<style>
.tabs {
    color: white;
}
</style>