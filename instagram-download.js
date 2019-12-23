javascript:(
    function() {
        const pics = document.querySelector("article").querySelectorAll("img");
        const non_profile_pics = [...pics].filter(x => x.getAttribute("decoding") !== null);
        const non_profile_pics_urls = non_profile_pics.map(x => x.getAttribute("src"));
        /* Only takes the first one for now */
        const url = non_profile_pics_urls[0];
        window.location.href = url;
    }
)();
