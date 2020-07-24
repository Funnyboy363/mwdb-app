<template>
<div>
  <div id="app">

    <h1>Modern Warfare <br>Database<br></h1>
    
       <k-tabs class="tabs">
         <p class="bottom"></p>
        <k-tab name="Assault Rifles" :selected="true"><Avengers /></k-tab>
        <k-tab name="SMGS"><Avengers2 /></k-tab>
        <k-tab name="Shotguns"><Avengers3 /></k-tab>
        <k-tab name="LMGS"><Avengers4 /></k-tab>
     </k-tabs>
  <p class="bottom"></p>
  </div>
  <p class="bottom"></p>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Avengers from './components/Avenger.vue';
import Avengers2 from './components/Avenger2.vue';
import Avengers3 from './components/Avenger3.vue';
import Avengers4 from './components/Avenger4.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Avengers,
    Avengers2,
    Avengers3,
    Avengers4
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  width: 100%;
  background-image: url('https://images.hdqwalls.com/wallpapers/call-of-duty-modern-warfare-2019-4k-cb.jpg');
  background-size: cover;
  padding: 180px 0;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 70px;
  text-align: left;
  padding-left: 160px;
  margin-bottom: 0;
}

p.clickbuttons {
background-color: rgb(30, 0, 70);
padding: 10px 0;
margin: 0;
color: white;
}

   
.bottom {
padding: 20px 0;
}


iframe {
  width: 70%;
  height: 500px;
}

ul.tabs {
   position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: rgb(58, 58, 58);
  padding: 10px 0;
}

ul.tabs li a span {
  color: white;
}

ul.tabs li.is-active a span {
  color: rgb(146, 146, 146);
}

</style>
