<template>
  <div class="flex flex-col justify-center items-center gap-9 py-20 sm:h-[calc(80vh-145px)]">
    <div class="flex flex-wrap justify-center gap-6">
      <img src="../../assets/pill/pill-location.svg" class="h-[35px]" alt="Lugano is the location of the hackathon" />
      <img src="../../assets/pill/pill-date.svg" class="h-[35px]" alt="The hackathon lasts from the 25th to the 27th of October" />
    </div>

    <span class="text-5xl font-[500] text-center">Where Innovation Meets AI</span>

    <span class="text-center opacity-60 max-w-[546px]">
      Embark on an exhilarating hackathon with global innovators. Leverage AI techniques, tackle real challenges,
      and shape the future
    </span>

    <div class="flex flex-col items-center gap-4">
      <span class="text-center opacity-60">What are you waiting for? <br /> The registration will close in</span>

      <div class="flex gap-2">
        <div class="flex flex-col items-center">
          <span class="text-2xl font-mono">{{timer.days}}</span>
          <span class="text-xs text-gray-400">Days</span>
        </div>

        <div class="text-2xl font-mono">:</div>

        <div class="flex flex-col items-center">
          <span class="text-2xl font-mono">{{timer.hours}}</span>
          <span class="text-xs text-gray-400">Hours</span>
        </div>

        <div class="text-2xl font-mono">:</div>

        <div class="flex flex-col items-center">
          <span class="text-2xl font-mono">{{timer.minutes}}</span>
          <span class="text-xs text-gray-400">Minutes</span>
        </div>

        <div class="text-2xl font-mono">:</div>

        <div class="flex flex-col items-center">
          <span class="text-2xl font-mono">{{timer.seconds}}</span>
          <span class="text-xs text-gray-400">Seconds</span>
        </div>
      </div>

      <cta-component href="https://usi.qualtrics.com/jfe/form/SV_bgCFvEjVFUvXq4u" variant="cta">Register Now!</cta-component>
    </div>
  </div>
</template>

<script lang="ts">
import { useTimer, UseTimer } from "vue-timer-hook";
import CtaComponent from "@/components/CtaComponent.vue";

export default {
  name: "HeroSectionComponent",
  components: {
    CtaComponent
  },
  data() {
    return {
      timer: {} as UseTimer,
    }
  },
  mounted() {
    const deadline = new Date('9 Oct 2024 23:59:59').toLocaleString('en-En', {timeZone: "Europe/Zurich"})
    this.timer = useTimer(new Date(deadline).getTime(), true)
  }
}
</script>
