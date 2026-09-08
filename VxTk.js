// I wrote this as sample code because you haven’t used any IDs or classes in index.html, and I don’t want to add them since they could alter your CSS design. I don’t want to interfere with that part. Please add some IDs and create a form document that can generate a form and its inputs; with a few IDs, this code will work.
console.log("🚀 VortexTrack Core Engine: Online & Connected!");

let habits = [];


const habitForm = document.querySelector("#habit-form");
const habitInput = document.querySelector("#habit-input");


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
