function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type(element: HTMLElement, text: string) {
    for (var i = 0; i < text.length; i++) {
        await key(text[i], element);
    }
}

async function key(charactor: string, element: HTMLElement) {
    switch (charactor) {
        case "+":
            // Pause
            element.className = "waiting typing";
            break;
        case "-":
            // Backspace
            element.className = "typing";
            element.innerHTML = element.innerHTML.slice(0, -1);
            break;
        case "^":
            // New line
            element.className = "";
            break;
        default:
            element.className = "typing";
            element.innerHTML = element.innerHTML + charactor;
    }
    await delay(100);
}

(async function () {
    var title = "++++Quality+++++--+---+-6++++ Tech+nolog++ies+++^";
    var sub = "contacr++-+t+@++q6tech.com+";

    var mainTitleElement = document.getElementById("maintitle");
    var subTitleElement = document.getElementById("subtitle");

    mainTitleElement.textContent = "";
    subTitleElement.textContent = "";
    document.body.className = "";

    await type(mainTitleElement, title);
    await type(subTitleElement, sub);
}());
