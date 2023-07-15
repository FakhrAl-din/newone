const display = document.querySelector("#display");
const speed = 20;
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab, numquam qui, minima nemo dolores harum aliquid quos, amet aspernatur labore illo ipsa doloremque praesentium beatae rem ipsum. Fugiat, fuga?";
let index = 0;


function motion() {
    display.textContent += text[index];
    index++;
    if (index < text.length) {
        setTimeout(motion, speed)
    }
}

motion();



