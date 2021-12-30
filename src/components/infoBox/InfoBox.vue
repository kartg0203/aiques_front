<template>
  <div class="info-box">
    <!-- <router-link :to="{ name: 'Ann' }" class="info-box-icon bg-info">
            <i class="far fa-envelope"></i>
          </router-link> -->
    <slot></slot>
    <div class="info-box-content">
      <span class="info-box-text font-weight-bold">系統</span>
      <span class="info-box-number">0</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBox",
};
</script>

<style scoped>
</style>
