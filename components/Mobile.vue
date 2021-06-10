<template>
  <div class="menuMobile socials icons">
    <a href="https://twitter.com/miuwis/">
      <font-awesome-icon
        class="socials_item"
        :icon="{ prefix: 'fas', iconName: 'bars' }"
    /></a>
    
    <DropdownMenu />
  </div>
</template>

<script>
import index from "../pages/index.vue";
import DropdownMenu from "../pages/index.vue";
export default {
    components: { index, DropdownMenu},
 myFunction() {
     
      var element = document.getElementById("ejemplo");
      element.classList.toggle("hide");
    }

};
</script>

<style>
.show {
  visibility: visible;
}
.hide {
  visibility: hidden;
}

.orange {
  background: red;
}

.yellow {
  background: blue;
}

.div {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}
</style>