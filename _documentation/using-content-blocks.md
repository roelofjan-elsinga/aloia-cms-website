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

You can also include content blocks in your HTML and Markdown files. You can add several different attributes 
to enhance these content blocks:

- class
- id
- style
- href

The class, id, and style will be applied to a wrapping div around the content in the block.
The link in the href attribute will be applied to a wrapping anchor tag inside the wrapping div.

Examples:

Using a content block in a HTML or Markdown file managed through the CMS:

```html
<!--content.html-->
<h1>This is a title</h1>

<!--page managed through the CMS-->
===content===

<!--resulting HTML output-->
<div>
    <h1>This is a title</h1>
</div>
```

Adding a class to the content block:

```html
<!--content.html-->
<h1>This is a title</h1>

<!--page managed through the CMS-->
===content[class=primary-block]===

<!--resulting HTML output-->
<div class="primary-block">
    <h1>This is a title</h1>
</div>
```

Adding multiple classes and a style tag to the content block:

```html
<!--content.html-->
<h1>This is a title</h1>

<!--page managed through the CMS-->
===content[class=block primary-block,style=color:red;]===

<!--resulting HTML output-->
<div class="block primary-block" style="color:red;">
    <h1>This is a title</h1>
</div>
```

When you add a href attribute to the content block, you get a nested anchor tag:
```html
<!--content.html-->
<h1>This is a title</h1>

<!--page managed through the CMS-->
===content[class=primary-block,href=/link-to-a-page]===

<!--resulting HTML output-->
<div class="primary-block">
    <a href="/link-to-a-page">
        <h1>This is a title</h1>
    </a>
</div>
```

This facade will look for a file in the folder you specified in 
``config('aloiacms.collections_path')``. 
The Facade will parse the contents of the file to HTML to be able to render it. 
If no file could be found, an empty string will be returned.

NOTE: You should not specify the extension of the filename you're passing to ``Block::get()``.
This will be parsed automatically.