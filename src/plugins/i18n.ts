// Dependencies
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from '../assets/localization'
import * as store from './store'

Vue.use(VueI18n)

function getNavigatorLanguage() {
  if (store.language()) {
    return store.language()
  } else {
    const language = (navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : (navigator as any).userLanguage ||
        navigator.language ||
        (navigator as any).browserLanguage ||
        'en'
    ).substr(0, 2)
    const allowedLanguages = ['ar', 'en', 'ru']
    if (allowedLanguages.indexOf(language) > -1) {
      return language
    } else {
      return 'en'
    }
  }
}

export const i18n = new VueI18n({
  locale: getNavigatorLanguage(),
  messages,
})
