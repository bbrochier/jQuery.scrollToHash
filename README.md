jQuery.scrollToHash
===================

Customizable Scroll to hash jQuery plugin

##Todo

###Options

- [ ] offset management
- [x] scroll speed
- [ ] callback
- [ ] target si pas de #

##Usage
```
	$('a').scrollToHash();
```

##1.Options
All of the options below are available to customize scrollToHash.

| Variable | Default | Type | Description |
| :----- | :----- | :----- | :----- |
| scrollSpeed | 1000 | int | Speed in ms of the scroll |
| offsetTop | 0 | int | Distance in px where to stop scroll above the target |
| offsetBottom | 0 | int | Distance in px where to stop scroll underneath the target |

##2.Default

```
	$('').scrollToHash({
        scrollSpeed 	: 1000,
        offsetTop 		: 0,
        offsetBottom 	: 0
    });
```
