export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}


export function splitIntoWords(sentence: string) {
    // return sentence.toLowerCase().split(" ")
    //     .filter(w => w !== "")
    //     .map(w => w.replace("!", ""));

    const words = sentence.toLowerCase().split(" ");

    return words.filter(w =>
        w !== "" && w !== "-")
        .map(w => w
            .replace("!", "")
            .replace(".", "")
            .replace(",", "")
        );
}