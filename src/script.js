// Henter knappene og input-feltet
const copyButton = document.getElementById("copy");
const redirectButton = document.getElementById("redirect");
const urlInput = document.getElementById("url");

// Funksjon for å lage embed-lenken
function getEmbedUrl(originalUrl) {
  // Sjekker om det er en YouTube-lenke
  if (originalUrl.includes("youtube.com/watch?v=")) {
    // Bytter ut "watch?v=" med "embed/"
    return originalUrl.replace("watch?v=", "embed/");
  }
  return null; // Returnerer null hvis det ikke er en YouTube-lenke
}

// Kopier-funksjonalitet
copyButton.addEventListener("click", function () {
  const originalUrl = urlInput.value; // Henter URL-en fra input-feltet
  const embedUrl = getEmbedUrl(originalUrl); // Lager embed-lenken fra URL-en

  if (embedUrl) {
    // Kopierer embed-lenken til utklippstavlen uten å endre input-feltet
    const textarea = document.createElement("textarea");
    textarea.value = embedUrl;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Embed URL kopiert: " + embedUrl);
  } else {
    alert("This is not a valid Youtube URL!");
  }
});

// Redirect-funksjonalitet
redirectButton.addEventListener("click", function () {
  const originalUrl = urlInput.value; // Henter URL-en fra input-feltet
  const embedUrl = getEmbedUrl(originalUrl); // Lager embed-lenken fra URL-en

  if (embedUrl) {
    // Omdirigerer til embed-lenken uten å endre input-feltet
    window.location.href = embedUrl;
  } else {
    alert("This is not a valid Youtube URL!");
  }
});
