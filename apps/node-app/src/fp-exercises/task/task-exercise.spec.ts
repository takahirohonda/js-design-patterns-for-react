import { Task } from './task'

const posts = { 1: { title: 'First' }, 2: { title: 'Second' } }

const comments = {
  First: [{ id: 1, body: 'Brilliant!' }],
  Second: [{ id: 2, body: 'Unforgivable' }],
}

const getPost = (id) =>
  Task((rej, res) =>
    setTimeout(() => (posts[id] ? res(posts[id]) : rej('not found')), 200)
  )

const getComments = (post) =>
  Task((rej, res) => setTimeout(() => res(comments[post.title]), 200))

const taskToPromise = (task) =>
  new Promise((resolve, reject) => task.fork(reject, resolve))

describe('Task exercise - Refactor each example using Task', () => {
  describe(`Ex 1: Use the result of getPost() and upperCase the title. 
    Posts and comments are defined above and look like {title: String} and {id: Int, body: String} respectively.`, () => {
    it('before refactor', () => {
      const postTitle = (id) => getPost(id)

      postTitle(1).fork(
        (err) => err,
        (post) => {
          expect(post.title).toBe('First')
        }
      )
    })
    it('after refactor', () => {
      const getPostTitle = (id) =>
        getPost(id).map((post) => post.title.toUpperCase())

      getPostTitle(1).fork(
        (err) => {
          return null
        },
        (result) => {
          expect(result).toBe('FIRST')
        }
      )
    })
    it('refactor with Promise helper)', async () => {
      const postTitle = (id) => getPost(id)

      const post = await taskToPromise(postTitle(1))

      expect((post as any).title).toBe('First')
    })
  })

  describe(`Ex 2: Get comments for the post and assign them to the post`, () => {
    const commentsForPost = (id) =>
      getPost(id).chain((post) =>
        getComments(post).map((comments) => ({
          ...post,
          comments,
        }))
      )

    it('returns post with comments', async () => {
      const result = await taskToPromise(commentsForPost(2))

      expect((result as any).title).toBe('Second')
      expect((result as any).comments).toEqual(comments['Second'])
    })
  })

  describe(`Ex 3: Wrap location.href in a Task to make it pure`, () => {
    const getHref = Task.of(globalThis.location?.href || 'about:blank')

    it('gets href as task', async () => {
      const href = await taskToPromise(getHref)

      expect(typeof href).toBe('string')
      expect(href).toMatch(/http|about:blank/)
    })
  })
})
