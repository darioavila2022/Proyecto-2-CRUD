let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
data = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Recuerda dar ideas!";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
};

let acceptData = () => {
    data = [...data, { "text": input.value }];
    input.value = "";
    localStorage.setItem('ideaData', JSON.stringify(data));
    provideIdea(data[data.length - 1]);
};


let provideIdea = (t) => {
    let idea = document.createElement("div");
    idea.innerHTML = `<p>${t.text}</p>
    <span class="options"> 
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    <i onClick="editPost(this)" class="fas fa-edit"></i>
      </span>`;
    posts.append(idea);
};

document.addEventListener('DOMContentLoaded', () => {
    const ref = localStorage.getItem('IdeasContent');
    if (ref) {
        data = JSON.parse(ref);
        data.forEach(t => {
            provideIdea(t);
        });
    }
});

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
