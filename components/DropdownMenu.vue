<template>
  <div id="fadeIn" class="socials_drop icons">
    <a href="https://twitter.com/miuwis/">
      <font-awesome-icon
        class="socials_item"
        :icon="{ prefix: 'fab', iconName: 'twitter' }"
    /></a>
    <a href="https://twitter.com/miuwis/"
      ><font-awesome-icon
        class="socials_item"
        :icon="{ prefix: 'fab', iconName: 'facebook' }"
    /></a>
    <a href="https://twitter.com/miuwis/">
      <font-awesome-icon class="socials_item" icon="envelope" />
    </a>
  </div>
</template>


<script>
import index from "../pages/index.vue";

export default {
  components: { index },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.socials_item {
  color: #7caed4;
}

.socials_drop {

  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
}


</style>