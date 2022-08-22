<template>
  <button v-if="$attrs.type === 'menu'" class="flex">
    <p v-if="label" class="font-semibold">{{ label }}</p>

    <span v-if="$slots.icon">
      <slot name="icon" />
    </span>
  </button>

  <button v-else :class="classes" @click="onClick" :style="style">
    <span v-if="$slots.icon">
      <slot name="icon" />
    </span>
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    appearance: {
      type: String,
      validator: function (value) {
        return (
          ['primary', 'secondary', 'icon', 'tertiary'].indexOf(value) !== -1
        );
      },
      default: 'primary',
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    const classes = computed(() => ({
      'font-bold text-white rounded-3xl text-sm': true,
      button: true,
      'button--primary': props.appearance === 'primary',
      'button--secondary': props.appearance === 'secondary',
      'button--icon': props.appearance === 'icon',
      'button--tertiary': props.appearance === 'tertiary',
      [`button--${props.size || 'medium'}`]: true,
    }));

    const style = computed(() => ({
      backgroundColor: props.backgroundColor,
    }));

    const onClick = () => {
      emit('click');
    };
    props = reactive(props);
    return {
      style,
      classes,
      onClick,
    };
  },
};
</script>
<style scoped>
.button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.button--primary {
  color: white;
  background-color: black;
  padding: 3rem 4rem;
}
.button--secondary {
  color: white;
  background-color: rgb(239 68 68 / 1);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  padding: 1rem 3rem;
  display: flex;
}

.button--icon {
  display: flex;
}

.button--tertiary {
  color: black;
  background-color: rgb(229 231 235 / 1);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  padding: 3rem 2rem;
  transition-duration: 300ms;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.button--tertiary:hover {
  background-color: rgb(248 250 252 / 1);
}
.button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
