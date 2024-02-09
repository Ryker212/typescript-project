/// <reference types="jest" />

import {merge} from "../src/merge"; //อ้างอิงpath
test("merge test", () =>{
    const collection_1 = [1, 2, 6]; //สร้างcollection ในการทดสอบ
    const collection_2 = [3, 4, 5];
    const collection_3 = [9, 7, 0];
    const expected = [0,1, 2, 3, 4, 5, 6, 7, 9]; //สร้างcollectionที่ถูกต้องหลังmerge มาตรวจสอบผลจากFunction
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected); //เปรียบเทียบผลลัพทธ์การทำงาน
});