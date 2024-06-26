export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    // base cases
    // structural comparison
    if (a === null && b === null) {
        return true
    }
    // structural comparison
    if (a === null || b === null) {
        return false
    }
    // value comparison
    if (a.value !== b.value) {
        return false
    }
    return compare(a.left, b.left) && compare(a.right, b.right);
}