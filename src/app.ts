function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type(elementId: string, text: string) {
    var element = document.getElementById(elementId);
    element.innerHTML = "";
    for (var i = 0; i < text.length; i++) {
        await key(text[i], element);
    }
}

async function key(charactor, element: HTMLElement) {
    var isCommand = charactor === "+" || charactor === "^";
    element.className = isCommand ? charactor === "^" ? "" : "waiting typing" : "typing";
    element.innerHTML = charactor === "-" ? element.innerHTML.slice(0, -1) : element.innerHTML += isCommand ? "" : charactor;

    await delay(100);
}

(async function () {
    var title = "++++++++q6tech+--++com^";
    var sub = "contact++-++@++q6tech.com+";

    await type("maintitle", title);
    await type("subtitle", sub);
}());
