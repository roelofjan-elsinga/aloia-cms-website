---
title:  "The road to version 1.0"
date:   2020-02-05 08:00:00 +0200
categories: product
permalink: /articles/the-road-to-version-1-0
summary: | 
    There have been a lot of changes in the past few weeks and this means we're expecting to release 
    the first stable version of the CMS in February. 
---

The development of Aloia CMS has been going really quickly in the past few weeks. The goal of all of these changes 
is to release the first stable version of the CMS in February 2020. This stable version will bring significant 
changes to the CMS internally, but aims to make the transition from 0.x to 1.x as painless as possible. 
Internally, the content files with their configuration will be compatible with most static site generators. 
This means that the content files will contain their own meta data in the form of Yaml Front Matter. 

This reduces the complexity of the internal file management while allows you, the developer, to very easily create 
your own content types. The included content types from version 0.x will be ported over to 1.x, so if you were 
relying on these to be provided from the package, you can still do this. 

Another thing that often happens with large changes like this, is that you are responsible for converting your 
content to our new standard. That seems a little backwards. This CMS claims to take the headaches away, 
so this is something we're very serious about. Because of this, we're including a migration command that you 
can run from Laravel. This command converts all content types we support to the new format. This means that 
all you have to do is update your implementations of the CMS in your code.

A detailed changelog will follow when version 1.0 has been released.