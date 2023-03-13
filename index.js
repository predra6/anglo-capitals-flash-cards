const flashcards = [
    {
        front: "Capital of USA",
        back: "Washington, D.C."
    }, 
    {
        front: "Capital of Canada",
        back: "Ottawa"
    }, 
    {
        front: "Capital of UK",
        back: "London"
    },
    {
        front: "Capital of Ireland",
        back: "Dublin"
    },
    {
        front: "Capital of Australia",
        back: "Canberra"
    },
    {
        front: "Capital of New Zealand",
        back: "Wellington"
    }
]

flashcards.forEach((flashcard, i) => {
    const main = document.getElementById("main")
    const article = document.createElement("article")
    article.classList.add("card")
    const div = document.createElement("div")
    div.classList.add("card-body")
    const p = document.createElement("p")
    p.classList.add("card-text")
    p.textContent = flashcard.front
    p.setAttribute("id", `card-${i}`)
    const button = document.createElement("button")
    button.textContent = "Flip me"
    button.classList.add("btn", "btn-primary", "mx-auto")
    button.addEventListener("click", () => {
        prompt("Tell me what you think first?")
        p.textContent = flashcard.back
        button.disabled = true;
    })
    div.appendChild(p)
    div.appendChild(button)
    article.appendChild(div)
    main.appendChild(article)
})
