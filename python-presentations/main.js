import Reveal from 'reveal.js';
import './node_modules/reveal.js/dist/reveal.css'
import './node_modules/reveal.js/dist/theme/black.css'
import './node_modules/reveal.js/plugin/highlight/monokai.css'
import Highlight from './node_modules/reveal.js/plugin/highlight/highlight.esm.js';
import './style.css';
import './fonts/Virgil.woff2';

const Externalcode = {
    id: "externalcode",
    init: (reveal) => {
        function fetchDataCodeSection(section) {
            let url = section.getAttribute("data-code");
            return fetch(url)
                .then((response) => response.text())
                .then((data) => {
                    section.textContent = data;
                });
        }

        function fetchHtmlSection(section) {
            let url = section.getAttribute("html-insert");
            return fetch(url)
                .then((response) => response.text())
                .then((data) => {
                    section.innerHTML = data;
                });
        }

        var sections = document.querySelectorAll("[data-code], [html-insert]");
        var promiseArray = new Array(sections.length);

        for (var i = 0, len = sections.length; i < len; i++) {
            let section = sections[i];
            if (section.getAttribute("data-code") != null) {
                promiseArray[i] = fetchDataCodeSection(section);
            }

            if (section.getAttribute("html-insert") != null) {
                promiseArray[i] = fetchHtmlSection(section);
            }
        }
        return Promise.all(promiseArray);
    },
};


Reveal.initialize(
    {
        plugins: [Externalcode, Highlight]
    }
);