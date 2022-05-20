const fruits = {
  id: 3,
  name: ["banana", "orange", "mango"],
  region: {
    color: "yellow",
    price: 30,
  },
};

const stri = JSON.stringify(fruits);
const parse = JSON.parse(stri);
console.log(parse);
