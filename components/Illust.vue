<template>
  <img class="illust" src="/1.jpg" alt="" />
</template>

<script>
export default {
  function(){
    var width = window.innerWidth,
    height = window.innerHeight;
    console.log( width + ' : ' + height );

    if (width >= 768) {
    new ScrollMagic.Scene({
        // duration: 2400,
        duration: 2400,
        offset: 0
    })
    .setClassToggle(".illust", "illustResize")}}
    
};
</script>

<style>
.illust {
  width: 100%;
  height: auto;
}

.illustResize {
  width: 300%;
  height: 300%;
}




</style>