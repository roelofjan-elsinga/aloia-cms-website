---
layout: documentation
title: Extending the built-in content types
permalink: /extending-built-in-content-types
---

# Extending the built-in content types

Aloia CMS models are simple PHP classes that extend the ``AloiaCms\Models\Model`` class.
The fact that the models are all just normal PHP classes, means you can easily extend the built-in content types:

- Page: ``AloiaCms\Models\Page``
- Article: ``AloiaCms\Models\Article``
- ContentBlock: ``AloiaCms\Models\ContentBlock``
- MetaTag: ``AloiaCms\Models\MetaTag``
- User: ``AloiaCms\Auth\User``

You can create your own implementation of the built-in model by extending it:

```php
namespace App\Models;

use Illuminate\Support\Collection;

class Page extends \AloiaCms\Models\Page
{
    // Let's return an optional field: an array that's called tags
    public function tags(): Collection
    {
        if ($this->has('tags')) {
            return Collection::make($this->get('tags'));
        }
    
        return new Collection();
    }
}
```

Now you'll need to reference your own implementation of the Page content type, rather than the built-in version:

```php
use AloiaCms\Models\Page;
```

becomes:

```php
use App\Models\Page;
```

Because the new Page model extends the built-in Page model, it still has all the features you're used to using, but you've added extra features that are useful for your own website.
