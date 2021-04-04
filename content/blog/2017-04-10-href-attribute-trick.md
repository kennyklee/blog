---
title: "href attribute 'do nothing' trick"
layout: Post
tags:
    - technology
keywords: [html, code]
date: 2017-04-10 00:13:21
status: publish
---

I learned this trick from Chris Coyier was speaking at [Event Apart Seattle 2017](https://aneventapart.com/event/seattle-2017#chris-coyier).

It's a common practice to set the anchor element's href to `#`, when you don't want anything to happen when user click on the link.

``` javascript
<a href="#">Click here</a>
```

However, some browsers may jump (usually to the top of the page), when users click on it.

So, here is a cool trick...use `#0` instead.

``` javascript
<a href="#0">Click here</a>
```

<!-- more -->

Since IDs almost never start with a 0, it just safely fails and do nothing...which is the desired behavior.

But, here is the catch...

What Chris said was that an ID cannot start with a number in **_most cases_**. The exception that he gave was related to unicode (which I won't elaborate on).

After digging a little bit, it turn out that [HTML4 specs](https://www.w3.org/TR/html4/types.html#type-id) prevent IDs from starting with a number.

**BUT...** [HTML5 specs](https://www.w3.org/TR/html5/dom.html#the-id-attribute) are cool with an ID starting with a number. **BUT TO THE BUT...** it's really not a common practice.

## So I think `#0` is just fine, and actually pretty cool. ;)

---

### Other variations:

* `<a href="#!">Click here</a>`
* `<a href="#void">Click here</a>`
* Came across using `javascript:void(0)` in [Stackoverflow](http://stackoverflow.com/questions/134845/which-href-value-should-i-use-for-javascript-links-or-javascriptvoid0), but that is some ugly code. I don't wanna use it.




