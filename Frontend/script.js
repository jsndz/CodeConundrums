import axios from "axios";

async function randomQuoteGenerator() {
  try {
    const response = await axios.get(
      "https://programming-quotes-api.herokuapp.com/quotes/random"
    );
    const quote = response.data;
    return quote;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function quote() {
  try {
    const pquote = await randomQuoteGenerator();

    if (pquote) {
      const newElement = document.createElement("p");
      newElement.textContent = `"${pquote.en}" - ${pquote.author}`;
      content.appendChild(newElement);
    } else {
      console.log("No quote received from the API.");
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}


export {quote}