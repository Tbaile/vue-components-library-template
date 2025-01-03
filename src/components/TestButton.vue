<script lang="ts" setup>
const { loading = false } = defineProps<{
  /**
   * Whether the button is in a loading state, disabling user interaction.
   */
  loading?: boolean
}>()
</script>

<template>
  <button
    :disabled="loading"
    class="bg-primary hover:bg-primary-hover ring-primary-focus rounded-md px-3 py-2 text-sm text-white shadow-sm ring-offset-2 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-[#030712]"
  >
    <slot />
  </button>
</template>
