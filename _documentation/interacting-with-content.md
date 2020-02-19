---
layout: documentation
title: Interacting with content
permalink: /interacting-with-content
---

# Interacting with content

In this example we're looking at one of the built-in content types: Article. 
You can use these same steps for all classes that extend from "AloiaCms\Models\Model".


To load all articles in the "articles" folder in the folder you specified in 
``config('aloiacms.collection_path')`` you can use the following script:

```php
use AloiaCms\Models\Article;
use Illuminate\Support\Collection;

/**@var Article[]|Collection*/
$articles = Article::all();
```

You can use that to display your posts on a page. You can also load a single post, using:

```php
$article = Article::find('this-post-is-amazing');
```

If you only want all published posts, you'll need to retrieve them like so:

```php
$published_articles = Article::published();
```

To get the raw contents of each article (content + front matter), you can use:

```php
$articles = Article::find('this-post-is-amazing')->rawContent();
```

And finally, to update your article, you can run:

```php
use Carbon\Carbon;

Article::find('this-post-is-amazing')
    ->setExtension('md') // md is the default, but you can use html as well.
    ->setMatter([
        'description' => 'This post is about beautiful things',
        'is_published' => true,
        'is_sechduled' => false,
        // Either use post_date in setMatter() or setPostDate()
        'post_date' => date('Y-m-d')
    ])
    ->setPostDate(Carbon::now())
    ->setBody('# This is the content of an article')
    ->save();
```