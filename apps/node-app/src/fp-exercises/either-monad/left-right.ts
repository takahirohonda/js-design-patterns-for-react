const Right = (x) => ({
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

const Left = (x) => ({
  map: (f) => Left(f(x)),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
})

export const fromNullable = (x) => (x != null ? Right(x) : Left(null))

export const tryCatch = (f) => {
  try {
    return Right(f())
  } catch (e) {
    Left(e)
  }
}
