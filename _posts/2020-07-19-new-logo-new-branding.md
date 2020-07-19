---
title:  "New logo, new branding"
date:   2020-07-19 12:00:00 +0200
permalink: /articles/new-logo-new-branding
summary: | 
    As you might have seen, the website has a different look! 
    We've added a new logo to the website and adjusted the colors to go with the new logo.
---

As you might have seen, the website has a different look! 
We've added a new logo to the website and adjusted the colors to go with that logo.

## Branding colors in TailwindCSS
Most of the styling of this website is done through Tailwindcss, 
so the new color palette has been added in the configuration. These are the new colors:

```json
{
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
  }
}
```

The cold colors are the blues, the warm colors are the pinks/reds. 
These can be used for any design element or accent color on this website.

