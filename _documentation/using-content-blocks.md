---
layout: documentation
title: Using content blocks
permalink: /using-content-blocks
---

# Using content blocks

You can manage small content blocks for your website through this package.

The content of the blocks are stored in a folder called "content_blocks" 
inside of the ``config('aloiacms.collections_path')`` folder.

You'll need to register the facade into your application, by placing the following 
line to your aliases in ``config/app.php``:

```php
'Block' => \AloiaCms\Facades\BlockFacade::class,
```

Now you can use the facade in your blade views by using:

```php
{!! Block::get('content-file-name') !!}
```

### Example

If we've got the following content block, located at ``storage/app/collections/content_blocks/test.md``:

```markdown
## Title of the content

This is a paragraph
```

and you place the following code snippet in your blade file:

```php
{!! Block::get('test') !!}
```

this will render the following HTML on your page:

```html
<h2>Title of the content</h2>

<p>This is a paragraph</p>
```

It's a simple content block management tool, which parses markdown files using the [erusev/parsedown-extra](https://github.com/erusev/parsedown-extra) package.