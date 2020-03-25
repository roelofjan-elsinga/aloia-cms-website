---
title:  "Compatibility with Laravel 6 and 7"
date:   2020-03-25 12:00:00 +0200
categories: product
permalink: /articles/laravel-6-7-compatibility
summary: | 
    Aloia CMS is now compatible with Laravel 6 and Laravel 7. 
    This post is about the recent changes and which version you should be using for your projects.
---

Aloia CMS version 2.0.0 and 3.0.0 have been released! This is all done in an effort to support the newer Laravel versions. 
The major update from last month (1.0.0) was only compatible with Laravel 5. These new major versions added the support 
for Laravel 6 and Laravel 7.

## Which one should you use for your project?
These two major versions are all related to the major version changes in Laravel. So picking a version for your project is quite simple:

- Laravel ^6.0 uses version ^2.0
- Laravel ^7.0 uses version ^3.0

## Removed deprecated code
In version 1.0.0, a lot of code from version 0.x was deprecated. Everything that was marked as deprecated in 
version 1.0.0 has been removed as of version 2.0.0. If you want to see the full list of deprecations, you can read about 
it in the [Release notes for version 1.0.0]({% link _posts/2020-02-19-version-1-0-released.md %}#deprecations).

## Backward compatibility
The new code that was introduced in version 1.0.0 has not been changed and will work exactly as it did in version 1.0.0.