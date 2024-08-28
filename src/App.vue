<template>
  <div class="h-full w-full">
    <background-top-component />

    <navigation-bar-component />
    <separator class="mx-[50px] w-auto bg-nw-border " />
    <router-view />

    <background-bottom-component />
  </div>
</template>

<script lang="ts">
import { Separator } from "@/components/ui/separator";
import NavigationBarComponent from "@/components/navigation/NavigationBarComponent.vue";
import BackgroundTopComponent from "@/components/background/BackgroundTopComponent.vue";
import BackgroundBottomComponent from "@/components/background/BackgroundBottomComponent.vue";

export default {
  name: 'App',
  components: {
    BackgroundBottomComponent,
    BackgroundTopComponent,
    Separator,
    NavigationBarComponent
  },
}
</script>
