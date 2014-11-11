Dimensionator
=============

Provides a cross browser way to measure the height and width of a dom element that always excludes the scrollbar.

On some browsers if you measure an element you will get a width that exludes the scrollbar,
this is especially bad if you need to measure the screen width with javascript.

Dimensionator solves this by providing you with a way to measure the container width in a consistent fashion that will always return the same value cross browser.

## Usage

````javascript

height = $('body').dim('h');
width = $('body').dim('w');
````