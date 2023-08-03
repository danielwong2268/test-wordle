## test-grid.html

Set one container with display grid, 4 columns. For each box inside the grid, set how many columns the box should span. The class `.span1` tells the element to span 1 column, `.span2` spans 2 columns, etc. This style of CSS are called "utility classes". tailwind (https://tailwindcss.com/) is one of the more popular libraries for this.

## test-grid-with-tailwind.html.

Tailwind is imported via a script tag on line 3. This isn't the recommended way to import things, but it's good for quick examples. Tailwind comes with a set of utility classes that you can use out of the box.

- `grid` gives the element display grid
- `grid-cols-4` gives the grid element 4 columns
- `col-span-{x}` tells an element within a grid to span {x} number of columns
