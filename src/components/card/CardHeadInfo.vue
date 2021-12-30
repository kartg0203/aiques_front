<template>
  <div class="card-header bg-info text-center font-weight-bold py-1">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "CardHeadInfo",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style>
</style>
