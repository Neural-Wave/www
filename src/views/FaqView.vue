<template>
  <div class="flex flex-col gap-10 w-full px-[50px] sm:px-[100px] py-[100px]">
    <div v-for="category in categories" :key="category.valueOf()" class="flex flex-col gap-3">
      <span class="text-2xl font-bold">{{ category }}</span>

      <accordion type="single" collapsible>
        <accordion-item v-for="faq in faqs().filter((el) => el.category === category)" :key="faq.question" :value="faq.question">
          <accordion-trigger class="text-left">{{ faq.question }}</accordion-trigger>
          <accordion-content>{{ faq.answer }}</accordion-content>
        </accordion-item>
      </accordion>
    </div>
  </div>
</template>

<script lang="ts">
import {mapState} from "pinia";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Faq, useFaqsStore} from "@/store/faqs.ts";

export default {
  name: 'FaqView',
  components: {AccordionContent, AccordionTrigger, AccordionItem, Accordion},
  data() {
    return {
      categories: [] as Array<string>
    }
  },
  methods: {
    ...mapState(useFaqsStore, ['faqs'])
  },
  mounted() {
    this.categories = [...new Set(this.faqs().reduce(
        (previousValue: Array<string>, currentValue: Faq) => [...previousValue, currentValue.category], []
    ))]
  }
}
</script>
