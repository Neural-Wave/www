<template>
  <div class="flex flex-col items-center gap-10 justify-center max-w-[990px]">
    <span class="text-3xl text-center">Our Sponsors</span>

    <span class="flex flex-col items-center gap-14 justify-center max-w-[990px]">
      <span class="flex flex-col items-center justify-center gap-4 max-w-[990px]">
        <span class="text-center opacity-60 max-w-[520px]">Main Sponsor</span>

        <span class="flex items-center justify-center gap-10 flex-wrap">
          <a v-for="sponsor in sponsors().filter(el => el.type.includes('main'))" :key="sponsor.name" :href="sponsor.url" target="_blank">
            <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[60px]" />
          </a>
        </span>
      </span>

      <span class="flex flex-col items-center gap-4 justify-center max-w-[990px]">
        <span class="text-center opacity-60 max-w-[520px]">Silver Sponsor</span>

        <span class="flex items-center justify-center gap-10 flex-wrap">
          <a v-for="sponsor in sponsors().filter(el => el.type.includes('silver'))" :key="sponsor.name" :href="sponsor.url" target="_blank">
            <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[40px]" />
          </a>
        </span>
      </span>

      <span class="flex flex-col items-center gap-4 justify-center max-w-[990px]">
        <span class="text-center opacity-60 max-w-[520px]">Bronze Sponsors</span>

        <span class="flex items-center justify-center gap-10 flex-wrap">
          <a v-for="sponsor in sponsors().filter(el => el.type.includes('bronze'))" :key="sponsor.name" :href="sponsor.url" target="_blank">
            <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[40px]" />
          </a>
        </span>
      </span>

      <span class="flex flex-col items-center gap-4 justify-center max-w-[990px]">
        <span class="text-center opacity-60 max-w-[520px]">Project Partners</span>

        <span class="flex items-center justify-center gap-10 flex-wrap">
          <a v-for="sponsor in sponsors().filter(el => el.type.includes('project'))" :key="sponsor.name" :href="sponsor.url" target="_blank">
            <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[40px]" />
          </a>
        </span>
      </span>

      <span class="flex flex-col items-center gap-4 justify-center max-w-[990px]">
        <span class="text-center opacity-60 max-w-[520px]">Compute Partner</span>

        <span class="flex items-center justify-center gap-10 flex-wrap">
          <a v-for="sponsor in sponsors().filter(el => el.type.includes('compute'))" :key="sponsor.name" :href="sponsor.url" target="_blank">
            <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[40px]" />
          </a>
        </span>
      </span>

      <span class="flex flex-col items-center gap-4 justify-center max-w-[990px]">
        <span class="text-center opacity-60 max-w-[520px]">Other Partners</span>

        <span class="flex items-center justify-center gap-10 flex-wrap">
          <a v-for="sponsor in sponsors().filter(el => el.type.includes('other'))" :key="sponsor.name" :href="sponsor.url" target="_blank">
            <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[40px]" />
          </a>
        </span>
      </span>
    </span>


<!--    <span class="text-center opacity-60">Our Partners</span>-->

<!--    <div class="flex flex-wrap justify-center items-center gap-10">-->
<!--      <a v-for="sponsor in sponsors()" :key="sponsor.name" :href="sponsor.url" target="_blank">-->
<!--        <img :src="getImage(sponsor.name)" :alt="`${sponsor.name} logo`" class="h-[34px]" />-->
<!--      </a>-->
<!--    </div>-->
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
