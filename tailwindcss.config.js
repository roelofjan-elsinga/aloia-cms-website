module.exports = {
    purge: [
        './**/*.html',
        './**/*.md',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#333',
                cold: {
                    lightest: 'hsl(200,100%,95%)',
                    lighter: 'hsl(200,100%,85%)',
                    light: 'hsl(200,100%,75%)',
                    default: 'hsl(200,100%,45%)',
                    dark: 'hsl(213,90%,35%)',
                    darker: 'hsl(213,90%,25%)',
                    darkest: 'hsl(213,90%,15%)'
                },
                warm: {
                    lightest: 'hsl(350,100%,95%)',
                    lighter: 'hsl(350,100%,80%)',
                    light: 'hsl(350,100%,70%)',
                    default: 'hsl(350,85%,60%)',
                    dark: 'hsl(325,85%,50%)',
                    darker: 'hsl(325,85%,30%)',
                    darkest: 'hsl(325,85%,20%)'
                }
            }
        }
    },
    variants: {},
    plugins: [],
};