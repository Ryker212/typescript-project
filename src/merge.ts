export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1;
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        const current1 = collection_1[i] || Infinity;
        const current2 = collection_2[j] || Infinity;
        const current3 = collection_3[k];
    
        const smallest = Math.min(current1, current2, current3);
    
        if (smallest === current1) {
          i++;
        } else if (smallest === current2) {
          j++;
        } else {
          k--;
        }
    
        result.push(smallest);
      }
    return result;
}
