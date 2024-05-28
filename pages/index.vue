<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get () {
    return colorMode.value === 'dark';
  },
  set () {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
  }
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold underline">トップページ</h1>
    <hr />  
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      @click="isDark = !isDark"
      variant="ghost"
      aria-label="Theme"
    />
  </div>
</template>

