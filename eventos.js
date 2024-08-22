document.addEventListener("DOMContentLoaded", function() {  
    const div = document.querySelector("div");  
    div.addEventListener("click", function() {  
        alert("Hola! Soy el div");  
    }); 
    
    const button = document.querySelector("button");  
    button.addEventListener("click", function(event) {  
        event.stopPropagation(); // Detiene la propagación del evento  
        alert("Hola!");  
    });
});