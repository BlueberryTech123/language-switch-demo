let languages = ["en", "cn"];
let languageIndex = 0;

function updateLanguageStyles() {
    for (let i = 0; i < languages.length; i++) {
        if (i == languageIndex) continue;

        let cur = languages[i];
        let elements = document.querySelectorAll(`.${cur}`);

        console.log(elements);

        // console.log(elements);
        // console.log(`Hidden .${cur} elements`);
        // elements.forEach((item) => {
        //     item.classList.add("hidden");
        // });

        for (let j = 0; j < elements.length; j++) {
            elements[j].classList.add("hidden");
            console.log(elements[j].classList);
            console.log(elements[j]);
        }
    }

    let curElements = document.querySelectorAll(`.${languages[languageIndex]}`);
    console.log(curElements);
    console.log("------------");
    // curElements.forEach((item) => {
    //     item.classList.remove("hidden");
    // });
    for (let j = 0; j < curElements.length; j++) {
        curElements[j].classList.remove("hidden");
        console.log(curElements[j].classList);
        console.log(curElements[j]);
    }

    console.log("=================================");
}

function changeLanguageIndex(index) {
    languageIndex = index;
    updateLanguageStyles();
}