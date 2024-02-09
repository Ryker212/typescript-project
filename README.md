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
npm install -g typescript
```
4. สร้างFolder src,test พร้อมกับสร้างFile merge.tsในsrcและmerge.test.tsในtest
    - merge.ts ทำหน้าที่
    - merge.test.ts ทำหน้าที่
5. update package.son ให้script
```

"scripts": {
    "test": "mocha --require ts-node/register test/**/*.ts"
  }
```
