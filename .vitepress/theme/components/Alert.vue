<script setup lang="ts">

const props = defineProps<{
  type: 'success' | 'info' | 'warning' | 'error'
}>()

</script>

<template>
  <div class="Alert" :class="props.type">
    <slot></slot>
  </div>
</template>

<style scoped>
.Alert {
  box-sizing: border-box;
  border-radius: 0.3em;
  padding: 0.75em;
  margin: 16px 0;
}

.Alert > .emoji {
  font-size: 1.25em;
}

/* light mode */
.Alert.success {
  background-color: #e5f0e5;
  border: 1px solid #b7e1a1;
  color: #2c662d;
}
.Alert.info {
  background-color: #f0f4f9;
  border: 1px solid #a1c0e1;
  color: #2c4d66;
}
.Alert.warning {
  background-color: #fff8e1;
  border: 1px solid #e1d888;
  color: #665c2c;
}
.Alert.error {
  background-color: #f9ebed;
  border: 1px solid #e1a1b7;
  color: #662d4d;
}

/* dark mode */
.dark .Alert.success {
  background-color: #2c662d;
  border: 1px solid #b7e1a1;
  color: #f0f9eb;
}

.dark .Alert.info {
  background-color: #2c4d66;
  border: 1px solid #a1c0e1;
  color: #f0f4f9;
}

.dark .Alert.warning {
  background-color: #665c2c;
  border: 1px solid #e1d888;
  color: #fff8e1;
}

.dark .Alert.error {
  background-color: #662d4d;
  border: 1px solid #e1a1b7;
  color: #f9ebed;
}


</style>


