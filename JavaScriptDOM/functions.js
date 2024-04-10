myFunctions = {
    getCompanyName: function() { // if this was standalone, then this would be a global scope
        return "SALT";
    },

    addListInMain: (x) => { // unordered list of x elements
        const ul = document.createElement("ul");
        for (let i = 0; i < x; i++) {
            const li = document.createElement("li");
            li.textContent = `Item ${i+1}`
            ul.appendChild(li);
        }

        const main = document.getElementsByTagName("main")[0];
        main.appendChild(ul);
    },

    removeItem: (id) => {
        const div = document.querySelector("div#" + id) // ensures to get a div element with an id ("div#")
        if (div) {
            div.remove()
        }
    }
}

function changeCSS() {
    
}

console.log("salt> Functions loaded");