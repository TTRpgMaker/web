<template>
  <WelcomeItem>
    <template #heading>
      <span class="label">Welcome</span>
    </template>
    <hr class="neo-line">
  </WelcomeItem>
</template>
<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
</script>
<style scoped lang="stylus">
.label {
  color: #86f7be;
  text-shadow: 0 0 10px lime;
}

.neo-line {
  border: #dd726d solid;
  border-radius: 16px;
  box-shadow: 0 0 2px #ff0e00, 0 0 12px #fa0d00, 0 0 22px #6e1510, 0 0 30px #6e1510, 0 0 41px #3d0606;
  margin: 10px 0 30px 0;
}
</style>
