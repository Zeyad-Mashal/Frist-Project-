// Check IF there's Local Storage color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    // console.log("Local Storage In Not Empty");
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    // Remove Active Class From All Colors li
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

    //Add Active Class On Element with data-color === local storage item
    if (element.dataset.color === mainColors) {
        // Add Active Class
        element.classList.add("active");

    }

    });

}

// Random Background Option
let BackgroundOption = true;

// Variable to control the intarval
let BackgroundIntarval;

// Check If There's Local Storage Random background item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random background is not empty
if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === 'true') {

        BackgroundOption = true;

    } else {

        BackgroundOption = false;

    }
    // Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }

}

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings").onclick = function () {
    // Toggle Class Fa-spin For Rotation On Self
    document.querySelector(".fa-gear").classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All Li
colorsLi.forEach (li => {

    // Click on Every Li
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);

    });
});

// Switch Random Background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach (span => {

    // Click on Every Span
    span.addEventListener("click", (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes') {

            BackgroundOption =true;

            randomizeImgs();

            localStorage.setItem("background_option", true);

        } else {
            BackgroundOption =false;

            clearInterval(BackgroundIntarval);

            localStorage.setItem("background_option", false);
        }
    });
});

let laningPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "0.5.jpeg", "05.jpg"];

// Function To Randomize Imgs
function randomizeImgs () {

    if (BackgroundOption === true) {

        BackgroundIntarval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
        
            laningPage.style.backgroundImage = 'url("imgs/' +imgsArray[randomNumber]+ '")';
        
        }, 5000);
        

    }
}
randomizeImgs();


// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.scrollY;

    if (windowScrollTop >= (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allskills = document.querySelectorAll(".skill-box .skill-progress span");

        allskills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });
    }
};

// Create Poup With The Images
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener("click", (e) => {

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay 
        overlay.className = "poup-overlay";

        // Append Overlay To bady
        document.body.appendChild(overlay);

        // Create The Poup Box
        let poupBox = document.createElement("div");

        // Add Class 
        poupBox.className = "poup-box";

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create text for heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To the heading
            imgHeading.appendChild(imgText);

            // Append The Heading To the box
            poupBox.appendChild(imgHeading);
            
        }

        // Create The Image
        let poupImage = document.createElement("img");

        // Set Iamge Source 
        poupImage.src = img.src;

        // Add Image Tp Poup 
        poupBox.appendChild(poupImage);

        // Append The Poupbox To The Body
        document.body.appendChild(poupBox);

        //  Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButText);

        // Add Class To Close Button
        closeButton.className = "close-button";

        // Append Close Button To Poup-box
        poupBox.appendChild(closeButton);

    });

});

document.addEventListener("click", function (el) {

    if (el.target.className == 'close-button') {

        el.target.parentNode.remove();

        document.querySelector(".poup-overlay").remove();

    }

})

// Close Poup
document.addEventListener("click", (e) => {

    if (e.target.className == "poup-overlay") {

        // Remove The overlay
        document.querySelector(".poup-overlay").remove();

        // remove poup box
        document.querySelector(".poup-box").remove();
        

    }
});

// Select All Bullets V.IMP
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links V.IMP
const allLinks = document.querySelectorAll(".links a");

function scrollToLinks (elements) {

    elements.forEach(ele  => {

        ele.addEventListener("click",(e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
    
            });
    
        });
    
    });

}
scrollToLinks(allBullets);
scrollToLinks(allLinks);

// Handle Active State
function handleActive (ev) {

        //Remove Active Class From All Spans
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");
        });
    
        // Add Active Class On Self 
        ev.target.classList.add("active");
}

// Select Bullets-Option
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }

}
// Local Storage Option V.IMp
bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');

        } else {
            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'none');
        }

        handleActive(e);

    });

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

    // localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    window.location.reload();

};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");

};

// Click Anywhere 
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check If Menu Is Open
        if (tLinks.classList.contains("open")) {

            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open");

        }

    }

});

// Stop Propagation
tLinks.onclick = function (e) {
    e.stopPropagation(); 
}