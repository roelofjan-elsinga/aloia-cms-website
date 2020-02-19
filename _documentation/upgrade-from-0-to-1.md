---
layout: documentation
title: Upgrade from 0.x to 1.0.0
permalink: /upgrade-from-0-to-1
---

# Upgrade from 0.x to 1.0.0

Upgrading to a new major version is never fun, because it takes a lot of work. However, a lot of effort is put into 
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