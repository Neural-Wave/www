<template>
  <div class="flex flex-col">
    <nav class="flex flex-col items-center gap-8 p-[50px] min-[848px]:flex-row min-[848px]:justify-between bg-transparent">
      <img src="../../assets/branding/logo-horizontal.svg" class="w-[210px]" alt="Neural Wave logo"/>

      <navigation-component />

      <div class="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <social-component />

        <cta-component class="hidden min-[848px]:block" href="https://usi.qualtrics.com/jfe/form/SV_bgCFvEjVFUvXq4u">
          Register Now!
        </cta-component>
      </div>
    </nav>

    <separator class="mx-[50px] bg-nw-border h-[1px]" />
  </div>
</template>

<script lang="ts">
import CtaComponent from "@/components/CtaComponent.vue";
import SocialComponent from "@/components/navigation/SocialComponent.vue";
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";

export default {
  name: 'NavigationBarComponent',
  components: {
    NavigationComponent,
    SocialComponent,
    CtaComponent
  }
}
</script>
