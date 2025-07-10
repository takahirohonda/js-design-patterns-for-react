import i18next from 'i18next'

i18next
  .init({
    debug: true,
    lng: 'en',
    resources: {
      en: {
        translation: {
          key: 'Hello, World!',
        },
      },
      fr: {
        translation: {
          key: 'Bonjour le monde!',
        },
      },
      de: {
        translation: {
          key: 'Hallo Welt!',
        },
      },
      'de-CH': {
        //when the key is not found in the de-CH language, it will fallback to the de language
        translation: {},
      },
    },
  })
  .then(() => {
    console.log(i18next.t('key')) // Outputs: Hello, World!
    i18next.changeLanguage('fr').then(() => {
      console.log(i18next.t('key')) // Outputs: Bonjour le monde!
    })
  })

const ret = i18next.t('key', { lng: 'fr' })
console.log(ret) // Outputs: Bonjour le monde!
