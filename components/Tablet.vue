<template>
  <div id="mobileSection" class="mobileSection">
    <div class="qr"><span class="text1">CV</span></div>
    <div class="container1">
      <span class="text1" id="slideTxt">
        Hey, I’m Paula!<br />
        I’m a graphic designer and illustrator based in Madrid. I love classic
        jazz and funk, pretty landscapes, and early internet aesthetics.</span
      >
      <div id="fadeInHover" class="color"></div>
      <img class="illust" src="/2.jpg" alt="" />
    </div>
    <div class="res container2">
      <span id="animate1">
        <span id="message1" class="message1"
          ><img src="/message1.gif" alt=""
        /></span>
        <div id="fadeInHover2" class="color2"></div>
        <Illust />
      </span>
    </div>
    <div class="res container3">
      <span><img id="fadeIn3" class="illust" src="/9.jpg" alt="" /></span>

      <div class="box" id="slideTxt1">
        <div class="text3_title">
          I love telling stories through my work, and conveying a sense of
          adventure!
        </div>
      </div>
    </div>
    <div class="res resImage container4">
      <span>
        <img id="fadeIn4" class="illust fix" src="/4.jpg" alt="" />
      </span>
      <span class="text2" id="slideTxt2">
        Freelancer with previous experience as a children's book illustrator and
        published works!
      </span>
    </div>
    <div class="res container5">
      <span class="text4" id="slideTxt4">
        Clients include Manos Unidas and independent publishers.
      </span>
      <img id="fadeIn5" class="illust" src="/5.jpg" alt="" />
    </div>
    <div class="res resImage container6">
      <img id="fadeIn6" class="illust" src="/6.jpeg" alt="" />
      <span class="text5" id="slideTxt5">
        Specializes in background art and is involved in the process of
        establishing color, style, and mood of a scene.
      </span>
    </div>
    <div class="res resImage container7">
      <img id="fadeIn7" class="illust" src="/6.5.jpeg" alt="" />
      <span class="text6" id="slideTxt6">
        Is able to create work in a variety of styles showing strong attention
        to detail. <br />
        Understands architecture, has good awareness of city spaces and
        countryside landscapes.</span
      >
    </div>
    <div class="res container8">
      <span><img id="fadeIn8" class="illust" src="/8.jpg" alt="" /> </span>
      <span>
        <img id="fadeIn9" class="illust" src="/7.jpg" alt="" />
      </span>
    </div>
    <div class="res container9"></div>
    <div class="closer">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import Mobile from "../components/Mobile.vue";
import Header from "../components/Header.vue";
import Illust from "../components/Illust.vue";

export default {
  components: {
    Illust,
    Header,
    Contact,
    Mobile,
  },

  mounted() {
    const controller = new this.$scrollmagic.Controller();

    // header

    // CONTAINER 1

    var fadeIn = new this.$scrollmagic.Scene({
      triggerElement: ".container",
    })
      .setTween("#fadeIn", 2, {
        scale: 1.1,
      })
      .addTo(controller);

    var fadeIn2 = new this.$scrollmagic.Scene({
      triggerElement: ".container1",
    })
      .setTween("#fadeInHover", 3, {
        opacity: 0.4,
      })
      .addTo(controller);

    var slideTxt = new this.$scrollmagic.Scene({
      triggerElement: ".container1",
      triggerHook: "container2",
    })

      .setTween("#slideTxt", 3, {
        scale: 1.1,
        right: 210,
        opacity: 1,
      })
      .addTo(controller);

    // CONTAINER 2

    var slideTxt = new this.$scrollmagic.Scene({
      triggerElement: ".container2",
    })

      .setTween("#message1", 3, {
        scale: 1.1,
        opacity: 1,
      })
      .addTo(controller);

    var slideTxt = new this.$scrollmagic.Scene({
      triggerElement: ".container3",
    })
      .setTween("#slideTxt1", 3, {
        scale: 1.1,
        weight: 300,
        opacity: 1,
      })
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({ triggerElement: ".container2" })
      .setTween("#animate1", 0.5, {
        backgroundColor: "white",
        scale: 1.1,
      })
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container3",
    })
      .setTween("#fadeIn2", 2, {
        scale: 1,
      })
      .addTo(controller);

    // CONTAINER 3

    var fadeInHover2 = new this.$scrollmagic.Scene({
      triggerElement: ".container2",
    })
      .setTween("#fadeInHover2", 3, {
        opacity: 0.6,
      })
      .addTo(controller);

    var fadein3 = new this.$scrollmagic.Scene({
      triggerElement: ".container3",
    })
      .setTween("#fadeIn3", 2, {
        scale: 1.1,
        opacity: 1,
      })
      .addTo(controller);

    var scene2 = new this.$scrollmagic.Scene({
      triggerElement: ".container3",
      duration: 300,
    })

      .setPin("#animate2")

      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container3",
    })
      .setTween("#fadeIn3", 1, {
        scale: 1.1,
      })

      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container4",
    })
      .setTween("#fadeIn3", 2, {
        scale: 1,
      })
      .addTo(controller);

    // CONTAINER 4

    var slideTxt = new this.$scrollmagic.Scene({
      triggerElement: ".container4",
    })
      .setClassToggle("#slideTxt2", "colorChange", 4)
      .setTween("#slideTxt2", 3, {
        scale: 1.1,
        right: 210,
        opacity: 1,
      })
      .addTo(controller);

    var slideText3 = new this.$scrollmagic.Scene({
      triggerElement: ".container4",
    })
      .setTween("#fadeIn4", 2, {
        scale: 1.1,
      })
      .addTo(controller);

    var scene3 = new this.$scrollmagic.Scene({
      triggerElement: ".container4",
      duration: 300,
    })
      .setPin("#animate3")
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container5",
    })
      .setTween("#fadeIn4", 2, {
        scale: 1,
      })

      .addTo(controller);

    // CONTAINER 5

    var slideTxt4 = new this.$scrollmagic.Scene({
      triggerElement: ".container5",
    })
      .setTween("#slideTxt4", 3, {
        scale: 1.1,
        right: 210,
        opacity: 1,
      })
      .addTo(controller);

    var scene4 = new this.$scrollmagic.Scene({
      triggerElement: ".container5",
      duration: 300,
    })
      .setPin("#animate3")
      .addTo(controller);

    var fadein5 = new this.$scrollmagic.Scene({
      triggerElement: ".container5",
    })
      .setTween("#fadeIn5", 2, {
        scale: 1.1,
        right: 210,
      })
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container6",
    })
      .setTween("#fadeIn5", 1, {
        scale: 1,
      })

      .addTo(controller);

    // CONTAINER 6

    var fadein6 = new this.$scrollmagic.Scene({
      triggerElement: ".container6",
    })
      .setTween("#fadeIn6", 2, {
        scale: 1.1,
      })
      .addTo(controller);

    var slideTxt5 = new this.$scrollmagic.Scene({
      triggerElement: ".container6",
    })
      .setTween("#slideTxt5", 3, {
        scale: 1.1,
        right: 230,
        opacity: 1,
      })
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container7",
    })
      .setTween("#fadeIn6", 1, {
        scale: 1,
      })

      .addTo(controller);

    // CONTAINER 7
  },
};
</script>

<style lang="scss">
.res {
  max-height: 120vw;
}

.resImage {
  width: 100%;
}
</style>
