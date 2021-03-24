<template>
  <div id="app">
    <Dictionary />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dictionary from "@/components/Dictionary.vue";

@Component({
  components: {
    Dictionary,
  },
})
export default class App extends Vue {}
</script>
