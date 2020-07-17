---
title:  "Aloia CMS GUI 3.3.0: Extendible articles"
date:   2020-07-12 12:00:00 +0200
permalink: /articles/extendible-articles-version-3-3-0
summary: | 
    Articles, one of the built-in content types of Aloia CMS, were already extendible through code 
    editors and IDE's, but now they're also extendible through the GUI package. 
    You can extend the article objects to contain any properties you might need for your websites.
---

Articles, one of the built-in content types of Aloia CMS, were already extendible through code 
editors and IDE's, but now they're also extendible through the GUI package. 
You can extend the article objects to contain any properties you might need for your websites.

## How it works

Extending the default fields in the GUI package is as easy as defining new fields in a blade file:

```bash
resources/views/vendor/aloiacmsgui/articles/custom_content.blade.php
```

The FormRequest will save any non-standard fields on your articles and will even parse a JSON string 
and save that as a nested array on the front matter in your article file.

This is how these non-standard fields will be saved onto your articles:

```php
# AloiaCms\GUI\Requests\CreateArticleRequest

private function storeCustomData(&$article): void
{
    $storable_data = $this->except([
        '_method',
        '_token',
        'description',
        'post_date',
        'is_published',
        'is_scheduled',
        'content',
        'faq',
        'file_type',
        'slug'
    ]);

    foreach ($storable_data as $key => $value) {
        if (Json::isValid($value)) {
            $value = json_decode($value, true);
        }

        $article->addMatter($key, $value);
    }
}
```

You can provide values as flat values (integers, strings, booleans), arrays, or JSON strings. 
JSON strings will be converted to arrays before saving. 
Accepting JSON strings makes it easier to use a front-end library or framework to 
manipulate the DOM and send this data to the server.

### Editing articles
When you're editing an article, the same blade file is injected into that form. 
This means that you might have to add behaviour to account for existing or empty values.

### Optional
Using this method of extending the management forms for articles is completely optional.
You can choose to not use it and it won't break backward-compatibility.

