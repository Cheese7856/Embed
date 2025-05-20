// Henter hele query-delen av URL-en
const queryString = window.location.search;

// Lager et URLSearchParams-objekt for å hente parameteren "link"
const urlParams = new URLSearchParams(queryString);
const encodedLink = urlParams.get("link"); // Henter verdien av "link"

// Sjekker om "link" finnes
if (encodedLink) {
  // Dekoder URL-en
  const decodedLink = decodeURIComponent(encodedLink);

  // Sjekker om linken er en YouTube-link
  if (decodedLink.includes("youtube.com/watch?v=")) {
    // Bytter ut "watch?v=" med "embed/"

    videoId = decodedLink.split("v=")[1].split("&")[0]

    const embedLink = "https://www.youtube.com/embed/" + videoId;

    // Omdirigerer til den nye embed-linken
    window.location.href = embedLink;
  }
  else if (decodedLink.includes("youtube.com/shorts/")) {
    const embedLink = decodedLink.replace("shorts", "embed");

    // Omdirigerer til den nye embed-linken
    window.location.href = embedLink;
  } else {
    // Lager en <p>-melding hvis det ikke er en YouTube-link
    const message = document.createElement("p");
    message.textContent =
      "Kunne ikke redirecte. URL-en er ikke en gyldig YouTube URL.";
    document.body.appendChild(message);
  }
} else {
  // Hvis "link" mangler, omdirigerer vi til start.html
  window.location.href = "index.html";
}
