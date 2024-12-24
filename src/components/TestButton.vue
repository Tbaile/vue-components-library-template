<script lang="ts" setup>
const { loading = false } = defineProps<{
  /**
   * Whether the button is in a loading state, disabling user interaction.
   */
  loading?: boolean
}>()
</script>

<template>
  <button :disabled="loading" class="disabled:cursor-not-allowed">
    <slot />
  </button>
</template>
