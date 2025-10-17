# Nama  : Danis Setiawati

# NIM    : 20240040053

---


# 🧠 Tugas JavaScript: Object Literal & Pengelompokan Data

## 📌 Deskripsi
Repositori ini berisi dua tugas utama yang menggunakan konsep **Object Literal** dan **Array of Objects** dalam JavaScript.  
Tujuan dari tugas ini adalah untuk melatih pemahaman tentang:
- Struktur data berbasis *object*.
- Penggunaan perulangan dan metode array seperti `reduce()`.
- Cara mengelompokkan dan memproses data dalam JavaScript.

---

## 🧩 Tugas 1 — Mencari Nilai Tertinggi dari Data Siswa

### 🎯 Tujuan
Menentukan siswa dengan nilai terbesar dari sekumpulan data yang disimpan dalam bentuk **object literal** atau **array of objects**.

### 💡 Konsep Utama
- Menggunakan `Object.entries()` untuk mengakses pasangan key-value.
- Melakukan perbandingan nilai menggunakan perulangan.
- Menghasilkan object baru berisi `nama` dan `nilai` tertinggi.

### 🧠 Contoh Kode
```javascript
const siswaObj = {
  "JK": 78,
  "arthur": 85,
  "Aldi": 92,
  "Danis": 88
};

function cariTerbesarDariObject(obj) {
  let namaMax = null;
  let nilaiMax = -Infinity;
  for (const [nama, nilai] of Object.entries(obj)) {
    if (nilai > nilaiMax) {
      nilaiMax = nilai;
      namaMax = nama;
    }
  }
  return { nama: namaMax, nilai: nilaiMax };
}

console.log(cariTerbesarDariObject(siswaObj));

```

### Hasil Output
```javascript
{ nama: 'Aldi', nilai: 92 }
```

---

## Tugas 2 — Mengelompokkan Data MotoGP Berdasarkan Negara Pemenang
🎯 Tujuan

Membuat program yang dapat mengelompokkan data event MotoGP berdasarkan negara pemenang menggunakan array of objects.

💡 Konsep Utama

Menggunakan Array.prototype.reduce() untuk mengelompokkan data.

Memanfaatkan struktur object sebagai hasil akhir.

Menyusun data agar mudah dianalisis berdasarkan negara.

🧠 Contoh Kode

```javascript
const motogpEvents = [
  { event: "GP Italy", winner: "Francesco Bagnaia", country: "Italy", year: 2024 },
  { event: "GP Spain", winner: "Marc Marquez", country: "Spain", year: 2024 },
  { event: "GP Catalunya", winner: "Francesco Bagnaia", country: "Italy", year: 2023 },
  { event: "GP France", winner: "Fabio Quartararo", country: "France", year: 2023 },
  { event: "GP Spain 2", winner: "Joan Mir", country: "Spain", year: 2022 }
];

function groupByCountry(events) {
  return events.reduce((acc, ev) => {
    const c = ev.country || "Unknown";
    if (!acc[c]) acc[c] = [];
    acc[c].push(ev);
    return acc;
  }, {});
}

console.log(groupByCountry(motogpEvents));
```
## 🧾 Hasil Output

```javascript
{
  Italy: [
    { event: "GP Italy", winner: "Francesco Bagnaia", country: "Italy", year: 2024 },
    { event: "GP Catalunya", winner: "Francesco Bagnaia", country: "Italy", year: 2023 }
  ],
  Spain: [
    { event: "GP Spain", winner: "Marc Marquez", country: "Spain", year: 2024 },
    { event: "GP Spain 2", winner: "Joan Mir", country: "Spain", year: 2022 }
  ],
  France: [
    { event: "GP France", winner: "Fabio Quartararo", country: "France", year: 2023 }
  ]
}
```

---

🧮 Konsep yang Digunakan

| Konsep                      | Penjelasan Singkat                                                                                    |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Object Literal**          | Struktur data yang berisi pasangan *key-value* seperti `{nama: "Danis", nilai: 78}`                    |
| **Array of Objects**        | Kumpulan beberapa objek dalam satu array, misalnya `[ {nama: "Danis", nilai: 78}, {...} ]`             |
| **Perulangan (`for...of`)** | Digunakan untuk menelusuri elemen dalam array atau object                                             |
| **Method `reduce()`**       | Memproses seluruh elemen array dan mengembalikan satu hasil akumulasi (digunakan untuk pengelompokan) |


## ⚙️ Cara Menjalankan

1.Buka terminal atau editor seperti VS Code.

2.Simpan kode dengan nama tugas.js.

3.Jalankan perintah:
```javascript
node tugas.js
```
4.Hasil akan tampil di console.
