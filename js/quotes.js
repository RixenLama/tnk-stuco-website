const quoteCardContainer = document.querySelector("#quote-card-container");
const quoteCardTemplate = document.querySelector("#quote-card-template");

fetch("/data/quotes.json")
  .then((res) => res.json())
  .then((quotes) => {
    quotes.forEach((quote) => {
      const { content, cite } = quote;

      const quoteClone = quoteCardTemplate.content.cloneNode(true);
      quoteClone.querySelector("#quote-content").innerText = content;
      quoteClone.querySelector(
        "#quote-cite"
      ).innerText = `${cite.name} (${cite.class})`;

      quoteCardContainer.appendChild(quoteClone);
    });
  });
