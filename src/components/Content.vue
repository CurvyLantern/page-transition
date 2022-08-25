
<script setup>
  const props = defineProps(['textColor'])
</script>

<template>
    <div>
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, commodi?</p>
    </div>
</template>



<style scoped>
  div{
    color: v-bind(props.textColor);
  }
  h1 {
    font-size: calc(5vw + 30px);
    font-weight: bold;
    white-space: pre;
  }
</style>