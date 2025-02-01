export const renderHome = () => {
  const root = document.getElementById('root')
  const node = document.createElement('h1')
  const textNode = document.createTextNode('Home')
  node.appendChild(textNode)
  root?.appendChild(textNode)
}
