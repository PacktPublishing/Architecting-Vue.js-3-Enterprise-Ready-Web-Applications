<template>
  <div class="flex w-full flex-col items-start my-2 py-2">
    <label :for="label" v-if="label">{{ label }}</label>

    <div
      class="
        w-full
        bg-[#efefef]
        py-2
        rounded-full
        flex
        hover:bg-slate-200
        transition
        duration-300
      "
    >
      <slot name="prepend" />

      <div class="pl-3 w-full">
        <input
          class="w-full bg-transparent outline-none"
          ref="field"
          :id="label"
          :type="showPassword ? 'text' : $attrs.type"
          :value="model"
          v-bind="attrsButClassAndType"
          :enterkeyhint="enterkeyhint"
          :mozactionhint="enterkeyhint"
          :disabled="disabled"
          @input="onInput"
          @focusin="onFocusIn"
          @focusout="onFocusOut"
          @animationstart="onAnimationStart"
          @keydown="emitProxy('keydown', $event)"
          @click="emitProxy('click', $event)"
          @keypress.enter="emitProxy('keypress', $event)"
          @keypress="validateKeypress($event, value)"
          @keyup="emitProxy('keyup', $event)"
          @change="emitProxy('change', $event)"
        />
      </div>
      <slot name="post-append" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, useAttrs } from 'vue';

const showPassword = ref(false);
const isFocused = ref(false);
const model = ref(null);
const field = ref(null);
const $attrs = useAttrs();

const emit = defineEmits([
  'keydown',
  'click',
  'keypress',
  'keyup',
  'change',
  'blur',
  'focus',
]);
defineProps({
  baseClass: String,
  fieldClass: String,
  disabled: Boolean,
  label: String,
  validateKeypress: Function,
  enterkeyhint: String,
});

const togglePasswordType = () => {
  showPassword.value = !showPassword.value;
};

onMounted(() => {
  checkAutofocusField();
});

function attrsButClassAndType() {
  const attrs = Object.assign({}, $attrs);
  delete attrs.class;
  delete attrs.type;
  return attrs;
}

function checkAutofocusField() {
  field.value?.focus();
}

function focus() {
  if (field.value) {
    field.value.focus();
    field.value.select();
  }
}

function onIconClick(type) {
  switch (type) {
    case 'showPassword':
      showPassword.value = !showPassword.value;
      break;
    case 'clear':
      emitProxy('update:value', '');
  }

  emitProxy('icon:click');
}
function onAnimationStart(event) {
  if (event.animationName === 'onAutoFillStart') {
    isFocused.value = true;
  } else if (event.animationName === 'onAutoFillEnd') {
    isFocused.value = false;
  }
}

function onFocusIn() {
  emitProxy('focus');
  isFocused.value = true;
}

function onFocusOut(event) {
  emitProxy('blur', event);
  isFocused.value = false;
}

function onInput(event) {
  const target = event.target;
  if (!event || !target) return false;
  if (model.value !== target.value) model.value = target.value;
}
function emitProxy(name, args) {
  emit(name, args);
}
</script>

<style>
</style>