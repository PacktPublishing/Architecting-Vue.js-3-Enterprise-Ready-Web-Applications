<template>
  <div
    class="
      h-11
      w-11
      hover:bg-slate-100
      transition
      duration-300
      rounded-full
      flex
      justify-center
      items-center
      ml-2
      relative
    "
  >
    <slot />
  </div>
</template>

<script setup>
</script>
<script >
export default {
  name: "IconComponent",
};
</script>

<style>
</style>