<template lang="pug">
  v-card(flat)
    v-card-text
      span(v-html='$t("recognition.gs.headline")')
      v-file-input(v-model='key'
      prepend-icon='vpn_key'
      :label='$t("recognition.gs.key")'
      persistent-hint
      :hint='$t("recognition.keyHint")'
      :loading='loading'
      :disabled='loading')
      v-file-input(:disabled='!key || loading'
      show-size
      :label='$t("recognition.file")'
      persistent-hint
      v-model='file'
      :hint='$t("recognition.fileHint")'
      :loading='loading')
    v-card-actions
      v-spacer
      v-btn(:disabled='!key || !file || loading'
      large
      color='primary'
      :loading='loading'
      @click='recognize') {{$t('recognition.recognize')}}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Wit extends Vue {
  key = null;
  file = null;

  loading = false;

  recognize() {
    this.loading = true;
    console.log("recognized");
    this.loading = false;
  }
}
</script>