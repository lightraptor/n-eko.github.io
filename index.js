const body = document.querySelector("body"),
      home = document.querySelector(".home-session")
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
     // searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");
    if(getMode && getMode ==="dark-mode"){
        body.classList.add("dark");
        home.classList.add("dark");
    }

//js code to toggle dark and light mode 

//  modeToggle.addEventListener("click", () => {
//      modeToggle.classList.toggle("active");
//      body.classList.toggle("dark");
//      home.classList.toggle("dark");


//      //js code to keep user selected mode even page refresh or file reopen
//      if(!body.classList.contains("dark")) {
//          localStorage.setItem("mode", "light-mode");
//      }
//      else {
//          localStorage.setItem("mode" , "dark-mode");
//      }
//  });

//js code to toggle sidebar 
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click", e => {
    let clickedE = e.target; 

    if(!clickedE.classList.contains("sidebarOpen") && 
    !clickedE.classList.contains("menu"))
    {
        nav.classList.remove("active");
    }
});

//Loading effect 

// coming soon
function unknown() {
    alert("Coming soon!");
}