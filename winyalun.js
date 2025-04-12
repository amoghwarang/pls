// Part (a): Using setTimeout and setInterval with funky styles
function displayWithDelay() {
    const messages = [
        { text: "Hello 👋", color: "red", font: "Comic Sans MS" },
        { text: "Why u should hire me? 🤔", color: "blue", font: "helvetica" },
        { text: "I try my best 😣", color: "green", font: "Papyrus" },
        { text: "I dont give up easily 😭", color: "purple", font: "Arial" },
        { text: "I'm a sigmaboi🐈", color: "orange", font: "Comic Sans MS" },
        { text: "pls pls pls pls 🙏🙏🙏", color: "black", font: "Comic Sans MS" }
    ];
    
    let index = 0;
    function showMessage() {
        document.body.innerHTML = ""; // Clear previous message
        const msg = messages[index];
        const messageElement = document.createElement("h1"); // Make text bigger
        messageElement.innerText = msg.text;
        messageElement.style.color = msg.color;
        messageElement.style.fontFamily = msg.font;
        messageElement.style.textAlign = "center";
        messageElement.style.position = "absolute";
        messageElement.style.top = "42%";
        messageElement.style.left = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";
        messageElement.style.fontSize = "6rem"; // Make font huge
        document.body.appendChild(messageElement);
        
        index = (index + 1) % messages.length; // Loop through messages
        setTimeout(showMessage, 2000); // Show next message after 2 seconds
    }
    
    showMessage();
}

displayWithDelay();

// Part (a) continued: Using setInterval
function repeatedMessage() {
    let count = 0;
    const interval = setInterval(() => {
        console.log("Repeating this message every 2 seconds!", count);
        count++;
        if (count === 5) {
            clearInterval(interval);
            console.log("Stopped interval after 5 repeats.");
        }
    }, 2000);
}

repeatedMessage();

// Part (b): Displaying "Hello" instead of fetching data
function displayHello() {
    const output = document.getElementById("output");
    output.innerHTML = `<h1 style='color: purple; font-family: Arial; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 6rem;'>Hello 👋</h1>`;
}

displayHello();