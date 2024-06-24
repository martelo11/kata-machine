function walk(current: BinaryNode<number> | null, path: number[]) {
  if (!current) {
    return path;
  }
    // pre-order
    path.push(current.value);
    // recursive case
    walk(current.left, path);
    walk(current.right, path);
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}