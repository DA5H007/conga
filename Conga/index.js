window.addEventListener('load', () => {

    // Adding event listener on buttons
    const conga = document.querySelectorAll(".conga");
    for (let i = 0; i < conga.length; i++) {
        conga[i].addEventListener("click", function () {
            makeSound(this.innerHTML);
            makeAnimation(this.innerHTML);
        });
    }

    // Event listener on Document when keys are pressed
    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
        makeAnimation(event.key);
    });

    // Function to Play sound
    const makeSound = event => {
        if (event === "s") {
            let s = new Audio("sounds/a-808-conga-tom_150bpm_C_major.wav");
            s.play();
        }
        else if (event === "d") {
            let d = new Audio("sounds/b-quick-conga_c_minor.wav");
            d.play();
        }
        else if (event === "f") {
            let f = new Audio("sounds/c-dry-conga-bongo-tom_F_minor.wav");
            f.play();
        }
        else if (event === "j") {
            let j = new Audio("sounds/d-short-conga-tom.wav");
            j.play();
        }
        else if (event === "k") {
            let k = new Audio("sounds/e-old-school-conga-hit_C_major.wav");
            k.play();
        }
        else {
            alert('Not an key to play music')
        }
    }

    // Function to show animation when button is clicked
    const makeAnimation = event => {
        document.querySelector("." + event).classList.add("pressed");
        setTimeout(function () {
            document.querySelector("." + event).classList.remove("pressed");
        }, 100);
    }
})
