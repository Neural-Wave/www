<template>
  <div class="flex flex-col items-center justify-center gap-20">
    <span class="text-3xl text-center">The Team</span>

    <div class="flex flex-wrap justify-center gap-16 max-w-[784px]">
      <div v-for="member in teamMembers()" :key="member.name" class="flex flex-col items-center text-center w-[148px] gap-4">
        <img
            :src="getProPic(member.image)"
            :alt="`${member.name} profile picture`"
            class="border border-nw-border rounded-[8px] h-[100px] w-[100px]"
        />

        <div class="flex flex-col gap-2">
          <span class="font-[300] text-[14px]">{{ member.name }}</span>

          <div class="flex gap-2">
            <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
              <img src="../../assets/icons/linkedin-line.svg" class="w-5 h-5" alt="twitter logo icon"/>
            </a>

            <a v-if="member.github" :href="member.github" target="_blank">
              <img src="../../assets/icons/github-line.svg" class="w-5 h-5" alt="twitter logo icon"/>
            </a>

            <a v-if="member.website" :href="member.website" target="_blank">
              <img src="../../assets/icons/globe-line.svg" class="w-5 h-5" alt="twitter logo icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {mapState} from "pinia";
import {useTeamStore} from "@/store/team.ts";

export default {
  name: 'TeamSectionComponent',
  methods: {
    getProPic(name: string) {
      return new URL(`../../assets/team/${name}.jpg`, import.meta.url).href
    },
    ...mapState(useTeamStore, ['teamMembers'])
  }
}
</script>
