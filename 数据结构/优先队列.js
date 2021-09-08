//默认大根堆
const defaultCmp = (x, y) => x > y

const swap = (num, a, b) => { [num[a], num[b]] = [num[b], num[a]] }
class Heap {
  constructor(comp = defaultCmp) {
    this.container = []
    this.comp = comp;
  }
  insert(x) {
    const { container, comp } = this
    container.push(x)
    let index = this.size() - 1;
    while (index) {
      let parent = ~~((index - 1) / 2)
      if (!comp(container[index], container[parent])) {
        return
      }
      swap(container, index, parent)
      index = parent
    }
  }
  pop() {
    const { container, comp } = this
    if (!container.length) return null
    swap(container, 0, container.length - 1)
    const res = container.pop()
    let index = 0
    let son = 2 * index + 1
    while (son < container.length) {
      let largest = son + 1 < container.length && container[son] > container[son + 1] ? son : son + 1
      largest = container[largest] > container[index] ? largest : index
      if (largest == index) { break }
      swap(container, largest, index)
      index = son
      son = index * 2 + 1
    }

    return res
  }
  size() {
    return this.container.length;
  }
}

const Myheap = new Heap()
Myheap.insert(5)
Myheap.insert(2)
Myheap.insert(1)
Myheap.insert(6)
Myheap.insert(9)
console.log(Myheap.container);
console.log(Myheap.pop());
console.log(Myheap.container);