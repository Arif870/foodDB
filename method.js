const info = {
  id: 1,
  name: "Arif",
  job: "web dev",
  salary: 200,
};

// getting object keys
const keys = Object.keys(info);
// console.log(keys);

// getting object values
const values = Object.values(info);
// console.log(values);

// getting object entries

const entries = Object.entries(info);
// console.log(entries);

// Sealing object
Object.seal(info);

// freezing object
Object.freeze(info);

// Delete object

delete info.name;
info.name = "Sumaiya";
console.log(info);
