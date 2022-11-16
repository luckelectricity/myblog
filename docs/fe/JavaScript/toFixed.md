# toFixed 解析

之前碰到过，精确计算用了[NP](https://github.com/nefe/number-precision)来做精确计算，但是今天出现了四舍五入的问题，引入库不太值得，重写`toFixed`我觉得比较快但是又觉得不优雅。

下面先说一下`toFixed`产生的问题。

```js
1.35.toFixed(1) // 1.4 正确
1.335.toFixed(2) // 1.33 错误
1.3335.toFixed(3) // 1.333 错误
1.33335.toFixed(4) // 1.3334 正确
1.333335.toFixed(5)  // 1.33333 错误
1.3333335.toFixed(6) // 1.333333 错误
```
反正就是比较反人类。

TODO
