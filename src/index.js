import heroImage from "./templates/res.jpg";
import "./styles/general.css";
import "./styles/index.css";
import "./styles/menu.css";
import "./styles/about.css";
import menuPage from "./menu";
import aboutPage from "./about";

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");
const content = document.querySelector("#content");

const homePage = function () {
  const h1 = document.createElement("h1");
  h1.textContent = "Our Wonderful Restaurant";

  const img = document.createElement("img");
  img.src = heroImage;

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius iure repellendus, earum necessitatibus odio, pariatur autem optio animi blanditiis quisquam accusantium temporibus ipsum tenetur inventore sunt esse. Nemo, accusamus";

  const h2 = document.createElement("h2");
  h2.textContent = "";
  const paragraph2 = document.createElement("p");

  paragraph2.textContent = "";
 const homeDiv = document.createElement("div");
  homeDiv.classList.add("hero-text");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image-overlay");

  imageDiv.append(img);

  homeDiv.append(h1, paragraph, h2, paragraph2);

  content.append(imageDiv, homeDiv);
};

homeBtn.addEventListener("click", () => {
  content.textContent = "";
  homePage();
});
aboutBtn.addEventListener("click", () => {
  content.textContent = "";
  aboutPage();
});
menuBtn.addEventListener("click", () => {
  content.textContent = "";
  menuPage();
});
homePage();
