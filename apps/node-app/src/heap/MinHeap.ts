export class MinHeap {
  public length: number
  private data: number[]

  constructor() {
    this.length = 0
    this.data = []
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2
  }

  private swap(i: number, j: number): void {
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  insert(value: number): void {
    this.data.push(value)
    this.length++
    this.heapifyUp()
  }

  private heapifyUp(): void {
    let index = this.length - 1
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      if (this.data[parentIndex] <= this.data[index]) break
      this.swap(parentIndex, index)
      index = parentIndex
    }
  }

  delete(): number | null {
    if (this.length === 0) return null
    if (this.length === 1) {
      this.length--
      return this.data.pop()!
    }

    const min = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--
    this.heapifyDown()
    return min
  }

  private heapifyDown(): void {
    let index = 0
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)
      let smallest = index

      if (
        leftChildIndex < this.length &&
        this.data[leftChildIndex] < this.data[smallest]
      ) {
        smallest = leftChildIndex
      }

      if (
        rightChildIndex < this.length &&
        this.data[rightChildIndex] < this.data[smallest]
      ) {
        smallest = rightChildIndex
      }

      if (smallest === index) break
      this.swap(index, smallest)
      index = smallest
    }
  }

  peek(): number | null {
    return this.length === 0 ? null : this.data[0]
  }
}
