import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "./utils";
import data from "../DATA.json";

document.addEventListener("DOMContentLoaded", function () {
  console.log(data.restaurants);
  const posts = document.querySelector("#posts");
  let card = "<p tabindex='0' class='post-item-empty'>Post Empty</p>";
  data.restaurants.forEach((item, index) => {
    if (index === 0) {
      card = `<article class="post-item" tabindex="0" aria-label="post item">
              <div class="post-item__thumbnail-container">
                <img
                  class="post-item__thumbnail"
                  src="${item.pictureId}"
                  alt="restaurant"
                />
                <div class="post-item__city">
                  <p tabindex="0" aria-label="lokasi tempat, kota ${item.city}">
                    Kota ${item.city}
                  </p>
                </div>
              </div>
              <div class="post-item__content">
                <span class="post-item__rating" tabindex="0">rating ${item.rating}</span>
                <h2 class="post-item__title" tabindex="0">
                  ${item.name}
                </h2>
                <p class="post-item__description" tabindex="0">
                  ${item.description}
                </p>
              </div>
            </article>`;
    } else {
      card += `<article class="post-item" tabindex="0" aria-label="post item">
              <div class="post-item__thumbnail-container">
                <img
                  class="post-item__thumbnail"
                  src="${item.pictureId}"
                  alt="restaurant"
                />
                <div class="post-item__city">
                  <p tabindex="0" aria-label="lokasi tempat, kota ${item.city}">
                    Kota ${item.city}
                  </p>
                </div>
              </div>
              <div class="post-item__content">
                <span class="post-item__rating" tabindex="0">rating ${item.rating}</span>
                <h2 class="post-item__title" tabindex="0">
                  ${item.name}
                </h2>
                <p class="post-item__description" tabindex="0">
                  ${item.description}
                </p>
              </div>
            </article>`;
    }
  });
  posts.innerHTML = card;
});
