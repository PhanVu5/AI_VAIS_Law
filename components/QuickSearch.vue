<template>
  <div class="content_law">
    <span v-html="content"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    typeof: String,
    default: "",
  },
});
const content = props.info.replace(/\n/g, "<br>");
</script>
