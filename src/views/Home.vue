<template lang="pug">
  v-container.pa-4
    v-row(align='center')
      v-col.text-center
        .body-1(v-html='$t("headline")')
    v-row(align='center')
      v-col.text-center
        v-btn(large
        color='primary'
        target='_blank'
        href='https://t.me/voicybot') {{$t('add')}}
    Recognition
    .caption.text-center(v-html='$t("footer")')
    .caption.text-center(v-html='$t("author")')
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Recognition from "../components/Recognition.vue";

@Component({
  components: {
    Recognition
  }
})
export default class Home extends Vue {}
</script>
