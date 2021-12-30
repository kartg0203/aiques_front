<template>
  <div class="card">
    <slot name="cardHeader"></slot>
    <slot name="cardBody"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
</style>
