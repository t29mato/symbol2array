# symbol2array

symbol2array generates a two-dimensional array from circles and other symbols

## examples

```
circle2array(3)
[[ 0, 1, 0 ],
 [ 1, 1, 1 ],
 [ 0, 1, 0 ]]

circle2array(4)
[[ 0, 0, 0, 0 ],
 [ 0, 1, 1, 0 ],
 [ 0, 1, 1, 0 ],
 [ 0, 0, 0, 0 ]]

circle2array(5)
[[ 0, 0, 1, 0, 0 ],
 [ 0, 1, 1, 1, 0 ],
 [ 1, 1, 1, 1, 1 ],
 [ 0, 1, 1, 1, 0 ],
 [ 0, 0, 1, 0, 0 ]]
```
An actual return value is a boolean, not a 0 or 1.
