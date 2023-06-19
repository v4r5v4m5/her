const birthday = "10 September 2023 00:00 AM"

document.getElementById("birthday").innerHTML = birthday;
const inputs = document.querySelectorAll("input");
function herday(){
    const milliseconds = new Date(birthday);
    const today = new Date();
    const diff = (milliseconds - today)/1000;
    if (diff < 0) return;

    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600) % 24;
    inputs[2].value = Math.floor(diff/60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

herday();

// wastefellow();
// iluvyuh(<3);

setInterval(
    () => {
        herday()
    },
    1000
)
