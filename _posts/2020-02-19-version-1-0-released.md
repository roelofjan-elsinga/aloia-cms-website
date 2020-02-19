---
title:  "Version 1.0.0 has released!"
date:   2020-02-19 08:00:00 +0200
categories: product
permalink: /articles/version-1-0-released
summary: | 
    Version 1.0.0 has finally released and it's more powerful than ever before! Before upgrading from v0.x, 
    here are the changes that made this new major version happen.
---

This first stable release of the CMS contains a lot of breaking changes compared to version 0.x.
This post will go over those changes and will address the upgrade path.

Here are the breaking changes:

### Article, Page, ContentBlock, and MetaTags are now collections
In version 0.x Article, Page, ContentBlock, and MetaTags were very specific, built-in classes in the CMS. 
These were added over time, as they were needed. These entities consisted of two elements: configuration, and content.
The configuration was stored in JSON and Yaml files, while the content was stored in HTML and Markdown files. 
This meant that the content for a single entity had to come from different places, which left a lot of room for error.
The public API for these content types was also not similar, and it required looking through the source code to figure 
out what the method was you needed.

In version 1.0.0 this has all been changed. These entities are still built into the CMS but are now all based on a common 
parent: Model. This means you can interact the same way with each of these elements. This also means that creating custom 
content types is very easy. You can read more about that at 
[Creating content types]({% link _documentation/creating-content-types.md %}). 
The configuration and content part are also unified in a single file. The configuration is now done through front matter, 
a Yaml based configuration, in the content files themselves. This removes a layer of potential errors and simplifies 
the content creation significantly: everything you need to know is right there.

### The project has a new name
The project used to be called ``flat-file-cms``, but is now called ``aloia-cms``. This means you will need to update the 
package name in your composer.json file. Along with this name change, the namespace of the project has been changed from 
``FlatFileCms`` to ``AloiaCms``, so be sure to update those in your code as well. This name change is also reflected in 
the filename of the config file: ``flatfilecms`` to ``aloiacms``. So if you exported the configuration to make any 
changes to this, be sure to rename the file to ``aloiacms.php``.

### The configuration file has been updated
Version 0.x relied very heavily on the content that was specified in the configuration file. This has been reduced by a lot, as the content types are now all based upon "Model". This means you should add the following key to your config file:

```php
// aloiacms.php
return [
    
    // ...

    /*
     * This value represents the folder locations where the collections are saved
     * */
    'collections_path' => resource_path('content/collections'),

    // ...

];
```

The following keys will be removed from the configuration file in a future version:
- pages
- articles
- content_blocks
- meta_tags
- taxonomy

The configuration for these items is now all contained within the Collection Model.

### Deprecations
Besides the fact that the namespace and package name has changed, the old classes are still available for you to use.
The following classes/interfaces are deprecated and will be removed in a future update:

- AloiaCms\Contracts\ArticleInterface
- AloiaCms\Contracts\ContentInterface
- AloiaCms\Contracts\DataSourceInterface
- AloiaCms\Contracts\PageInterface
- AloiaCms\Article
- AloiaCms\Page
- AloiaCms\Content
- AloiaCms\TagsParser
- AloiaCms\DataSource\Article
- AloiaCms\DataSource\Page
- AloiaCms\DataSource\Page
- AloiaCms\Taxonomy\Taxonomy
- AloiaCms\Taxonomy\TaxonomyCollection
- AloiaCms\Taxonomy\TaxonomyLevel

### How to upgrade from v0.x
Upgrading to a new major version is never fun because it takes a lot of work. However, a lot of effort is put into 
making this go as smoothly as possible. You can use a command that will migrate all of your content, 
that the CMS officially supported, from the old format into the new. 

```bash
php artisan aloiacms:upgrade-0-to-1
```

This takes about 5ms and will combine all 
configuration with the content into files in the collections folder, or the folder you've specified. 
The public API for the content types has changed a little bit, but the most important part is this one: 

```php
$article = AloiaCms\Article::forSlug('post-slug');
// becomes
$article = AloiaCms\Models\Article::find('post-slug');
```

This namespace change goes for all content types (Article, Page, ContentBlock, MetaTag) and so does the 
change from ``forSlug()`` to ``find()``.

Hopefully, you enjoy this new version of the CMS. It certainly has become much easier to manage content 
and add new custom content types in your own project. If you don't want to upgrade, that's fine too, 
version 0.x will always exist.