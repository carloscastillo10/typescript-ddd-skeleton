class InvalidArgumentError extends Error {
  readonly name: string

  constructor(message: string) {
    super(message)
    this.name = 'InvalidArgumentError'
  }
}

export { InvalidArgumentError }
