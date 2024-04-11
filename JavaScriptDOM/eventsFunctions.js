function addStyle(element, text) {
  if (Number(text) > 0) return element.classList.add("positiveResult");
  if (Number(text) < 0) return element.classList.add("negativeResult");
}

function addStyleToElements() {
  const nodes = document.querySelectorAll(".mainResult");
  nodes.forEach((element) => {
    addStyle(element, element.textContent);
  });
}

function invertColorsOfResults() {
  const mainResultElements = document.querySelectorAll(".mainResult");

  for (let i = 0; i < mainResultElements.length; i++) {
    const element = mainResultElements[i];

    if (element.classList.contains("positiveResult")) {
      element.classList.remove("positiveResult");
      element.classList.add("negativeResult");
      continue;
    }

    if (element.classList.contains("negativeResult")) {
      element.classList.remove("negativeResult");
      element.classList.add("positiveResult");
      continue;
    }
  }
}

