const obj = {
  name: "Arif",
  age: 26,
  height: 5.6,
  religion: "islam",
  nationality: "Bangladeshi",
  profession: {
    dev1: "freelancer",
    dev2: "IT executive",
    dev3: "Web developer",
  },
};

const { name, religion, age } = obj;
const { dev3 } = obj?.profession;
console.log(dev3);

let arr = [10, 20];
let [x, y] = arr;
console.log(y);
