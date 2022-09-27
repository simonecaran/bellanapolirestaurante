import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
             'resources/js/appEN.js',
             'resources/js/appIT.js',
             'resources/js/appES.js'
        ]
        ),
    ],
});
