export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data.push(value);
        this.length++;
        this.heapifyUp(this.length - 1);
    }
    delete(): number {
        if (this.length === 0) {
            throw new Error('Heap is empty');
        }
        const value = this.data[0];
        this.data[0] = this.data[this.length - 1];
        this.data.pop();
        this.length--;
        this.heapifyDown(0);
        return value;
    }

    private heapifyDown(idx: number): void {
        const left = this.leftChild(idx);
        const right = this.rightChild(idx);
        let smallest = idx;
        if (left < this.length && this.data[left] < this.data[smallest]) {
            smallest = left;
        }
        if (right < this.length && this.data[right] < this.data[smallest]) {
            smallest = right;
        }
        if (smallest !== idx) {
            this.swap(smallest, idx);
            this.heapifyDown(smallest);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        const parentIdx = this.parent(idx);
        if (this.data[parentIdx] > this.data[idx]) {
            this.swap(parentIdx, idx);
            this.heapifyUp(parentIdx);
        }
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number): number {
        return 2 * index + 1;
    }

    private rightChild(index: number): number {
        return 2 * index + 2;
    }

    private swap(parentIdx: number, idx: number) {
        const temp = this.data[parentIdx];
        this.data[parentIdx] = this.data[idx];
        this.data[idx] = temp;
    }
}