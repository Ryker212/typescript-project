....

# typescript-project

## ขั้นตอนการ setup

1. เรื่มต้นด้วยการติดตั้งtypescriptกับjest โดยใช้ 
```
npm install --save-dev jest @types/jest ts-jest typescript
```
2. ติดตั้งjestเป็นglobal package
```
npm install -g jest
```
3. update package.jsonเพื่อให้typescriptทำงานกับjest
```
 "jest": {
    "transform": {
      ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": ["ts", "tsx", "js"]
  }
```
## ขั้นตอนการทดสอบ unit test
1. สร้างFolder src,test พร้อมกับสร้างFile merge.tsในsrc และmerge.test.tsในtest
    - merge.ts ทำหน้าที่เป็น Function ในการทดสอบ unit test
    - merge.test.ts ทำหน้าที่ ทดสอบ Function ของ unit test ว่า Function นั้นมีค่าเท่ากับการsortจริงหรือไม่
2. ทดสอบunit testด้วยjest
```
    jest
```
