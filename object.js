const siswaObj = {
  "Jk": 78,
  "Arthur": 85,
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

console.log("Format object literal ->", cariTerbesarDariObject(siswaObj));

const siswaArr = [
  { nama: "Jk", nilai: 78 },
  { nama: "Arthur", nilai: 85 },
  { nama: "Aldi", nilai: 92 },
  { nama: "Danis", nilai: 88 }
];

function cariTerbesarDariArray(arr) {
  if (!arr.length) return null;
  let best = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].nilai > best.nilai) best = arr[i];
  }
  return best; 
}

console.log("Format array of objects ->", cariTerbesarDariArray(siswaArr));