<template>
  <div class="menuMobile socials icons">
    <a href="https://twitter.com/miuwis/">
      <font-awesome-icon
        class="socials_item"
        :icon="{ prefix: 'fas', iconName: 'bars' }"
    /></a>
    

  </div>
</template>

<script>
import index from "../pages/index.vue";
import DropdownMenu from "../components/DropdownMenu.vue";
export default {
    components: { index, DropdownMenu},
 myFunction() {
     
      var element = document.getElementById("ejemplo");
      element.classList.toggle("hide");
    }

};
</script>

<style>


</style>