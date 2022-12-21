import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                rules: resolve(__dirname, 'rules.html'),
                impressions: resolve(__dirname, 'impressions.html'),
                spiritofcurling: resolve(__dirname, 'spiritofcurling.html'),
            },
        }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'partials'),
    })],
};