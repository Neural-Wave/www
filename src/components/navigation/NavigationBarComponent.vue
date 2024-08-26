<template>
  <nav class="flex flex-col items-center gap-8 p-[50px] sm:flex-row sm:justify-between">
    <img src="../../assets/branding/logo-horizontal.svg" class="w-[210px]" alt="Neural Wave logo"/>

    <div class="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
      <social-component />
      <cta-component href="https://usi.qualtrics.com/jfe/form/SV_bgCFvEjVFUvXq4u" variant="cta">Register Now!</cta-component>
    </div>
  </nav>
</template>

<script lang="ts">
import CtaComponent from "@/components/CtaComponent.vue";
import SocialComponent from "@/components/navigation/SocialComponent.vue";

export default {
  name: 'NavigationBarComponent',
  components: {
    SocialComponent,
    CtaComponent
  }
}
</script>
