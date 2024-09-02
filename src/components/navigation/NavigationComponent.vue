<template>
  <nav class="flex py-2 px-6 gap-8 rounded-full border border-nw-border bg-[#160D2F] bg-opacity-20">
    <router-link to="/" class="hover:opacity-60">Home</router-link>
    <router-link to="/faq" class="hover:opacity-60">FAQs</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent'
}
</script>
