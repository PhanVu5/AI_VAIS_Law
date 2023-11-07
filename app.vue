<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
console.log("123", store.state.count);
</script>
