<template>
  <div class="h-full w-full">
    <background-top-component v-if="$route.name === 'home'" />
    <navigation-bar-component />

    <router-view />

    <footer-bar-component />
    <background-bottom-component />
  </div>
</template>

<script lang="ts">
import { Separator } from "@/components/ui/separator";
import NavigationBarComponent from "@/components/navigation/NavigationBarComponent.vue";
import BackgroundTopComponent from "@/components/background/BackgroundTopComponent.vue";
import BackgroundBottomComponent from "@/components/background/BackgroundBottomComponent.vue";
import FooterBarComponent from "@/components/navigation/FooterBarComponent.vue";

export default {
  name: 'App',
  components: {
    FooterBarComponent,
    BackgroundBottomComponent,
    BackgroundTopComponent,
    Separator,
    NavigationBarComponent
  },
}
</script>
