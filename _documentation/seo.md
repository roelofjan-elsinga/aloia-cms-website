---
layout: documentation
title: SEO
permalink: /seo
---

# SEO

A content management system is often great for SEO, because it helps you to not skip a step.
Aloia CMS is no different when it comes to great content and great SEO.

## Sitemap

Aloia CMS makes it easy to generate a sitemap from the flat-file models you've already created.

The default configuration file has a section that's dedicated to the sitemap:

```php
[
    /*
     * The seo key allows you to customize certain SEO specific generator features
     * */
    'seo' => [

        /*
         * Specify the path at which you'd like the sitemap to be generated
         */

        'sitemap_path' => public_path('sitemap.xml'),

        /*
         * Specify which models you want to include in your sitemap, and at which URL they can be found
         */

        'sitemap' => [

            [
                'model' => \AloiaCms\Models\Page::class,
                'path' => '/{id}',
                'priority' => 0.9,
                'change_frequency' => \AloiaCms\Seo\Sitemap\ChangeFrequency::Monthly,
            ],

            [
                'model' => \AloiaCms\Models\Article::class,
                'path' => '/articles/{id}',
                'priority' => 0.8,
                'change_frequency' => \AloiaCms\Seo\Sitemap\ChangeFrequency::Weekly,
            ]

        ],

    ]
]
```

As you can see, you can specify the sitemap name and location, while also specifying the content types you'd like to include in the sitemap.
When you choose to include a model, for example ``Article``, you can customize the path at which the resource is displayed on a page.

In order to properly include your domain name in the sitemap, you'll have to set the ``APP_URL`` environment variable.
Laravel uses this for URL generation already, so Aloia CMS uses it for the same reason.

After you've configured the sitemap, you can generate it:

```php
php artisan aloiacms:sitemap
```

And you should now see a ``sitemap.xml`` appear in your public folder, complete with the domain, and url path.