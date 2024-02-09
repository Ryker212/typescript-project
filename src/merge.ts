export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const merged: number[] = [];
    let i = 0;
    let j = 0;
    let k = 0;

    // Merge collections while considering the sorted order
    while (i < collection1.length && j < collection2.length && k < collection3.length) {
        if (collection1[i] <= collection2[j] && collection1[i] <= collection3[k]) {
            merged.push(collection1[i++]);
        } else if (collection2[j] <= collection1[i] && collection2[j] <= collection3[k]) {
            merged.push(collection2[j++]);
        } else {
            merged.push(collection3[k++]);
        }
    }

    // Append remaining elements from collections
    while (i < collection1.length) {
        merged.push(collection1[i++]);
    }

    while (j < collection2.length) {
        merged.push(collection2[j++]);
    }

    while (k < collection3.length) {
        merged.push(collection3[k++]);
    }

    return merged;
}
