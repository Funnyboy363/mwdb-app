<template>
<div>
  <div id="app">
    <h1><span class="db">Modern Warfare Database</span></h1>
           <k-tabs class="tabs">
              <p class="push"></p>
        <k-tab name="Assault Rifles" :selected="true"><Avengers /></k-tab>
        <k-tab name="SMGS"><Avengers2 /></k-tab>
        <k-tab name="Shotguns"><Avengers3 /></k-tab>
        <k-tab name="LMGS"><Avengers4 /></k-tab>
         <k-tab name="Marksman"><Avengers5 /></k-tab>
          <k-tab name="Sniper"><Avengers6 /></k-tab>
           <k-tab name="Handguns"><Avengers7 /></k-tab>
            <k-tab name="Other"><Avengers8 /></k-tab>
            
     </k-tabs>
  </div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Avengers from './components/Avenger.vue';
import Avengers2 from './components/Avenger2.vue';
import Avengers3 from './components/Avenger3.vue';
import Avengers4 from './components/Avenger4.vue';
import Avengers5 from './components/Avenger5.vue';
import Avengers6 from './components/Avenger6.vue';
import Avengers7 from './components/Avenger7.vue';
import Avengers8 from './components/Avenger8.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Avengers,
    Avengers2,
    Avengers3,
    Avengers4,
    Avengers5,
    Avengers6,
    Avengers7,
    Avengers8
  },
};
</script>



<style>
@import './assets/styles/styles.css';


body {
  background-color: #D0D2D1;
}

#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


h1 {
 
  width: 100%;
  background-image: url('https://images.hdqwalls.com/wallpapers/call-of-duty-warzone-4k-uj.jpg');
  background-size: cover;
  background-position: bottom center;
  background-attachment: fixed;
  padding: 200px 0;
  color: rgb(43, 43, 43);
  font-weight: 700;
  font-size: 70px;
  text-align: center;
  margin-bottom: 0;
}

span.db {
  padding: 5px 10px;
  background-color: white;
  opacity: .6;
  border-radius: 5px;
  clear: both;
}

p.clickbuttons {
background-color: rgb(30, 0, 70);
padding: 10px 0;
margin: 0;
color: white;
}

   



iframe {
  width: 70%;
  height: 500px;
}



ul.tabs {
   position: -webkit-sticky;
   position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 0;
  background-color: rgb(58, 58, 58);
  padding: 10px 0;
  overflow: auto;
  white-space: nowrap;
}

ul.tabs li a span {
  color: white;
  display: inline-block;
}

ul.tabs li.is-active a span {
  color: rgb(146, 146, 146);
}




.full-container {
  margin: 2px auto !important;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: initial;
  justify-content: center;
  }


.container {
  width: 350px;
  margin: 0;
}



h4 {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 0;
    text-decoration: underline;
}

.avenger {
    text-align: left;
    margin-bottom: 10px;
}

.avenger-text {
    text-align: left;
    margin: 5px 0;
    font-size: 14px;
}

.gun-layout {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 40px;

}

.gun-info {
  display: flex;
  flex-direction: column;
  /* width: 800px; */
  padding-right: 15px;
  padding-left: 15px;
  font-size: 15px;
  color: white;
  padding-bottom: 15px;
  border-radius: 0 0 5px 5px;
 
}

.gun-layout img {
  width: 100%;
  border-radius: 5px 5px 0 0;
  padding: 0;
  flex: auto;
}


</style>
