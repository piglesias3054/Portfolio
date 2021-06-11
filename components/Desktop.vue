<template>
  <div id="desktop" class="desktop">
    <div class="qr"><span class="text1">CV</span></div>
    <div class="desk20 container1">
      <span class="deskFont text1" id="slideTxt">
        Hey, I’m Paula!<br />
        I’m a graphic designer and illustrator based in Madrid. I love classic
        jazz and funk, pretty landscapes, and early internet aesthetics.</span
      >
      <div id="fadeInHover" class="desk20 color"></div>
      <img class="illust" src="/2.jpg" alt="" />
    </div>
    <div class="desk container2">
      <span id="animate1">
        <span id="message1" class="message1"
          ><img src="/message1.gif" alt=""
        /></span>
        <div id="fadeInHover2" class="color2"></div>
        <Illust />
      </span>
    </div>
    <div class="desk container3">
      <span><img id="fadeIn3" class="illust" src="/9.jpg" alt="" /></span>

      <div class="box" id="slideTxt1">
        <div class="deskFont text3_title">
          I love telling stories through my work, and conveying a sense of
          adventure!
        </div>
        <div class="message3">
          <img class="illust" src="/message3.gif" alt="" />
        </div>
      </div>
    </div>
    <div class="desk deskImage container4">
      <span>
        <img id="fadeIn4" class="illust fix" src="/4.jpg" alt="" />
      </span>
      <span class="deskFont text2" id="slideTxt2">
        Freelancer with previous experience as a children's book illustrator and
        published works!
          <img class="message5 illust" src="/message5.gif" alt="" />
      </span>
    </div>
    <div class="desk container5">
      <span class="deskFont text4" id="slideTxt4">
        Clients include Manos Unidas and independent publishers.
      </span>
      <img id="fadeIn5" class="illust" src="/5.jpg" alt="" />
    </div>
    <div class="desk deskImage container6">
      <img id="fadeIn6" class="illust" src="/6.jpeg" alt="" />
      <span class="deskFont text5" id="slideTxt5">
        Specializes in background art and is involved in the process of
        establishing color, style, and mood of a scene.
      </span>
    </div>
    <div class="desk deskImage container7">
      <img id="fadeIn7" class="illust" src="/6.5.jpeg" alt="" />
      <span class="deskFont white text6" id="slideTxt6">
        Is able to create work in a variety of styles showing strong attention
        to detail. <br />
        Understands architecture, has good awareness of city spaces and
        countryside landscapes.
        <div class="message4">
          <img class="illust" src="/message3.gif" alt="" /></div
      ></span>
    </div>

    <div class="desk container8">
      <span class="container8_item"
        ><img id="fadeIn8" class="illust" src="/8.jpg" alt="" />
      </span>

      <span class="container8_item2">
        <img id="fadeIn9" class="illust" src="/7.jpg" alt="" />
      </span>
    </div>
    <div class="desk container9"></div>
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
        left: 250,
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
      triggerElement: ".container5",
    })
      .setTween("#fadeIn5", 1, {
        scale: 1,
      })

      .addTo(controller);

    // CONTAINER 6

    var fadein6 = new this.$scrollmagic.Scene({
      triggerElement: ".container5",
    })
      .setTween("#fadeIn6", 2, {
        scale: 1.1,
      })
      .addTo(controller);

    var slideTxt5 = new this.$scrollmagic.Scene({
      triggerElement: ".container4",
    })
      .setTween("#slideTxt5", 3, {
        scale: 1.1,
        right: 200,
        opacity: 1,
      })
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container5",
    })
      .setTween("#fadeIn6", 1, {
        scale: 1,
      })

      .addTo(controller);

    // CONTAINER 7

    var slideTxt6 = new this.$scrollmagic.Scene({
      triggerElement: ".container7",
    })
      .setTween("#slideTxt6", 3, {
        scale: 1.2,
        right: 200,
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
      duration: 300,
    })
      .setTween("#fadeIn7", 1, {
        scale: 1,
      })

      .addTo(controller);

    // CONTAINER 8

    var pinArt = new this.$scrollmagic.Scene({
      triggerElement: "#fadeIn9",
      duration: 1200,
      triggerHook: 600,
    })
      .setPin("#fadeIn8")
      .addTo(controller);
  },
};
</script>



<style lang="scss">
.desk20 {
  min-height: 50vh;
}

.deskImage {
  width: 50%;
}

.desk50 {
  min-height: 50vh;
}

.desk {
  min-height: 100vh;
}

.deskFont {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.box {
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 1rem;
  left: 20rem;
  opacity: 1;
}

.text5 {
  color: #7caed4;
}

.white {
  color: white;
}

.container8_item {
  height: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.message3 {
  z-index: 0;
  position: absolute;
  width: 140%;
  top: -13rem;
  left: -3rem;
}

.message4 {
  z-index: 0;
  position: absolute;
  width: 140%;
  top: -5rem;
  left: -3rem;
}


.message5 {
  z-index: 0;
  position: absolute;
  width: 160%;
  top: -10rem;
  left: 0rem;
}

.container8_item2 {
  height: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 3;
}
</style>
