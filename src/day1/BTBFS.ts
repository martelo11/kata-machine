export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length) {
        const current = q.shift() as BinaryNode<number> | null | undefined;
        if (!current) {
            continue;
        }
        // search
        if (current.value === needle) {
            return true;
        }
        // @ts-ignore
        q.push(current.left);
        // @ts-ignore
        q.push(current.right);
    }
    return false;
}