<template>
  <button
    type="button"
    class="fixed bottom-10 right-10 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500"
    @click="scrollTop"
  >
    <img src="/icons/up-arrow.svg" alt="up arrow icon" />
  </button>
</template>

<script lang="ts" setup>
const scrollTop = () => {
  window.scrollTo(0, 0)
}
</script>
