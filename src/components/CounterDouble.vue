<template>
    <div class="counter">{{ counter() + ' * ' + '2' + ' = ' + doubleCounter() }}</div>
</template>
<script setup>
import store from '@/store';

const counter = () => store.state.counter;
const doubleCounter = () => store.getters.doubleCounter;
</script>