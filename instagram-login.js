javascript:(
    function() {
        const presentation_divs = document.querySelectorAll('div[role=presentation]');
        const target = presentation_divs[presentation_divs.length - 1];
        target.remove();
        document.querySelector('body').setAttribute('style', 'overflow: auto');
    }
)();
