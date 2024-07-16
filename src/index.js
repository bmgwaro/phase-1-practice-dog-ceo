console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                // Create image element
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Dog Image';
                dogImageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));
});



document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById('dog-breeds');
            // Iterate over the breeds object and add them to the list
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));
});



document.addEventListener('DOMContentLoaded', function() {
    const dogBreedsList = document.getElementById('dog-breeds');


    dogBreedsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; 
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');

    
    function filterBreeds(letter) {
        // Fetch breeds again (to reset the list)
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                dogBreedsList.innerHTML = '';

                // Filter and add breeds starting with the selected letter
                Object.keys(data.message).forEach(breed => {
                    if (breed.startsWith(letter)) {
                        const li = document.createElement('li');
                        li.textContent = breed;
                        dogBreedsList.appendChild(li);
                    }
                });
            })
            .catch(error => console.error('Error fetching dog breeds:', error));
    }

    
    breedDropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
    });

    
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));
});