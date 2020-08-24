function MVVM(options) {
    this.$options = options
    let data = this._data = this.$options.data

    let _that = this
    Object.keys(data).forEach((key) => {
        console.log(`代理属性${key}`)
        // _that._proxyData(key)
        MVVM.prototype._proxyData.call(_that, key)
    })
}

MVVM.prototype = {
    constructor: MVVM,
    // 数据绑定代理
    _proxyData: function(key) {
        let _that = this
        console.log(_that)
        Object.defineProperty(_that, key, {
            configurable: false,
            enumerable: true,
            get: () => {
                console.log(`获取${key}，val=${_that._data[key]}`)
                return _that._data[key]
            },
            set: (newVal) => {
                console.log(`设置${key}，oldVal=${_that._data[key]}，newVal=${newVal}`)
                return _that._data[key] = newVal
            }
        })
    },
}

let mt_mvvm = new MVVM({
    data: {
        text: 'hell mvvm'
    }
})

console.log(mt_mvvm.$options)
console.log(mt_mvvm.text)
console.log(mt_mvvm._data)
console.log(mt_mvvm._data.text)

mt_mvvm.text = 'change text'
console.log(mt_mvvm.text)
console.log(mt_mvvm._data)
console.log(mt_mvvm._data.text)

mt_mvvm._data.text = 'change text two'
console.log(mt_mvvm.text)
console.log(mt_mvvm._data)
console.log(mt_mvvm._data.text)