<template>
  <main class="flex flex-col items-center px-[50px]">
    <hero-section-component />
    <companies-section-component />
    <join-section-component class="my-[300px]" />
    <lugano-section-component class="mb-[300px]" />
    <team-section-component class="mb-[300px]" />
  </main>
</template>

<script lang="ts">
import CtaComponent from "@/components/CtaComponent.vue";
import HeroSectionComponent from "@/components/sections/HeroSectionComponent.vue";
import CompaniesSectionComponent from "@/components/sections/CompaniesSectionComponent.vue";
import JoinSectionComponent from "@/components/sections/JoinSectionComponent.vue";
import LuganoSectionComponent from "@/components/sections/LuganoSectionComponent.vue";
import TeamSectionComponent from "@/components/sections/TeamSectionComponent.vue";

export default {
  name: 'HomeView',
  components: {
    TeamSectionComponent,
    LuganoSectionComponent,
    JoinSectionComponent,
    CompaniesSectionComponent,
    HeroSectionComponent,
    CtaComponent
  },
}
</script>
