<template>
  <div class="h-full w-full bg-nw-dark-blue">
    <div class="absolute w-full h-[120vh] sm:h-full">
      <img class="absolute block right-0 top-0 w-[600px] sm:w-[1000px]" src="./assets/background/green.svg" alt="green background" />
      <img class="absolute block left-0 bottom-0 w-[600px] sm:w-[1000px] sm:bottom-[-500px]" src="./assets/background/violet.svg" alt="violet background" />
    </div>

    <navigation-bar-component />
    <separator class="mx-[50px] w-auto bg-nw-border " />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Separator } from "@/components/ui/separator";
import NavigationBarComponent from "@/components/navigation/NavigationBarComponent.vue";

export default {
  name: 'App',
  components: {
    Separator,
    NavigationBarComponent
  },
}
</script>
