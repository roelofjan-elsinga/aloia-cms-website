---
title:  "Laravel 8 support + improved data manipulation methods"
date:   2020-10-20 19:00:00 +0200
permalink: /articles/laravel-8-support-and-more
summary: | 
    Aloia CMS 3.2.0 has been released with Laravel 8 support and improved getter and setter methods.
    These getters and setters have been an effort in giving methods an easy to remember name.
---

Aloia CMS 3.2.0 has been released with Laravel 8 support and improved getter and setter methods.

Here are the improvements as they've been implemented:

This change introduces a backward compatible change in getting and setting data on models:

## Changes
- addMatter(string $key, $value) is deprecated and now calls set(string $key, $value) under the hood
- setMatter(array $matter) now won't overwrite data that wasn't provided in the input array. (example below)
- __get(string $key) now calls get(string $key) under the hood, instead of directly accessing the matter array

## Additions
- Added has(string $key) method to check if data is present in the model.
- Added get(string $key) method as a cleaner way to get a single value from the model.
- Added set(string $key, $value) method as a better named alternative to addMatter().
- Added remove(string $key) method to remove a data key from the model.

## Example
When you set initial values on a model:
```php
$article = \AloiaCms\Models\Article::find('testing')
    ->setMatter([
        'title' => 'Article title',
        'description' => 'description'
    ]);
```
And then set more data but with different keys:
```php
$article = \AloiaCms\Models\Article::find('testing')
    ->setMatter([
        'summary' => 'Article summary',
        'description' => 'Article description'
    ]);
```
will now result in data that looks like this:

```php
[
    'title' => 'Article title',
    'description' => 'Article description',
    'summary' => 'Article summary'
];
```
instead of what it resulted in before this change:
```php
[
    'description' => 'Article description',
    'summary' => 'Article summary'
];
```
Only the provided keys are overwritten. So using setMatter() is no longer necessarily a destructive action.
