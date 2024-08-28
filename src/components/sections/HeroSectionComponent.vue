<template>
  <div class="flex flex-col justify-center items-center gap-9 h-[calc(80vh-167.3px)] sm:h-[calc(80vh-145px)]">
    <div class="flex flex-wrap justify-center gap-6">
      <img src="../../assets/pill/pill-location.svg" class="h-[35px]" alt="Lugano is the location of the hackathon" />
      <img src="../../assets/pill/pill-date.svg" class="h-[35px]" alt="The hackathon lasts from the 25th to the 27th of October" />
    </div>

    <span class="text-5xl font-[500] text-center">Where Innovation Meets AI</span>

    <span class="text-center opacity-60 max-w-[546px]">
      Embark on an exhilarating hackathon with global innovators. Leverage AI techniques, tackle real challenges,
      and shape the future
    </span>

    <div class="flex flex-col items-center gap-2">
      <span class="text-center opacity-60">What are you waiting for?</span>
      <cta-component href="https://usi.qualtrics.com/jfe/form/SV_bgCFvEjVFUvXq4u" variant="cta">Register Now!</cta-component>
    </div>
  </div>
</template>

<script lang="ts">
import CtaComponent from "@/components/CtaComponent.vue";

export default {
  name: "HeroSectionComponent",
  components: {
    CtaComponent
  }
}
</script>
