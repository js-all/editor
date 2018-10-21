var data = {
    color: {
        bg: {
            editor: new rgb(50, 50, 60),
            code: new rgb(60, 60, 70),
            thum: new rgb(70, 120, 190)
        },
        code: {
            basic: new rgb.white(),
            keyW: new rgb(140, 70, 160)
        }
    },
    char: {
        size:20
    },
    reg: {
        keyW: {
            start: "(?:[ \\n;\\)\\w])",
            end: "(?=[ \\(])",
            words: [
                "function",
                "var",
                "new"
            ]
        }
    }
}