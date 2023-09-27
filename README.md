## Express pake Mysql

```
.
├── README.md
├── app.js      # Entrypoint server/API
├── config      # konfigurasi yang dipakai di aplikasi
│   ├── database.js # konfigurasi db
│   └── schema.sql # sql script buat generate table dan database
├── controllers # 
Controller itu sendiri berperan sebagai pengatur aksi pada aplikasi yang dibangun
│   └── mahasiswa.controller.js ## controller buat si mahasiswa
├── package-lock.json
├── package.json
├── routes # ngatur rute dalam aplikasi
│   └── mahasiswa.routes.js # rute yang terdapat pada "/mahasiswa"
└── services # ngatur logika bisnis yang terjadi pada aplikasi, contoh untuk manipulasi data atau untuk insert data ke database
    └── mahasiswa.service.js
```

## Cara penggunaan

Clone repository ini ke laptop kalian

kalian bisa melakukan instalasi dengan cara

```
npm install
```

nanti akan terbuat satu folder dengan nama `node_modules` yang berisi package yang diinstall dari `npm` dan `package-lock.json` untuk log setiap package yang terinstall.

## Untuk Menjalankannya

tinggal pake command

```
npm run dev
```
