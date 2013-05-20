Iframe Resizer
================

This iframe resizer uses a script on the external site to give the origin site it's height.  
It makes use of HTML5 'postMessage'.

Usage
-----

• Include 'iframe size receiver' on the origin page containing the iframe  
• Include 'iframe size giver' on the external page

The 'giver' will listen for clicks of anchor tags and give the height to the 'receiver' on the origin site again.  
This is so that accordion/expanding text links will expand the iframe's height correctly.

Feel free to edit the script!

Config
------

The config for the Iframe Resizer is set in the 'iframe size giver'.

``` js
isResponsive: true
```

This will resize the height of the iframe whenever the window is resized. If the external site is responsive, make sure you set the width of the iframe to 100%!

If the external site is *not* responsive, set 'isResponsive' to 'false' just to stop unnecessary code from running.


Todo
----

Add an animationTimer to the config to resize the iframe after any animations used with accordion/expanding text links have finished.
