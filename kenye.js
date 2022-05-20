// const quatation = () => {
//   fetch("https://api.kanye.rest/")
//     .then(res => res.json())
//     .then(data => quation(data.quote));
// };

const quatation = async () => {
  const res = fetch("https://api.kanye.rest/");
  const data = await res.json();
  console.log(data);
};

const quation = async quote => {
  let blockQuote = document.getElementById("blockQuote");
  blockQuote.innerText = quote;
};
