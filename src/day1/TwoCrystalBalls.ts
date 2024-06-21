export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i<breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    // walk back after first broken point found in area of SQRT/n
    i -= jumpAmount;
    // walk forward again to find first breaking point in array
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    // not found
    return -1;
}