function walk(current: BinaryNode<number> | null, path: number[]) {
    if (!current) {
        return path;
    }
    // recursive case
    walk(current.left, path);
    walk(current.right, path);

    // post-order
    path.push(current.value);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}