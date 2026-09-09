// I wrote this as sample code because you haven’t used any IDs or classes in index.html, and I don’t want to add them since they could alter your CSS design. I don’t want to interfere with that part. Please add some IDs and create a form document that can generate a form and its inputs; with a few IDs, this code will work.
console.log("🚀 VortexTrack Core Engine: Online & Connected!");

let habits = [];



// Add something to check if the account exists—meaning we need to save at least a name or username.
// If it exists, set `display: block;` for `#is-account` and `display: none;` for `#pre-account`; otherwise, do nothing.

function checkAccountExists() {

    const savedUser = localStorage.getItem("vortextrack_username");


    const isAccountDiv = document.querySelector("#is-account");
    const preAccountDiv = document.querySelector("#pre-account");


    if (savedUser && savedUser.trim() !== "") {
        console.log(`🔐 Account verified! Welcome back, ${savedUser}.`);

        isAccountDiv.style.display = "block";
        preAccountDiv.style.display = "none";

        return true;
    } else {
        console.log("🔓 No active account found. Displaying creation prompt.");


        return false;
    }
}

// Fire the check immediately when the webpage loads up
checkAccountExists();

// for test:
document.querySelector("#is-account").style.display = "block";
document.querySelector("#pre-account").style.display = "none";


// and something that passes the CSS variable `--current` to `--progress-bar`, a draft: 
const bar = document.querySelector(".progress-wrap");

if (bar) {
    const progress = getComputedStyle(bar).getPropertyValue("--current").trim();


    bar.style.setProperty("--progress-bar", progress);
}
