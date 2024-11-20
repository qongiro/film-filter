let first_list = document.querySelector(".first_list");
let middle = document.querySelector(".middle");
let listy = document.querySelector(".listy");
let tag = document.querySelector(".tag");

let icons_imge = [
    "actions",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "documentary",
    "drama",
    "family",
    "fantasy",
    "history",
    "horror",
    "music",
    "mystery",
    "romance",
    "sciencefiction",
    "tv",
    "thriller",
    "war",
    "western",
];

let photo_imge = [
    'act',
    'adven',
    'animat',
    'comed',
    'crim',
    'documen',
    'dram',
    'famil',
    'fantas',
    'histor',
    'hor',
    'mister',
    'mus',
    'roman',
    'sicfiction',
    'tv',
    'thrill',
    'war',
    'west',
];

text_words = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    ' ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    ' dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    ' sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    ' amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    ' consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    ' adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    ' elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    '. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'cing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'em ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'Lem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'Lom ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'rem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'orem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'm ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'psum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
    'sum dolor sit amet consectetur adipisicing elit. Explicabo ipsa, aliquid assumenda excepturi ipsam a voluptatibus veniam aut maxime aperiam neque eum esse molestiae molestias sequi qui harum rerum vel.',
];

icons_imge.forEach((item, index) => {
    let decr = document.createElement("div");
    decr.classList.add("decr");

    let img = document.createElement("img");
    img.src = `./icon/${item}.svg`;
    decr.appendChild(img);

    let action = document.createElement("h3");
    action.classList.add("action");
    action.innerHTML = item; // Set innerHTML to the item itself (the string)
    decr.appendChild(action); // Append h3 element to the container

    first_list.appendChild(decr); // Append each decr to the first_list

    decr.addEventListener("click", () => {
        middle.innerHTML = ''; // Clear the middle container

        let dog = document.createElement("div");
        dog.classList.add("dog");
        dog.style.backgroundColor = "crimson";
        let title_dog = document.createElement("div");
        title_dog.classList.add("title_dog");
        let word = document.createElement("p")
        word.classList.add("word")
        word.style.fontSize = "26px"
        word.style.webkitLineClamp = "5"
        word.innerHTML = `${text_words[index]}`
       

        let imges = document.createElement("img");
        imges.classList.add("imges")
        imges.src = `./images/${photo_imge[index]}.jpg`;
        

        let act = document.createElement("h1");
        act.classList.add("action");
        act.style.fontSize = "80px";
        act.innerHTML = item;

        dog.appendChild(imges);
        title_dog.appendChild(act);
        title_dog.appendChild(word);
        dog.appendChild(title_dog);
        middle.appendChild(dog);
    });
  
    
});
