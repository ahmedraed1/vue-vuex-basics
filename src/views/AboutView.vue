<template>
    <div>
        <h1>About</h1>
        <div class="counter">{{ counter() }}</div>
        <div class="counter">{{ doubleCounter() }}</div>
    </div>
</template>
<script setup>
import store from '@/store';

const counter = () => store.state.counter;
const doubleCounter = () => store.getters.doubleCounter;
</script>