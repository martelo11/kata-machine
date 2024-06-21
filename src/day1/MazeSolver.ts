const dir = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1] // right
]

function walk(maze:  string[], wall: string, curr: Point, end: Point,  seen: boolean[][], path:
Point[]): boolean {

    // 1. base case
    // check if we are out of bounds
    if (curr.x < 0 || curr.y >= maze [0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false;
    }

    // 2. check if we reached wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3. recurse
    //  pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < dir. length; i++) {
        const next = {
            x: curr.x + dir[i][0],
            y: curr.y + dir[i][1]
        }
        if (walk(maze, wall, next, end, seen, path)) {
            return true;
        }

    }
    // post
    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen = new Array(maze.length).fill(false).map(() => new Array(maze[0].length).fill(false));
    const path: Point[] = [];
    walk(maze, wall, start, end, seen, path);
    return path;
}