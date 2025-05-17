# Examples

```js
const { Task } = require('../types')

const testUser = { id: 2, name: 'user1' }

const Db = {
  find: (_id) => Task((rej, res) => res(testUser)),
}

Db.find(3).fork(console.log, console.log)
```

Refactor this by using Task...

```js
const { Task } = require('../types')
const fs = require('fs')

const app = () =>
  fs.readFile('config.json', 'utf-8', (err, contents) => {
    console.log(err, contents)
    if (err) throw err

    const newContents = contents.replace(/3/g, '6')

    fs.writeFile('config1.json', newContents, (err, _) => {
      if (err) throw err
      console.log('success!')
    })
  })

app()
```

Answers

```js
// Convert Promises to Tasks
const readFile = Task.fromPromised(fs.readFile)
const writeFile = Task.fromPromised(fs.writeFile)

const app = () => {
  const task = readFile('config.json', 'utf-8') // Task<String>
    .map((contents) => contents.replace(/3/g, '6')) // Task<String>
    .chain((newContents) => writeFile('config1.json', newContents)) // Task<void>

  task.fork(
    (err) => {
      console.error('Error:', err)
    },
    () => {
      console.log('success!')
    }
  )
}

app()
```
