---
title:  "Aloia CMS 3.3.0: Model events"
date:   2020-12-24 14:00:00 +0200
permalink: /articles/3-3-model-events
summary: |
    Aloia CMS 3.3.0 brings you even more ways to build upon and extend this CMS for your existing Laravel application.
    We're introducing model events. 
    These help you to very easily perform tasks in your Laravel application when models get persisted or deleted.
---

Aloia CMS 3.3.0 has been released with model events on the base model.
These model events help you to perform tasks in your Laravel application when models get persisted or deleted.
These are the events you can subscribe to in your own applications:

- AloiaCms\Events\PreModelSaved
- AloiaCms\Events\PostModelSaved
- AloiaCms\Events\PreModelDeleted
- AloiaCms\Events\PostModelDeleted

You can bring even more fine-grained control to your applications using the same simple CMS classes by subscribing to these events.

These changes don't break any backward compatibility and are simply additions.
If you're not planning on using these events in your application, you don't need to upgrade to this version.

## Usage
You can listen to these events in your ``EventServiceProvider`` as described in the [Laravel documentation](https://laravel.com/docs/master/events).
Each of these events contain a public class property ``$model``, which is a ``ModelInterface``.
These events get dispatched on any model that extends the base model: ``AloiaCms\Models\Model``.
