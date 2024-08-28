<template>
  <nav class="flex flex-col justify-center p-[50px] gap-10">
    <div class="flex justify-between">
      <img src="../../assets/branding/logo-white.svg" alt="white variant of the Neural Wave logo" class="h-[30px]">
      <social-component />
    </div>

    <separator class="mx-[50px] bg-nw-border h-[1px]" />

    <span class="text-center opacity-60 font-[200] text-[14px]">&copy;2024 Neural Wave</span>
  </nav>
</template>

<script lang="ts">
import SocialComponent from "@/components/navigation/SocialComponent.vue";

export default {
  name: "FooterBarComponent",
  components: {SocialComponent}
}
</script>
