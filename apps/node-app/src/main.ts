import express from 'express'
import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import { initReactI18next } from 'react-i18next'

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          hello: 'Hello',
        },
      },
      es: {
        translation: {
          hello: 'Hola',
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })

const host = process.env.HOST ?? 'localhost'
const port = process.env.PORT ? Number(process.env.PORT) : 3000

const app = express()

app.get('/', (req, res) => {
  res.send({ message: i18next.t('hello') })
})

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`)
})
