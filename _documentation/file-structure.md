---
layout: documentation
title: File structure
permalink: /file-structure
---

# File structure

On this page, we're going to look at the file structure of the CMS.
As the CMS is a flat-file CMS, all content is saved in files, be it Markdown, HTML, or something else.

This is what we'll cover:
1. [Where are files saved?](#file_location)
2. [How are models saved to files?](#how_saved)
2. [Deleting models](#deletion)

## Where are files saved? {#file_location}
Files are saved in the folder you specify in the config file (aloiacms.php) under the ``collections_path`` key: ``config('aloiacms.collections_path')``.

The default location where the files are saved is: ``resource_path('content/collections')``.

You can change this to any folder you prefer, for example: ``storage_path('app/collections')``.

Each model is saved in it's own folder. 

If we assume that you're saving the Article model, which at it's most basic form looks like this:

```php
namespace AloiaCms\Models;

class Article extends Model
{
    protected $folder = 'articles';
}
```

This model instance will be saved to ``resources/content/collections/articles/file-name.extension``.

## How are models saved to files? {#how_saved}

When you're saving your first model, these are the steps the base model goes through to persist your data to disk:

1. A "PreModelSaved" event is dispatched
2. Properties and body content are converted to markdown/html and front matter is added
3. We verify if you've supplied a filename (ex. Article::find('filename-here'))
4. We verify if you've supplied the [required front matter]({% link _documentation/creating-content-types.md %}) (none by default)
5. We get the filepath for the model. This creates the folder if it doesn't already exist (ex. articles)
6. The content + front matter is persisted to a file on the filepath (step 5)
7. A "PostModelSaved" event is dispatched

When you update a model, it goes through these exact steps and skips steps where possible.

## Deleting models {#deletion}
As Aloia is a flat-file CMS, deleting a model is nothing more than deleting a file.
Before deleting the file, a "PreModelDeleted" event is dispatched.
After deleting the file, a "PostModelDeleted" event is dispatched.

You can hook into these events to do any cleanup you might need to do.