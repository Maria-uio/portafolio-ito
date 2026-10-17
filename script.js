function addRecommendation() {
    const textarea = document.getElementById("new_recommendation");
    const text = textarea.value.trim();
  
    // Si está vacío, no hace nada (y tampoco muestra el popup)
    if (text === "") {
      return;
    }
  
    const card = document.createElement("div");
    card.className = "recommendation";
  
    const openQuote = document.createElement("span");
    openQuote.textContent = "“";
  
    const closeQuote = document.createElement("span");
    closeQuote.textContent = "”";
  
    card.appendChild(openQuote);
    card.appendChild(document.createTextNode(" " + text + " "));
    card.appendChild(closeQuote);
  
    document.getElementById("all_recommendations").appendChild(card);
  
    textarea.value = "";
  
    showPopup(true); // <- confirmación
  }

function showPopup(bool) {
  const popup = document.getElementById("popup");
  popup.style.visibility = bool ? "visible" : "hidden";
}