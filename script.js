const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 18;

const generatePalette = () => {
    container.innerHTML = ""; 
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // create a new 'li' element and insert it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        // add click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}
generatePalette();

const copyColor = (element, hexValue) => {
    const colorElement = element.querySelector(".hex-value");
    // copy the hex code, update the text to copied, 
    navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerText = "Copied";
        // change text back to original hex code after 1 second using setTimeout
        setTimeout(() => colorElement.innerText = hexValue, 1000);
    }).catch(() => alert("Failed to copy the color code!")); // show alert if color can't be copied using catch
}
// add generate palette function to refresh button
refreshBtn.addEventListener("click", generatePalette);