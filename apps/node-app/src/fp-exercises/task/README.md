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

## exercise

```js
// SETUP
// =========================
const posts = { 1: { title: 'First' }, 2: { title: 'Second' } }

const comments = {
  First: [{ id: 1, body: 'Brilliant!' }],
  Second: [{ id: 2, body: 'Unforgivable' }],
}

const getPost = (id) =>
  new Task((rej, res) =>
    setTimeout(() => (posts[id] ? res(posts[id]) : rej('not found')), 200)
  )

const getComments = (post) =>
  new Task((rej, res) => setTimeout(() => res(comments[post.title]), 200))

// Exercise: Task
// Goal: Refactor each example using Task
// Bonus points: no curly braces

// Ex1: Use the result of getPost() and upperCase the title. Posts and comments are defined above and look like {title: String} and {id: Int, body: String} respectively.
// =========================
const postTitle = (
  id // uppercase the title of the result of getPost()
) => getPost(id)

QUnit.test('Ex1: postTitle', (assert) => {
  const done = assert.async()
  postTitle(1).fork(console.error, (t) => {
    assert.deepEqual(t, 'FIRST')
    done()
  })
})

// Ex2: pass in the post to getComments(), defined above, then assign the returned comments to the post
// =========================
const commentsForPost = (id) => getPost(id)

QUnit.test('Ex2: commentsForPost', (assert) => {
  const done = assert.async()
  commentsForPost(2).fork(console.error, (t) => {
    assert.deepEqual(t.title, 'Second')
    assert.deepEqual(t.comments, comments['Second'])
    done()
  })
})

// Ex3: Wrap location.href in a Task to make it "pure"
// =========================
const getHref = location.href // wrap me in Task

QUnit.test('Ex3: getHref', (assert) => {
  const done = assert.async()
  getHref.fork(console.error, (t) => {
    assert.equal(true, !!t.match('cdpn.io'))
    done()
  })
})
```
