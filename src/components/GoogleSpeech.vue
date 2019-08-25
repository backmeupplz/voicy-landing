<template lang="pug">
  v-form(ref='form')
    v-card(flat)
      v-card-text
        span(v-html='$t("recognition.gs.headline")')
        v-file-input(v-model='key'
        prepend-icon='vpn_key'
        :label='$t("recognition.gs.key")'
        persistent-hint
        :hint='$t("recognition.keyHint")'
        :loading='loading'
        :disabled='loading'
        :rules='keyRules')
        v-file-input(:disabled='!key || loading'
        show-size
        :label='$t("recognition.file")'
        persistent-hint
        v-model='file'
        :hint='$t("recognition.fileHint")'
        :loading='loading'
        :rules='rules')
        v-overflow-btn(:items='languages'
        :label='$t("language")'
        editable
        v-model='language')
      v-card-actions
        v-progress-linear(v-if='loading'
        :value='progress'
        height='25'
        stream
        color='blue lighten-3'
        :indeterminate='recognizing').mx-3 {{status}}
        v-spacer
        v-btn(:disabled='!key || !file || loading || !valid'
        large
        color='primary'
        :loading='loading'
        @click='recognize') {{$t('recognition.recognize')}}
    div(v-if='result')
      v-divider
      v-card(flat)
        v-card-text
          .title {{$t('result')}}
          blockquote.blockquote {{result}}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import * as api from "../utils/api";
import * as store from "../plugins/store";
import { i18n } from "../plugins/i18n";
import { googleLanguages } from "../assets/languages";

@Component
export default class Wit extends Vue {
  key: File | null = null;
  file: File | null = null;

  loading = false;
  recognizing = false;
  progress = 0;

  valid = false;

  rules = [
    (value: any) => !value || value.size < 200000000 || i18n.t("errors.size")
  ];

  keyRules = [
    (value: any) => !value || value.size < 1000000 || i18n.t("errors.keySize")
  ];

  status = "";

  result = "";

  languages = Object.keys(googleLanguages).map(key => ({
    text: key,
    value: (googleLanguages as any)[key]
  }));

  language = null;

  @Watch("key")
  keyChanged() {
    this.valid = (this.$refs.form as any).validate() && !!this.language;
  }
  @Watch("file")
  fileChanged() {
    this.valid = (this.$refs.form as any).validate() && !!this.language;
  }
  @Watch("language")
  languageCHanged() {
    this.valid = (this.$refs.form as any).validate() && !!this.language;
  }

  async recognize() {
    if (!this.key || !this.file || !this.valid || !this.language) {
      return;
    }
    this.loading = true;
    this.progress = 0;
    this.status = i18n.t("uploading") as string;
    try {
      const response = await api.recognize(
        "google",
        this.key,
        this.file!,
        progress => {
          this.progress = progress;
          this.status = `${i18n.t("uploading")} (${progress}%)`;
          if (this.progress === 100) {
            this.recognizing = true;
            this.status = i18n.t("recognizing") as string;
          }
        },
        this.language!
      );
      this.result = response.data.text || i18n.t("noText");
    } catch (err) {
      store.setSnackbar({
        message: err.message,
        active: true,
        color: "error"
      });
    } finally {
      this.loading = false;
      this.recognizing = false;
    }
  }
}
</script>