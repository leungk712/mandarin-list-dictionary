<template>
  <v-app>
    <v-app-bar
      app
      color="#8bbf9f"
      dark
    >
      <h4>Mandarin List Dictionary</h4>
    </v-app-bar>

    <v-main>
      <Dictionary />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Dictionary from "@/components/Dictionary.vue";

@Component({
  name: "App",
  components: { Dictionary }
})
export default class App extends Vue {}
</script>
