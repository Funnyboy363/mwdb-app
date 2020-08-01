<template>
    <div>
          <k-tabs class="tabs">
              <p class="push"></p>
        <k-tab name="Lethal" :selected="true"><Lethal/></k-tab>
        <k-tab name="Tactical"><Tactical/></k-tab>            
     </k-tabs>
    </div> 
</template>


<script>
import Lethal from './landt/Lethals.vue';
import Tactical from './landt/Tactical.vue';
export default {
    components: {
        Lethal,
        Tactical
    }
}
</script>

<style>
.tabs {
    color: white;
}
</style>