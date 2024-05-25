
// Callbacks
const handleClick = (ramen) => {
  const images = document.querySelectorAll('.image');

  images.forEach((obj, index) => {
    obj.addEventListener('click', function() {
      const ramenDetail = document.querySelector('.detail-image');
      ramenDetail.setAttribute("src", obj.src)
      console.log(ramen[0])
      const foodName = document.querySelector("h2");
      foodName.textContent = ramen[index].name;

      const restaurant = document.querySelector(".restaurant");
      restaurant.textContent = ramen[index].restaurant;

      const rating = document.getElementById("rating-display");
      rating.textContent = ramen[index].rating;

      const comment = document.getElementById("comment-display");
      comment.textContent = ramen[index].comment;
    });
  });
};

const addSubmitListener = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to handle form submission
    let newRamenName = form.querySelector('input[name="name"]');
    let newRamenRest = form.querySelector('input[name="restaurant"]');
    let newRamenImg = form.querySelector('input[name="image"]');
    let newRamenRting = form.querySelector('input[name="rating"]');
    let newRamenComnt = form.querySelector('textarea[name="new-comment"]');
     let newRamen = {
      name:newRamenName.value,
      restaurant:newRamenRest.value,
      image:newRamenImg.value,
      rating:newRamenRting.value,
      comment:newRamenComnt.value
     }

     addRamen(newRamen)
  });
};


function addRamen(ramen) {
  fetch('http://localhost:3000/ramens/',{
    method:"POST",
     headers: {
      "Content-Type": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
  },

  body: JSON.stringify(ramen),
   

  })
.then(res => res.json())
.then(ramen => console.log(data.length))
}

const displayRamens = (data) => {
  document.addEventListener("DOMContentLoaded", (event) => {
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
        data.forEach(obj => {
          const ramenMenu = document.getElementById("ramen-menu")
          const img = document.createElement("img")
          img.setAttribute('src', obj.image);
          img.setAttribute('class', "image")
          ramenMenu.appendChild(img);
          });
        handleClick(data)

      })
      .catch(error => {
        // Handle any errors that occur during the request
        displayRamens
      });
  });

  
}


const main = () => {
  displayRamens()
  addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

