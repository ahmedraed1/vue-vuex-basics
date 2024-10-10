<template>
  <main>
   <div class="counter" :style="{'color': color}">{{ counter() }}</div>
   <div class="buttons">
    <button class="button" @click="increment">+</button>
    <button class="button" @click="decrement">-</button>
   </div>
   
   <CounterDouble />
   <div style="display: flex; flex-direction: row; gap: 10px; align-items: center; justify-content: center">
    <span :style="{'display': 'block'}">Color: {{ color }} </span>
    <span :style="{'display': 'block' , 'width': '15px', 'height': '15px', 'background-color': color}"></span> </div>
   <input type="text" name="color" v-model="color">
  </main>
</template>

<script setup>
import CounterDouble from '@/components/CounterDouble.vue';
import { computed } from 'vue'

import store from '@/store';

const counter = () => store.state.counter;
const increment = () => {
  store.dispatch('increment')
}
const decrement = () => {
  store.commit('decrement')
}


const color = computed({
  get() {
    return store.state.color
  },
  set(value) {
    store.commit('setColor', value)
  }
})

// const counter = ref(0)
// const increment = () => {
//   counter.value++
// }
// const decrement = () => {
//   counter.value--
// }
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.counter {
  font-size: 60px;
  font-weight: bold;
}
.buttons {
  display: flex;
  gap : 5px;
}
.button {
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 20px;
}
</style>
