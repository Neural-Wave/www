<template>
  <div class="flex flex-col items-center gap-10 justify-center max-w-[990px]">
    <span class="text-3xl text-center">Our Sponsors</span>

    <span class="flex flex-col items-center gap-20 justify-center max-w-[990px]">
      <span
          v-for="category in categories()"
          :key="category.valueOf()"
          class="flex flex-col items-center justify-center gap-5"
          :class="category === 'project' ? 'max-w-[500px]' : 'max-w-[990px]'"
      >
        <span class="text-center opacity-60 max-w-[520px]">
          {{ category[0].toUpperCase()+category.slice(1) }}
          {{ ['main', 'silver', 'bronze'].includes(category) ? 'Sponsors' : 'Partners' }}
        </span>

        <span class="flex items-center justify-center gap-10 flex-wrap" :class="category">
          <a v-for="sponsor in sponsors().filter(el => el.type.includes(category))" :key="sponsor.name" :href="sponsor.url" target="_blank">
            <img
                :src="getImage(sponsor.name)"
                :alt="`${sponsor.name} logo`"
                :class="sponsor.name === 'usi' ? 'h-[70px]' : ['main', 'silver'].includes(category) ?'h-[45px]' : 'h-[30px]'"
            />
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
    ...mapState(useSponsorsStore, ['sponsors', 'categories'])
  }
}
</script>
