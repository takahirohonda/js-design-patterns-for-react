const Task = (fork) => ({
  fork,
  ap: (other) =>
    Task((rej, res) => fork(rej, (f) => other.fork(rej, (x) => res(f(x))))),
  map: (f) => Task((rej, res) => fork(rej, (x) => res(f(x)))),
  chain: (f) => Task((rej, res) => fork(rej, (x) => f(x).fork(rej, res))),
  concat: (other) =>
    Task((rej, res) =>
      fork(rej, (x) =>
        other.fork(rej, (y) => {
          console.log('X', x, 'Y', y)
          res(x.concat(y))
        })
      )
    ),
  fold: (f, g) =>
    Task((rej, res) =>
      fork(
        (x) => f(x).fork(rej, res),
        (x) => g(x).fork(rej, res)
      )
    ),
})

Task.of = (x) => Task((rej, res) => res(x))
Task.rejected = (x) => Task((rej, res) => rej(x))
Task.fromPromised =
  (fn) =>
  (...args) =>
    Task((rej, res) =>
      fn(...args)
        .then(res)
        .catch(rej)
    )

const TaskT = (M) => {
  const Task = (fork) => ({
    fork,
    map: (f) => Task((rej, res) => fork(rej, (mx) => res(mx.map(f)))),
    chain: (f) =>
      Task((rej, res) =>
        fork(rej, (mx) => mx.chain((x) => f(x).fork(rej, res)))
      ),
  })
  Task.lift = (x) => Task((rej, res) => res(x))
  Task.of = (x) => Task((rej, res) => res(M.of(x)))
  Task.rejected = (x) => Task((rej, res) => rej(x))

  return Task
}

export { Task, TaskT }
