javascript:(
    function() {
        const url = document
            .querySelector("meta[name='twitter:player:stream']")
            .getAttribute('content');
        window.location.href = url;
    }
)();
