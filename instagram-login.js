javascript:(
    function() {
        const divs = document.querySelectorAll("div");
        const target = [...divs].filter(x => x.textContent === "Log in to continue")[0];
        const toDelete = target.parentNode.parentNode.parentNode;
        toDelete.remove();

        const body = document.querySelector("body");
        body.setAttribute("style", "overflow: auto;");
    }
)();
