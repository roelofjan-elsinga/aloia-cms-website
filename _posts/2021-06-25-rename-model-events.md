---
title:  "Aloia CMS 3.4.0: Renaming model events"
date:   2021-06-25 12:00:00 +0200
permalink: /articles/3-4-0-renaming-model-events
summary: |
    Aloia CMS 3.4.0 introduces new model events: model events when you're renaming models.
    These model events will allow you to bridge the gap between 2 "different" models.
    These renaming events contain the old and new filename, which makes it much easier to perform cleanups or other tasks.
---

Aloia CMS 3.4.0 introduces new model events: model events when you're renaming models.
These model events will allow you to bridge the gap between 2 "different" models.
These renaming events contain the old and new filename, which makes it much easier to perform cleanups or other tasks.

## Why is this important?
You can already rename models (filename change), but this causes consistency issues. 
For example, when you rename a model, a PreModelSaved event gets dispatched for the old filename and the PostModelSaved events gets dispatched for the new filename. 
This could cause cleanup issues that you might need to run.

With the PreModelRenamed and PostModelRenamed events, you can do any cleanup and transforming you need to do to be ready for the new filename.

With the ModelRenameFailed event, you can reverse any changes you might have already done.

## The new events
These are the events you can subscribe to in your own applications:

- AloiaCms\Events\PreModelRenamed
- AloiaCms\Events\PostModelRenamed
- AloiaCms\Events\ModelRenameFailed

## Usage
You can listen to these events in your ``EventServiceProvider`` as described in the [Laravel documentation](https://laravel.com/docs/master/events).
Each of these events contain a public class property ``$model``, which is a ``ModelInterface``.
These events get dispatched on any model that extends the base model: ``AloiaCms\Models\Model``.
