
type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private first?: Node<T>;
    private last?: Node<T>;

    constructor() {
        this.first = this.last = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.last) {
            this.last = this.first = { value: item } as Node<T>;
            return;
        }
        this.last.next = node;
        this.last = node;

    }
    deque(): T | undefined {
        if (!this.first) {
            return undefined;
        }

        this.length--;
        const head = this.first;
        this.first = this.first.next;
        // free
        head.next = undefined;
        //last?
        if (this.length === 0) {
            this.last = undefined;
        }
        return head.value;
    }
    peek(): T | undefined {
        return this.first?.value;
    }
}