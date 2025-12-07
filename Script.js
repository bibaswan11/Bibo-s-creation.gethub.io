let isOwner = false;

window.onload = function() {
    let mode = confirm("Are you the OWNER? Click OK for Owner, Cancel for User.");

    if (mode) {
        let pass = prompt("Enter Owner Password:");
        if (pass === "9830224088") {
            isOwner = true;
            document.getElementById("ownerPanel").classList.remove("hidden");
            alert("Welcome, Owner!");
        } else {
            alert("Incorrect password. Switching to user mode.");
        }
    }
};

function uploadItem() {
    let file = document.getElementById("imageUpload").files[0];
    let desc = document.getElementById("descUpload").value;
    let category = document.getElementById("categorySelect").value;

    if (!file || !desc) {
        alert("Please upload an image and enter a description.");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e) {
        addItemToGallery(e.target.result, desc, category);
    };

    reader.readAsDataURL(file);
}

function addItemToGallery(imgSrc, description, category) {
    const gallery = document.getElementById("gallery");

    const div = document.createElement("div");
    div.classList.add("item");
    div.setAttribute("data-category", category);

    div.innerHTML = `
        <img src="${imgSrc}">
        <p>${description}</p>
    `;

    gallery.appendChild(div);
}

function filterCategory(category) {
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        if (category === "all" || item.dataset.category === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
