// Selecting elements
const nameInput = document.querySelector("#userName");
const reviewInput = document.querySelector("#user-box");
const stars = document.querySelectorAll(".bxs-star");
const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
const reviewContainer = document.querySelector(".client-review");


let selectedRating = 0;
// Star rating functionality
stars.forEach((star, index) => {
    star.addEventListener("click", () => {
    star.style.color = "yellow";
      selectedRating = index + 1;
      updateStars(selectedRating);
    });
  });
  
  function updateStars(rating) {
    stars.forEach((star, index) => {
      star.classList.toggle("selected", index < rating);
    });
  }

  // Submit button functionality
submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const reviewText = reviewInput.value.trim();
  
    if (name && reviewText && selectedRating > 0) {
      const reviewHTML = `
      <li class="client">
          <h1>${name}</h1>
          <p>${reviewText}</p>
          <p class="client-rate">
          Rating by ${name}: ${"⭐".repeat(selectedRating)}</p>
      </li>
      `;
      reviewContainer.innerHTML += reviewHTML;
      
      clearForm();
    } else {
      alert("Please fill in all fields and select a rating.");
    }
  });

  // Clear button functionality
clearBtn.addEventListener("click", clearForm);

function clearForm() {
  stars.forEach(star => {
    star.style.color = "";
  })
  nameInput.value = "";
  reviewInput.value = "";
  selectedRating = 0;
  updateStars(selectedRating);
};