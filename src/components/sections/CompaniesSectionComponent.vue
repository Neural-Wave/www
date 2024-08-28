<template>
  <div class="flex flex-col items-center justify-center gap-10 max-w-[990px]">
    <span class="text-center opacity-60">Our Partners</span>

    <div class="flex flex-wrap justify-center items-center gap-10">
      <a v-for="sponsor in sponsors()" :key="sponsor.name" :href="sponsor.url" target="_blank">
        <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[34px]" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {mapState} from "pinia";
import {useSponsorsStore} from "@/store/sponsors.ts";

export default {
  name: 'CompaniesSectionComponent',
  methods: {
    getImage(name: string) {
      return new URL(`../../assets/sponsors/${name}.svg`, import.meta.url).href
    },
    ...mapState(useSponsorsStore, ['sponsors'])
  }
}
</script>
