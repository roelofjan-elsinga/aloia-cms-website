---
title:  "Aloia CMS 4.1.0: An SEO Module"
date:   2022-05-06 17:00:00 +0200
permalink: /articles/seo-module
summary: |
    SEO is vital for your website to be found on the internet.
    Aloia CMS gets out of your way, but also gives you superpowers from time to time.
    Aloia CMS will now generate a sitemap of your content types for you, with minimal effort.
---

SEO is vital for your website to be found on the internet.
Aloia CMS prides itself on getting out of your way and just getting the job done.
It lets you focus on writing your content and takes care of the technical parts.

With that in mind, it only makes sense that we're giving your content the attention it deserves.
You put a lot of effort in your content, so naturally, you want others to find it and read it.
In comes SEO.

With the 4.1.0 release, Aloia CMS will now generate a sitemap of your content types for you, with minimal effort.
You can specify the path of your sitemap, the content types you'd like to include, and then all you have to do is run a command:

```php
php artisan aloiacms:sitemap
```

Have a look at the new documentation for the sitemap at: [SEO]({% link _documentation/seo.md %}).

## But what if I already have a sitemap?

By default, this command will create a sitemap at ``public/sitemap.xml``, but if you've got multiple sitemaps, you can generate it in a different file and include it in a "main" sitemap.

For example: setting ``aloiacms.seo.sitemap_path`` to ``public_path('aloiacms.xml')``, will now generate your sitemap at ``public/aloiacms.xml``.
You can combine multiple sitemaps in a single ``sitemap.xml`` like so:

```xml
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://your-website.com/aloiacms.xml</loc>
        <lastmod>2022-01-11T12:00:05+01:00</lastmod>
    </sitemap>
    <sitemap>
        <loc>https://your-website.com/another-sitemap.xml</loc>
        <lastmod>2022-01-11T12:00:05+01:00</lastmod>
    </sitemap>
</sitemapindex>
```

