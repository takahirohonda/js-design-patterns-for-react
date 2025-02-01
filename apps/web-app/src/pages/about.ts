export const renderAbout = () => {
  const root = document.getElementById('root')
  const node = document.createElement('h1')
  const textNode = document.createTextNode('About')
  node.appendChild(textNode)
  root?.appendChild(textNode)
}
