<template lang="pug">
  div
    v-row
      v-col
        p(v-html='$t("recognition.headline")')
    v-row
      v-col
        v-tabs(v-model='currentTab'
        centered
        grow)
          v-tab Wit
          v-tab Google Speech
          v-tab-item(:value='0')
            Wit
          v-tab-item(:value='1')
            GoogleSpeech
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Wit from "./Wit.vue";
import GoogleSpeech from "./GoogleSpeech.vue";

@Component({
  components: {
    Wit,
    GoogleSpeech
  }
})
export default class Recognition extends Vue {
  currentTab = 1;
}
</script>