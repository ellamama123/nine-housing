<template>
  <div class="container grid grid-cols-3 gap-x-16 mb-40">
    <div
      class="block h-[230px] w-[350px] rounded-xl bg-black-500 p-6"
      v-for="(data, index) in statistics"
      :key="index"
    >
      <p class="mb-[50px] text-[64px] font-bold leading-[77px] text-yellow-500">
        +{{ data.number }}
      </p>
      <p class="font-bold text-3xl text-white">
        {{ data.title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const statistics = [
  { title: 'Apartments', number: 2000 },
  { title: 'Apartments Viewed', number: 2000 },
  { title: 'Visited Customers', number: 2000 },
]
</script>
