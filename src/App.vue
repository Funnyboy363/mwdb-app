<template>
<div>
  <div id="app">
    <h1><span class="db">Modern Warfare Database</span></h1>
<nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src="https://pbs.twimg.com/profile_images/1624186818773258241/IDCz0cge_400x400.jpg" width="50" height="50" alt="" loading="lazy" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
     <li class="nav-item text-white"><router-link to="/" class="nav-link">Weapons</router-link></li>
<li class="nav-item text-white"><router-link to="/Lethal" class="nav-link">Lethal &amp; Tactical</router-link></li>
<li class="nav-item text-white"><router-link to="/Perks" class="nav-link">Perks</router-link></li>
    </ul>
  </div>
</nav>
<router-view></router-view>
  </div>
</div>
</template>



<script>
export default {
  name: 'App',
  components: {
  }
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
