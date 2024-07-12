// Create & set the first beer's name
const h2 = document.querySelector("#beer-name");
// Create & set the first beer's image
const img = document.querySelector("#beer-image");
// Create & set the first beer's reviews
const ul = document.querySelector("#review-list");
// First beer's details
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the first beer's details from db.json
  fetch("http://localhost:3000/beers/1")
    .then((response) => response.json())
    .then((data) => {
      h2.textContent = data.name;
      img.src = data.image_url;
      em.textContent = data.description;

      data.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.textContent = review;
        ul.appendChild(li);
        // Bonus deliverables
        // Remove a review from the page when it is clicked
        li.addEventListener("click", function (event) {
          event.target.remove(li);
        });
      });
    });

  // See a menu of all beers in the `<nav>` element on the left side of the page
  //    when the page loads.
  fetch("http://localhost:3000/beers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Create & set the first beer's name
      const ul = document.querySelector("#beer-list");
      data.forEach((beer) => {
        const li = document.createElement("li");
        li.textContent = beer.name;
        ul.appendChild(li);
        // Bonus deliverables
        // Click a beer in the `<nav>` element on the left side of the page and have
        // that beer's details displayed in the main section of the page
        li.addEventListener("click", function (event) {
          // Fetch the beer's details from db.json
          fetch(`http://localhost:3000/beers/${beer.id}`)
            .then((response) => response.json())
            .then((data) => {
              // Create & set the beer's name
              const h2 = document.querySelector("#beer-name");
              h2.textContent = data.name;
              // Create & set the beer's image
              const img = document.querySelector("#beer-image");
              img.src = data.image_url;
              // Create & set the beer's description
              const em = document.querySelector("#beer-description");
              em.textContent = data.description;
              // Create & set the beer's reviews
              const ul = document.querySelector("#review-list");
              // Clear existing reviews
              ul.innerHTML = "";
              data.reviews.forEach((review) => {
                console.log(review);
                const li = document.createElement("li");
                li.textContent = review;
                ul.appendChild(li);
                li.addEventListener("click", function (event) {
                  event.target.remove(li);
                });
              });
            });
        });
      });
    });

  // Add a new review to the page when the review form is submitted. **No
  //    persistence is needed**
  const form = document.querySelector("#review-form");
  const textArea = document.querySelector("#review");
  const ul = document.querySelector("#review-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const review = textArea.value;

    // Create a new li element inside the event listener
    const li = document.createElement("li");
    li.textContent = review;

    ul.appendChild(li);
    textArea.value = "";

    // Bonus deliverables
    // Remove a review from the page when it is clicked
    li.addEventListener("click", function (event) {
      event.target.remove(li);
    });
  });
});
