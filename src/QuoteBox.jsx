import "./card.css";
import quotesJson from "./quotes.json";

import { VscQuote } from "react-icons/vsc";
import { ImArrowRight2 } from "react-icons/im";
import { useState } from "react";
export function QuoteBox() {
  let textColor = randomColor();
  let [number, setNumber] = useState(random(quotesJson.length));
  return (
    <div className="container" style={{ background: textColor }}>
      <div className="card" style={{ color: textColor }}>
        <div>
          <VscQuote className="comilla" />
          <p>{quotesJson[number].quote}</p>
        </div>
        <div>
          <p>{quotesJson[number].author}</p>
        </div>
        <div>
          <button
            onClick={() => {             

              let card = document.querySelector(".card");

              card.style.transform = "translateX(100%)";
              card.style.opacity = "0";

              setTimeout(() => {
                if (card.style.opacity === "0") {
                  card.style.transform = "translateX(-100%)";
                }
              }, 300);
              setTimeout(() => {
                if (card.style.opacity === "0") {
                  card.style.transform = "translateX(0%)";
                  card.style.opacity = "1";
                  setNumber(random(quotesJson.length));
                }
              }, 400);

              //console.log(card.style.transform);
            }}
            style={{ background: textColor }}
          >
            <ImArrowRight2 />
          </button>
        </div>
      </div>
    </div>
  );
}

function random(length) {
  let number = Math.random();

  let min = 0;
  let max = length;

  let result = (max - min) * number;

  return parseInt(result);
}

function randomColor() {
  let r = random(256);
  let g = random(256);
  let b = random(256);

  return `rgb(${r}, ${g}, ${b})`;
}
