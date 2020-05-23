# RandomChance
Randomizer with Percentages. For DEMO => [https://eminmuhammadi.github.io/RandomChance/example/](https://eminmuhammadi.github.io/RandomChance/example/)

## Installing
```html
<script src="https://cdn.jsdelivr.net/gh/eminmuhammadi/RandomChance@v1.0.0/dist/RandomChance.min.js" type="text/javascript"></script>
```

## Example
Code:
```js
    var Chest = 
    {
      items:   ['diamond','gold','iron','coal','stone'],
      chances: [3,7,15,25,50]
    }
    var RC = new RandomChance(Chest.items,Chest.chances);
    var Result = RC.Spin();
    
    console.log(Result);
```
Result:
```
stone
```

## Chances Example
Code:
```js
    var Chest = 
    {
      items:   ['diamond','gold','iron','coal','stone'],
      chances: [3,7,15,25,50]
    }
    var RC = new RandomChance(Chest.items,Chest.chances);
    console.log(RC.LookThrough());
```
Result:
```js
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ["diamond", 3]
1: (2) ["gold", 7]
2: (2) ["iron", 15]
3: (2) ["coal", 25]
4: (2) ["stone", 50]
length: 5
__proto__: Array(0)
```
