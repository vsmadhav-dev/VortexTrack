console.log("🚀 VortexTrack Core Engine: Online & Connected!");

let habits = [];

function checkAccountExists() {

    const savedUser = localStorage.getItem("vortextrack_username") || localStorage.getItem("currentUser");

    const isAccountDiv = document.querySelector("#is-account");
    const preAccountDiv = document.querySelector("#pre-account");

    if (savedUser) {
        let username = savedUser;
        try {
            const parsed = JSON.parse(savedUser);
            username = parsed.nickname || parsed.name || savedUser;
        } catch (e) {
            // savedUser is a raw string
        }

        console.log(`🔐 Account verified! Welcome back, ${username}.`);

        if (isAccountDiv) isAccountDiv.style.display = "block";
        if (preAccountDiv) preAccountDiv.style.display = "none";

        return true;
    } else {
        console.log("🔓 No active account found. Displaying creation prompt.");
        if (isAccountDiv) isAccountDiv.style.display = "none";
        if (preAccountDiv) preAccountDiv.style.display = "block";

        return false;
    }
}

function updateBar(valBar) {
    const bar = document.querySelector(".progress-wrap");

    if (bar) {
        const value = Math.min(100, Math.max(0, Math.round(valBar)));
        bar.style.setProperty("--progress-bar", value + "%");
        bar.style.setProperty("--current", "'" + value + "%'");
    }
}

function saveHabits() {
    localStorage.setItem("vortextrack_habits", JSON.stringify(habits));
}

function loadHabits() {
    const stored = localStorage.getItem("vortextrack_habits");
    if (stored) {
        try {
            habits = JSON.parse(stored);
        } catch (e) {
            habits = [];
        }
    }
}

function calculateProgress() {
    if (habits.length === 0) {
        updateBar(0);
        return;
    }
    const completedCount = habits.filter(h => h.completed).length;
    const percentage = (completedCount / habits.length) * 100;
    updateBar(percentage);
}

function renderHabits() {
    const container = document.querySelector("#list-all-habit");
    if (!container) return;

    container.innerHTML = "";


    const displayHabits = habits.slice(0, 3);

    displayHabits.forEach((habit) => {
        const item = document.createElement("div");
        item.className = "habit-item";
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justify = "space-between";
        item.style.padding = "8px 12px";
        item.style.margin = "6px 0";
        item.style.background = "rgba(255, 255, 255, 0.1)";
        item.style.borderRadius = "8px";

        const titleSpan = document.createElement("span");
        titleSpan.textContent = habit.name;
        if (habit.completed) {
            titleSpan.style.textDecoration = "line-through";
            titleSpan.style.opacity = "0.6";
        }

        const actions = document.createElement("div");

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = habit.completed ? "Undo" : "Complete";
        toggleBtn.style.marginRight = "6px";
        toggleBtn.style.cursor = "pointer";
        toggleBtn.onclick = () => toggleHabit(habit.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.onclick = () => deleteHabit(habit.id);

        actions.appendChild(toggleBtn);
        actions.appendChild(deleteBtn);

        item.appendChild(titleSpan);
        item.appendChild(actions);

        container.appendChild(item);
    });

    calculateProgress();
}

function addHabit() {
    const input = document.querySelector("#new-habit-input");
    if (!input) return;

    const habitText = input.value.trim();
    if (habitText === "") return;

    const newHabit = {
        id: Date.now(),
        name: habitText,
        completed: false
    };

    habits.push(newHabit);
    saveHabits();
    renderHabits();
    input.value = "";
}

function toggleHabit(id) {
    habits = habits.map(h => {
        if (h.id === id) {
            return { ...h, completed: !h.completed };
        }
        return h;
    });
    saveHabits();
    renderHabits();
}

function deleteHabit(id) {
    habits = habits.filter(h => h.id !== id);
    saveHabits();
    renderHabits();
}

document.addEventListener("DOMContentLoaded", () => {
    checkAccountExists();
    loadHabits();
    renderHabits();

    const addBtn = document.querySelector("#add-btn");
    if (addBtn) {
        addBtn.addEventListener("click", addHabit);
    }

    const input = document.querySelector("#new-habit-input");
    if (input) {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") addHabit();
        });
    }
});