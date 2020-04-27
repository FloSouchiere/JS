function fetchAllPosts() {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => {
            return response.json();
        })
        .then(res => {
            fillTheFeed(res);
        })
        .catch(error => console.log(error));
}

function createPost(dataPost, i) {

    const post = document.createElement("div");
    const title = document.createElement("h4");
    const description = document.createElement("p");
    post.className = "post";
    post.id = i++;
    post.style.color = "white";
    post.style.border = "solid 1px black";
    post.style.borderRadius = "10px";
    post.style.margin = "5px 0";
    post.style.padding = "5px";

    title.innerText = dataPost.title;
    description.innerText = dataPost.description;

    post.appendChild(title);
    post.appendChild(description);

    return post;
    
}

fetchAllPosts();

function fillTheFeed(data) {
    const feed = document.querySelector("#feed");
    data.forEach((post, i) => {
        
            feed.appendChild(createPost(post, i))
            
    });
}

$(document).ready(function () {

    // Using custom configuration

    $("#carousel").carouFredSel({
        items: 3,
        direction: "left",
        scroll: {
            items: 3,
            easing: "elastic",
            duration: 3,
            responsive: true,
            pauseOnHover: true
        }
    });

    let dropdown = document.querySelector('.dropdown')

    dropdown.addEventListener('click', (e) => {
        if (dropdown.classList.contains('closed')) {
            dropdown.classList.remove('closed')
        } else {
            dropdown.classList.add('closed')
        }
    })
    
    // Fonction de récuperation des données du formulaire au clic du bouton

    let formButton = document.querySelector("#formButton")

    formButton.addEventListener('click', (e) => {

    // Bloquage de la soumission du form par défaut

        e.preventDefault()
        console.log('clicked !')

    // Récupération du contenu des champs title et description

       data = {
        "title" : document.querySelector("#title").value,
        "description" : document.querySelector("#description").value,
        }

    // Appelle des méthodes de création de post et d'ajout dans le feed

    // Récupère le 1er élément de la liste feed et ajoute le résultat de createPost en 1er

        let item = feed.firstElementChild

        feed.insertBefore(createPost(data, 0), item)

    })})