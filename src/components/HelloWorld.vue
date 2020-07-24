<template>
  <div id="avengers">
<div class="container text-center">
  <p class="bottom"></p>
  <div class="row">
    <div class="col-lg-4 col-md-6">
 <button class="btn btn-dark button1" v-on:click="isNinja = !isNinja">Iron Man</button>
  <p v-show="isNinja">
  <img src='https://img.cinemablend.com/filter:scale/quill/d/9/5/a/c/9/d95ac9d6f0acd56e12b9452301c763cd1aeffe51.jpg?fw=1200' />
  </p>
  <p v-show="!isNinja"> <img src='https://cdn.gamer-network.net/2019/usgamer/iron_man_vr.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/iron-man-vr-delayed-to-may-taking-the-avengers-old-release-date.jpg'/></p>
  </div> <div class="col-lg-4 col-md-6">
   <button class="btn btn-dark button1" v-on:click="isCaptain = !isCaptain">Captain America</button>
  <p v-show="isCaptain"><img src='https://images.indianexpress.com/2019/09/steve-rogers-759.jpg' /></p>
  <p v-show="!isCaptain">
   <img src= 'https://cdn.goliath.com/eyJidWNrZXQiOiJwdWItc3RvcmFnZSIsImtleSI6ImdvbGlhdGgvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDUvQ2FwdGFpbi1BbWVyaWNhLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODk1LCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIiLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjoxfX19fQ==' /></p></div>
   <div class="col-lg-4 col-md-6">
    <button class="btn btn-dark button1" v-on:click="isWidow = !isWidow">Black Widow</button>
  <p v-show="isWidow"><img src='https://static2.srcdn.com/wordpress/wp-content/uploads/2019/07/natasha-romanoff-black-widow-captain-america-civil-war.jpg?q=50&fit=crop&w=740&h=370' /></p>
  <p v-show="!isWidow">
   <img src='https://i.ytimg.com/vi/KLBmMLCovlc/maxresdefault.jpg' /></p></div>
  </div> <!-- end of row -->
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <button class="btn btn-dark button1" v-on:click="isThor = !isThor">Thor</button>
  <p v-show="isThor"><img src= 'https://cdn1.thr.com/sites/default/files/2017/11/thorragnarok59e8057250eb8-h_2017.jpg' /></p>
  <p v-show="!isThor">
   <img src='https://img1.looper.com/img/gallery/endgame-directors-reveal-how-hemsworth-reacted-to-fat-thor/intro-1557329348.jpg'/></p></div>
  <div class="col-lg-4 col-md-6">
    <button class="btn btn-dark button1" v-on:click="isAntman = !isAntman">AntMan</button>
  <p v-show="isAntman"><img src='https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/31/1533139814-evangeline-lilly-and-paul-rudd-ant-man-and-the-wasp-set.jpg?resize=480:*'/></p>
  <p v-show="!isAntman">
   <img src='https://cornellsun.com/wp-content/uploads/2018/07/636607239522109399-antmanandthewasp5a727bde19d45.jpg'/></p></div>
    <div class="col-lg-4 col-md-6">
    <button class="btn btn-dark button1" v-on:click="isMarvel = !isMarvel">Captain Marvel</button>
  <p v-show="isMarvel"><img src='https://cdn.onebauer.media/one/empire-images/features/5c868cb4133d503e3a47ab88/captain-marvel-ss-main.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg'/></p>
  <p v-show="!isMarvel">
   <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_mas_mob_03_0.jpg'/></p></div>
  </div> <!-- end of row -->
  </div>
</div>
</template>

<script>
export default {
  el: '#avengers',
  data() {
    return {
      isNinja: true,
      isCaptain: true,
      isWidow: true,
      isThor: true,
      isAntman: true,
      isMarvel: true
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button1 {
  padding: 5px 30px;
  border-radius: 5px 5px 0 0;
   margin-top: 20px;
   width: 300px;
   background-color: rgb(30, 0, 70);
}
.button2 {
   width: 100px;
}
p {
  margin-bottom: 10px;
}
img {
  width: 300px;
  height: 150px;
}
.bottom {
padding: 20px 0;
}
</style>
