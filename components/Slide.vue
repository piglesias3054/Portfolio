<style type="text/css">
#pinContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.panel {
  height: 100%;
  width: 100%;
  position: absolute;
}

.blue {
  background-color: black;
}

.turqoise {
  background-color: rgb(67, 127, 255);
}

.green {
  background-color: rgb(67, 255, 167);
}

.bordeaux {
  background-color: rgb(129, 29, 29);
}
</style>

<template>
  <div id="pinContainer">
    <section class="panel blue">
      <b>ONE</b>
    </section>
    <section class="panel turqoise">
      <b>TWO</b>
    </section>
    <section class="panel green">
      <b>THREE</b>
    </section>
    <section class="panel bordeaux">
      <b>FOUR</b>
    </section>
  </div>
</template>

<script>
export default {
  function() {
    // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .fromTo(
        "section.panel.turqoise",
        1,
        { x: "-100%" },
        { x: "0%", ease: Linear.easeNone }
      ) // in from left
      .fromTo(
        "section.panel.green",
        1,
        { x: "100%" },
        { x: "0%", ease: Linear.easeNone }
      ) // in from right
      .fromTo(
        "section.panel.bordeaux",
        1,
        { y: "-100%" },
        { y: "0%", ease: Linear.easeNone }
      ); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "300%",
    })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  },
};
</script>

