
  

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((res) => res.json())
    .then(function addImage(arrayUrl) {
      for (const image of arrayUrl.message) {
        let dogImage = document.createElement("img");
        console.log("img", image);
        dogImage.src = image;
        document.getElementById("dog-image-container").append(dogImage);
      }
    });
 fetch(breedUrl)
  .then((res) => res.json())
  .then(function(breeds) {
    let ul = document.querySelector("#dog-breeds");
    console.log(ul);
    for (const breed in breeds.message) {
      addBreed(breed);
    }
  });

    
function addBreed(breed){
    let ul = document.querySelector("#dog-breeds");
        let li = document.createElement("li");
        li.innerText = breed;
        ul.appendChild(li);
}

const ul = document.querySelector("#dog-breeds");

ul.addEventListener("click", function(event) {
  
  if (event.target.tagName === "LI") {
   
    event.target.style.color = "red";
  } else {
    event.target.style.color = "black";
  }
});

const dropdown = document.querySelector("#breed-dropdown");
dropdown.addEventListener("change", function() {
  const letter = dropdown.value;
  const lis = document.querySelectorAll("#dog-breeds li");
  lis.forEach((li) => {
    if (li.innerText[0] === letter) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});






});