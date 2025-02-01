export const router = async (path: string) => {
  switch (path) {
    case '/home':
      import('./pages/home').then((module) => {
        module.renderHome()
      })
      break
    case '/about':
      import('./pages/about').then((module) => {
        module.renderAbout()
      })
      break
    case '/web-component-example': {
      await import('./app/app.element')
      const root = document.getElementById('root')
      const node = document.createElement('app-root')
      root?.appendChild(node)
      break
    }
    default:
      import('./pages/home').then((module) => {
        module.renderHome()
      })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded...')
  console.log('checking pathname: ')
  console.log(window.location.pathname)
  router(window.location.pathname)
})
