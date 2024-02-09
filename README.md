# typescript-project

## ขั้นตอนการ setup

1. เรื่มต้นด้วยการสร้าง package.json โดยใช้ 
```
npm init
```
2. ติดตั้งTypeScript, Mocha, และ Chai 
```
npm install typescript mocha chai @types/mocha @types/chai ts-node --save-dev
```
3. ติดตั้ง tsconfig.json
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