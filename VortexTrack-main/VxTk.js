console.log("🚀 VortexTrack Core Engine: Online & Connected!");

let habits = [];




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

checkAccountExists();

// for test:
// document.querySelector("#is-account").style.display = "block";
// document.querySelector("#pre-account").style.display = "none";
// for test ^^


function updateBar(valBar) {
    const bar = document.querySelector(".progress-wrap");

    if (bar) {
        // Numero CSS → width: 50%
        bar.style.setProperty("--progress-bar", valBar + "%");

        // Stringa CSS → content: '50%'
        bar.style.setProperty("--current", "'" + valBar + "%'");
    }
}

// Have him draw the real number
updateBar(50);



// The `#list-all-habit` element should contain the first 3 habits—sorted however you like and styled nicely (I might add the styling myself later)—using `innerHTML`.

// see what else there is to do