import './node_modules/reveal.js/dist/reveal.css'
import './node_modules/reveal.js/dist/theme/black.css'
import './node_modules/reveal.js/plugin/highlight/monokai.css'
import Highlight from './node_modules/reveal.js/plugin/highlight/highlight.esm.js';

import Reveal from 'reveal.js';
Reveal.initialize(
    {
        plugins: [Highlight, ]
    }
);