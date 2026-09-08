
console.log("🚀 VortexTrack Core Engine: Online & Connected!");

let habits = [];


const habitForm = document.querySelector("#habit-form");
const habitInput = document.querySelector("#habit-input");

// 3. Event Listener to capture the Form Submission
habitForm.addEventListener("submit", function(event) {
    
    event.preventDefault(); 
    
    
    let habitText = habitInput.value.trim();
    
    if (habitText !== "") {
     
        let newHabit = {
            id: Date.now(), 
            name: habitText,
            completed: false
        };
        

        habits.push(newHabit);
        
        
        habitInput.value = "";
        
      
        console.log("✅ Success! Current Habits Array Data:", habits);
        

        alert(`Engine captured: "${newHabit.name}" successfully!`);
    }
});
