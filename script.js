const btn = document.getElementById("btn");
const title = document.getElementById("title");

const text = async function fetchQuote() {
  const resp = await fetch("https://quotes-api-self.vercel.app/quote");
  const data = await resp.json();

  console.log(data.quote);

  return data?.quote;
};

btn.addEventListener("click", async () => {
  title.innerText = await text();
});
