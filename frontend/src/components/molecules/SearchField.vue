<template>
  <TextField>
    <template #prepend>
      <svg
        class="ml-2"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        style="fill: rgb(184, 181, 181); transform: ; msfilter: "
      >
        <path
          d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
        />
      </svg>
    </template>
  </TextField>
</template>

<script setup>
import TextField from '../atoms/TextField.vue';
</script>

<style>
</style>