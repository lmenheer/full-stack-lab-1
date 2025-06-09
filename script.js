// get node of term list

const terms = ["SEO", "Abstraction", "IDE", "OOP", "Runtime"];

const populateTermList = (listNode, terms) => {
    terms.forEach(term => {
        const newLiNode = document.createElement("li");
        newLiNode.innerHTML = `<a href="#">${term}</a>`;

        listNode.appendChild(newLiNode);
    });
}

window.onload = () => {
    const termListNode = document.querySelector(".top-terms__list");

    populateTermList(termListNode, terms);
}