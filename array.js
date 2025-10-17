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

const grouped = groupByCountry(motogpEvents);
console.log("Hasil pengelompokan berdasarkan Negara Pemenang:");
console.log(grouped);