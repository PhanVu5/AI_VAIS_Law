<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { useStore } from 'vuex'
// import { login } from './api';
const store = useStore()
console.log(store.state.count)
// const user = login();
// console.log('user',user);
</script>

