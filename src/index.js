// index.js

// - Click on an image from the `#ramen-menu` div and fire a callback called `handleClick`
//   to see all the info about that
//   ramen displayed inside the `#ramen-detail` div (where it says

// Callbacks

  
const displayRamens = () => {
  // Fetch and convert ramen 
  fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramens => {
      ramens.forEach (dish => {
        const img = document.createElement("img");
        img.src = dish.image;
        img.addEventListener('click', (e) => handleClick(dish))
        document.querySelector("#ramen-menu").append(img);
      });
    })
  };


const handleClick = (ramen) => {

  document.querySelector("#comment-display").textContent = ramen.comment;
  document.querySelector("#rating-display").textContent = ramen.rating;
  document.querySelector("h2.name").textContent = ramen.name;
  document.querySelector("h3.restaurant").textContent = ramen.restaurant;
  document.querySelector("img.detail-image").src = ramen.image; 
 

};


// - Attach a submit even listener to the `new-ramen` form using a function called `addSubmitListener`.
//   After the submission, create a new ramen and add it to the`#ramen-menu` div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.


const addSubmitListener = (newRamen) => {
  // Add code
    document.querySelector("#new-ramen").addEventListener("submit", e => {
      e.preventDefault();
      const newName = document.querySelector("#new-name").value;
      const newRestaurant = document.querySelector("#new-restaurant").value;
      const newImg = document.querySelector("#new-image").value;
      const newRating = document.querySelector("#new-rating").value;
      const newComment = document.querySelector("#new-comment").value;

    const newPic = document.createElement("img");
    newPic.src = newImg ;
    const ramenData = {
         "name" : newName,
         "restaurant" : newRestaurant,
         "image" : newImg,
         "rating" : newRating,
         "comment" : newComment
} 
// console.log(ramenData);
document.querySelector("#ramen-menu").append(newPic);
newPic.addEventListener("click", (e) => (handleClick(ramenData)))

  });
};










const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
  
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};