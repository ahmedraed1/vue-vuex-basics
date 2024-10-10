<template>
  <header>
    <div class="wrapper" style="height: 60px;display: flex; align-items: center; justify-content: center">
      <nav style="display: flex; justify-content: center">
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>  </header>

  <RouterView />
</template>

<script setup>
import { RouterView , RouterLink } from 'vue-router'
</script>

<style scoped>

</style>
