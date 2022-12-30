<template>
  <div class="pin_container sm:justify-center">
    <div class="card card_small h-[16.25rem] relative">
      <!-- // Medium -->
      <Card />
    </div>

    <div class="card card_medium h-[20.625rem] relative">
      <!-- // Small -->
      <Card />
    </div>

    <div class="card card_large h-[28.125rem] relative">
      <!-- // Smaller -->
      <Card />
    </div>

    <div class="card card_smaller h-[11.063rem] relative">
      <!-- // Medium -->
      <Card />
    </div>

    <div class="card card_small h-[16.25rem] relative">
      <!-- // Large -->
      <Card />
    </div>

    <div class="card card_medium h-[20.625rem] relative">
      <!-- // Small -->
      <Card />
    </div>

    <div class="card card_large h-[28.125rem] relative">
      <!-- // Smaller -->
      <Card />
    </div>

    <!-- Second Row -->

    <div class="card card_smaller h-[11.063rem] relative">
      <!-- // Medium -->
      <Card />
    </div>

    <div class="card card_small h-[16.25rem] relative">
      <!-- // Large -->
      <Card />
    </div>

    <div class="card card_medium h-[20.625rem] relative">
      <!-- // Small -->
      <Card />
    </div>

    <div class="card card_large h-[28.125rem] relative">
      <!-- // Smaller -->
      <Card />
    </div>

    <div class="card card_large h-[28.125rem] relative">
      <!-- // Smaller -->
      <Card />
    </div>

    <div class="card card_small h-[16.25rem] relative">
      <!-- // Medium -->
      <Card />
    </div>

    <div class="card card_medium h-[20.625rem] relative">
      <!-- // Small -->
      <Card />
    </div>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import { toRefs } from 'vue';
import { GET_PHOTOS } from '../../graphql';
import Card from '../molecules/Card.vue';

const props = defineProps({
  board: {
    type: Object,
    default: () => {},
  },
});

const { board } = toRefs(props);
console.log(board.value);

const getBoardPins = () => {
  try {
    const { result } = useQuery(GET_PHOTOS, () => ({}));
    return result;
  } catch (error) {
    console.log(error);
  }
};

getBoardPins();
</script>



<style>
</style>