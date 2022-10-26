---
title:  "Aloia CMS 4.2.0: Cleaner & more convenient models"
date:   2022-10-22 20:20:00 +0200
permalink: /articles/cleaner-convenient-models
summary: |
    Clean and readable code is the most important part of write software that's maintainable and a joy to work with. Aloia CMS is all about getting out of your way, but we still had some quirks that could be better. It just got better!
---

Clean and readable code is the most important part of write software that's maintainable and a joy to work with. Aloia CMS is all about getting out of your way, but we still had some quirks that could be better. It just got better!

In Aloia CMS 4.2.0, we've introduced 2 improvements to make models nice to work with. 

## Dynamic folder guessing
The first is a contribution by [@juliomotol](https://github.com/juliomotol) who added a dynamic folder name guesser. This change has no impact on any of your existing models, but does make new models cleaner. Example time!

Before:
```php
use AloiaCms\Models\Model;

class Tutorial extends Model {
    
    protected $folder = 'tutorials';
    
}
```

After:

```php
use AloiaCms\Models\Model;

class Tutorial extends Model {
    
}
```

The folder name will still be `tutorials`, but you won't have to specify it anymore. Of course, if you want to place it in a different folder, you can still define your own folder name.

## Magic setter

The second improvement is the use of the magic setter method for models. This makes your code less verbose and easier to read.

Before:

```php
$tutorial = Tutorial::find('episode-1');

$tutorial->set('title', 'Episode 1');
```

After:
```php
$tutorial = Tutorial::find('episode-1');

$tutorial->title = 'Episode 1';
```

This change makes your code easier to read. One nice benefit of using the magic setter is that you can also set the body content using this method:

```php
$tutorial = Tutorial::find('episode-1');

$tutorial->body = '# Episode 1';
```

This will be assigned to the body, rather than the front-matter of your file. This makes the API of the model a little more consistent and overall easier to read.