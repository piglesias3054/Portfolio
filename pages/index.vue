<template>
  <div id="main" class="main">
    <Socials v-if="$mq === 'laptop'" />
    <Socials v-if="$mq === 'desktop'" />
    <Mobile v-if="$mq === 'tablet'" />
    <Mobile v-if="$mq === 'mobile'" />
    <div id="header" class="container">
      <Header v-if="$mq === 'desktop'" />
      <HeaderMobile v-if="$mq === 'tablet'" />
      <Header v-if="$mq === 'laptop'" />
      <HeaderMobile v-if="$mq === 'mobile'" />
    </div>
    <div class="qr"><span class="text1">CV</span></div>
    <Desktop v-if="$mq === 'laptop'" />
    <Desktop v-if="$mq === 'desktop'" />
    <Tablet v-if="$mq === 'tablet'" />
    <MobileSection v-if="$mq === 'mobile'" />
  
    
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import Mobile from "../components/Mobile.vue";
import Header from "../components/Header.vue";
import Illust from "../components/Illust.vue";
import Desktop from "../components/Desktop.vue";
import MobileSection from "../components/MobileSection.vue";
import Tablet from "../components/MobileSection.vue";

export default {
  components: { Illust, Header, Contact, Mobile, Desktop, MobileSection, Tablet },
  mounted() {
    const controller = new this.$scrollmagic.Controller();

    // header

    var header = new this.$scrollmagic.Scene({
      triggerElement: ".socials",
    })
      .setTween("#header", 2, {
        scale: 1.1,
      })
      .addTo(controller);

    
    // CONTAINER 5

   
    
    // CONTAINER 7

    var slideTxt6 = new this.$scrollmagic.Scene({
      triggerElement: ".container7",
    })
      .setTween("#slideTxt6", 3, {
        scale: 1.1,
        right: 230,
        opacity: 1,
      })
      .addTo(controller);

    var fadein7 = new this.$scrollmagic.Scene({
      triggerElement: ".container7",
    })
      .setTween("#fadeIn7", 2, {
        scale: 1.1,
      })

      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container8",
    })
      .setTween("#fadeIn7", 1, {
        scale: 1,
      })

      .addTo(controller);

    // CONTAINER 8

    var fadein8 = new this.$scrollmagic.Scene({
      triggerElement: ".container8",
    })
      .setTween("#fadeIn8, #fadeIn9", 2, {
        scale: 1.1,
      })
      .addTo(controller);
  },

  function() {
    var width = window.innerWidth,
      height = window.innerHeight;

    var main = document.querySelector(".main");

    if (width >= 768) {
      main.classList.toggle(".none");
    }
  },
};
</script>

<style lang="scss">
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

.qr {
  margin: 1rem;
}

.qr img {
  max-height: 4rem;
}

.socials {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin: 1rem;
}

.socials a {
  color: #addbfc;
}

.socials a :hover {
  color: #3878a5;
}

.socials_item {
  font-style: normal;
  margin: 0.5rem;
  top: 5rem;
}

.icon {
  margin: 0.5rem;
  padding: 0;
  max-height: 1.5rem;
}

.text1 {
  position: absolute;
  max-width: 15rem;
  font-style: normal;
  font-weight: 200;
  color: #ffffff;
  right: -20rem;
  opacity: 0.5;
  z-index: 2;
}

.text2 {
  position: absolute;
  max-width: 15rem;
  font-style: normal;
  font-weight: 300;
  right: -20rem;
  opacity: 0.5;
  z-index: 2;
}

.text4 {
  position: absolute;
  max-width: 15rem;
  font-style: normal;
  font-weight: 300;
  color: #ffffff;
  right: -20rem;
  padding-top: 8rem;
  opacity: 0.5;
  z-index: 2;
}

.text5 {
  position: absolute;
  max-width: 15rem;
  font-style: normal;
  font-weight: 300;

  right: -20rem;
  padding-top: 8rem;
  opacity: 0.5;
  z-index: 2;
}

.text6 {
  position: absolute;
  max-width: 15rem;
  font-style: normal;
  font-weight: 300;
  color: #7caed4;
  right: -20rem;
  padding-top: 8rem;
  opacity: 0.5;
  z-index: 2;
}

.container {
  margin: 0 auto;
  overflow: hidden;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.closer {
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container1 {
  margin: 0;
  max-width: 100%;
  max-height: 5rem;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.message1 {
  position: absolute;
  opacity: 0;
  top: 40%;
  left: 20%;
  right: 20%;
  z-index: 4;
}

.message1 img {
  margin: auto;
  align-self: center;
  max-width: 40%;
  height: auto;
}

.color {
  position: absolute;
  max-height: 5rem;
  opacity: 0;
  z-index: 1;
  width: 100%;
  background: #284f75;
  background-blend-mode: multiply;
}

.color2 {
  position: absolute;
  height: 100%;
  opacity: 0;
  z-index: 1;
  width: 100%;
  background: #284f75;
  mix-blend-mode: multiply;
}

.container2 {
  margin: 0 auto;
  max-height: 10rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  text-align: center;
  background: salmon;
}



.fix {
  display: flex;
  align-items: flex-end;
}

.text3_title {
  max-width: 14rem;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  opacity: 1;
  z-index: 2;
}

.text3_year {
  max-width: 15rem;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;

  opacity: 1;
  z-index: 2;
}

.container3 {
  margin: 0 auto;
  overflow: hidden;
  max-height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container4 {
  margin: 0;
  overflow: hidden;
  max-height: 10rem;
  display: flex;
  align-items: center;
  text-align: center;
}

.container5 {
  margin: 0 auto;
  overflow: hidden;
  max-height: 40rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

.container5 img {
  height: 200%;
}

.container6 {
  margin: 0;
  overflow: hidden;
  max-height: 10rem;
  display: flex;
  align-items: center;
  text-align: center;
}

.container7 {
  margin: 0;
  overflow: hidden;
  max-height: 10rem;
  display: flex;
  align-items: center;
  text-align: center;
}text2

.container8 {
  margin: 0;
  overflow: hidden;
  max-height: 100rem;
  width: 100%;
  display: flex;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.colorChange {
  color: #c41155;
}

.none {
  display: none;
}
</style>
