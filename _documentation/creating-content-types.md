---
layout: documentation
title: Creating content types
permalink: /creating-content-types
---

# Creating content types

Creating a custom content type is very simple. All you have to do is create a class that extends ``AloiaCms\Models\Model``, 
specify a ``$folder_path``, and optionally add required fields to ``$required_fields``. An example can be found below:

```php
namespace App\Models;

use AloiaCms\Models\Model;

class PortfolioItem extends Model
{
    protected $folder = 'portfolio_items';

    protected $required_fields = [
        'name',
        'github_url',
        'description',
    ];
}
```

Once you have a class like this, you can interact with it like any other content type, as described at 
[Interacting with content]({% link _documentation/interacting-with-content.md %}).