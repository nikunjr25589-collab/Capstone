
// let siteTitle = "vivaCare";
// console.log("Welcome to " + siteTitle);

// // Search button
// let searchBtn = document.querySelector(".search-btn");
// let searchInput = document.querySelector(".search-input");

// if (searchBtn && searchInput) {
//   searchBtn.addEventListener("click", function () {
//     let query = searchInput.value.trim();
//     if (query === "") {
//       alert("Please enter something to search.");
//     } else {
//       alert("Searching for: " + query);
//     }
//   });
// }

// // medicine namess 
// let medicineElems = document.querySelectorAll(".medicine-name");
// for (let i = 0; i < medicineElems.length; i++) {
//   medicineElems[i].style.color = "blue";
// }

// // button click changes
// let buttons = document.querySelectorAll(".btn");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     buttons[i].style.opacity = "0.6";
//     setTimeout(function () {
//       buttons[i].style.opacity = "1";
//     }, 200);
//   });
// }

// // form
// let forms = document.querySelectorAll("form");
// for (let i = 0; i < forms.length; i++) {
//   forms[i].addEventListener("submit", function (event) {
//     event.preventDefault();
//     let inputs = forms[i].querySelectorAll("input, textarea, select");
//     let empty = false;
//     for (let j = 0; j < inputs.length; j++) {
//       if (inputs[j].value.trim() === "") {
//         empty = true;
//       }
//     }
//     if (empty) {
//       alert("Please fill all fields.");
//     } else {
//       alert("Form submitted!");
//     }
//   });
// }





// vivaCare - JavaScript Interactions
// (kept simple and human-like, using only topics you've learned)

document.addEventListener("DOMContentLoaded", function () {
    
    // -----------------------------
    // Navbar Toggle (Mobile)
    // -----------------------------
    const nav_menu = document.querySelector(".nav-menu");
    const nav_brand = document.querySelector(".nav-brand");

    // small responsive toggle without modifying html
    nav_brand.addEventListener("click", function () {
        nav_menu.classList.toggle("nav_open");
    });

    // -----------------------------
    // Search Bar Interaction
    // -----------------------------
    const search_input = document.querySelector(".search-input");
    const search_btn = document.querySelector(".search-btn");

    search_btn.addEventListener("click", function () {
        const value = search_input.value.trim();
        if (value.length === 0) {
            alert("Please type something to search.");
        } else {
            alert("Searching for: " + value);
        }
    });

    // press Enter key to activate search
    search_input.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            search_btn.click();
        }
    });

    // -----------------------------
    // Add to Cart Buttons
    // -----------------------------
    const cart_buttons = document.querySelectorAll(".btn-accent");

    // cart array (objects + arrays usage)
    const cart_items = [];

    cart_buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const card = btn.closest(".medicine-card");

            if (card) {
                const name = card.querySelector(".medicine-name").textContent;
                const price = card.querySelector(".medicine-price").textContent;

                const item = {
                    name: name,
                    price: price
                };

                cart_items.push(item);
                console.log("Cart Items:", cart_items);

                // small visual feedback
                btn.classList.add("btn_added");
                setTimeout(() => btn.classList.remove("btn_added"), 800);
            }
        });
    });

    // -----------------------------
    // Form Validations (Simple)
    // -----------------------------
    const all_forms = document.querySelectorAll(".form");

    all_forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea, select");
            let empty_found = false;

            inputs.forEach(function (inp) {
                if (inp.value.trim() === "" || inp.value === "Select a doctor") {
                    empty_found = true;
                    inp.classList.add("input_error");
                    setTimeout(() => inp.classList.remove("input_error"), 1500);
                }
            });

            if (empty_found) {
                alert("Please fill all the fields.");
            } else {
                alert("Form submitted successfully!");
                form.reset();
            }
        });
    });

    // -----------------------------
    // Dynamic Cards (DOM Creation)
    // -----------------------------
    const dynamic_medicines = [
        { name: "Ibuprofen", desc: "Anti-inflammatory", price: "$9.49" },
        { name: "Amoxicillin", desc: "Antibiotic", price: "$14.20" }
    ];

    const medicine_grid = document.querySelectorAll(".grid")[0];

    dynamic_medicines.forEach(function (med) {
        const new_card = document.createElement("div");
        new_card.className = "card medicine-card";

        new_card.innerHTML = `
            <div class="medicine-image">
                <div class="placeholder-image">
                    <i class="fas fa-pills"></i>
                    <span>Medicine</span>
                </div>
            </div>
            <div class="medicine-info">
                <h3 class="medicine-name">${med.name}</h3>
                <p class="medicine-description">${med.desc}</p>
                <div class="medicine-price">${med.price}</div>
                <button class="btn btn-accent"><i class="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
        `;

        medicine_grid.appendChild(new_card);
    });

    // -----------------------------
    // Hero Buttons
    // -----------------------------
    const get_started_btn = document.querySelector(".btn-primary");
    const learn_more_btn = document.querySelector(".btn-secondary");

    get_started_btn.addEventListener("click", function () {
        window.scrollTo({
            top: 600,
            behavior: "smooth"
        });
    });

    learn_more_btn.addEventListener("click", function () {
        alert("Scroll down to explore components.");
    });

});
