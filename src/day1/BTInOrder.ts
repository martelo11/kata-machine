function walk(current: BinaryNode<number> | null, path: number[]) {
    if (!current) {
        return path;
    }
    // recursive case
    walk(current.left, path);
    // in-order
    path.push(current.value);
    // recursive case
    walk(current.right, path);
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
