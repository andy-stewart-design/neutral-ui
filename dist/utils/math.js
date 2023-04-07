export function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
