<script lang="ts" setup>
const { loading = false } = defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <button
    :disabled="loading"
    class="disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>
