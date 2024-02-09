export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = []; //สร้างตัวแปร result มาเก็บค่าแล้วส่งคืน
    let i = 0, j = 0, k = collection_3.length - 1; //กำหนด ระยะแต่collection_3เป็น -1เนื่องจากเรียงจากมากไปน้อย
    while (i < collection_1.length || j < collection_2.length || k >= 0) { //ทำงานไปเรื่อยจน collection_1หมดแล้วไป collection_2
        const current1 = collection_1[i] || Infinity; //กำหนดค่าcurrentต่างๆ ตามcollectionแต่ละช่อง จนหมกcollcyionให้เป็นInfinity
        const current2 = collection_2[j] || Infinity;
        const current3 = collection_3[k];
    
        const smallest = Math.min(current1, current2, current3); //หาตัวเลขที่น้องที่สุด แล้วเก็บในsmallest
    
        if (smallest === current1) { //เมื่อ smallest เป็นค่าของ currentต่างๆจะทำการ เพื่มค่าจนcurrentนั้นๆถูกกำหนดเป็นInfinity
          i++;
        } else if (smallest === current2) {
          j++;
        } else {
          k--;
        }
    
        result.push(smallest); //ใส่ค่าที่น้อยลงใน result
      }
    return result;//ส่งค่ากลับคืนโปรแกรมที่เรียกfunction
}
