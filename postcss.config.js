const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        // Jekyll output directory
        './_site/**/*.html',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        require('tailwindcss')('./tailwindcss.config.js'),
        require('cssnano')(),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
};