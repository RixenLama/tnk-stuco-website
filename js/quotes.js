const quoteCardContainer = document.querySelector("#quote-card-container");
const quoteCardTemplate = document.querySelector("#quote-card-template");

const MIN_QUOTE_WIDTH = 280;
const GRID_GAP = 16;

const containerWidth = quoteCardContainer.clientWidth;
const columnNumber = Math.floor(
  (containerWidth + GRID_GAP) / (MIN_QUOTE_WIDTH + GRID_GAP)
);

fetch("/data/quotes.json")
  .then((res) => res.json())
  .then((quotes) => {
    quotes.forEach((quote, idx) => {
      const { content, cite } = quote;

      const transitionDelay = (idx % columnNumber) * 50;

      const quoteClone = quoteCardTemplate.content.cloneNode(true);
      quoteClone
        .querySelector("#quote-card")
        .setAttribute("data-aos-delay", transitionDelay);
      quoteClone.querySelector("#quote-content").innerText = content;
      quoteClone.querySelector(
        "#quote-cite"
      ).innerText = `${cite.name} (${cite.class})`;

      quoteCardContainer.appendChild(quoteClone);
    });
  });
