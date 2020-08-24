function Observer(data) {
    this._data = data
    this.walk(data)
}

Observer.prototype = {
    constructor: Observer,

    walk: function(data) {
        let _that = this
        Object.keys(data).forEach((key) => {
            _that.convert(key, data[key])
        })
    },

    convert: function(key, val) {
        let _that = this
        _that.defineReactive(this._data, key, val)
    },

    defineReactive: function(data, key, val) {

        let dep = new Dep()

        let child = observe(val)

        Object.defineProperty(data, key, {
            configurable: false,
            enumerable: true,
            get: () => {
                console.log(`获取key=${key}=${val}`)
                if (Dep.target) {
                    dep.depend()
                }
                return val
            },
            set: (newVal) => {
                if (newVal === val) {
                    console.log(`key-${key}新旧值相同=${val}`)
                    return
                }
                console.log(`key-${key}新值${newVal}旧值=${val}`)
                val = newVal
                child = observe(val)
                // 通知订阅者
                dep.notify()
            }
        })
    }
}

function observe(val) {
    if (!val || typeof val !== 'object') {
        console.log('不是object')
        return
    }

    return new Observer(val)
}

// 通过Dep定义一个全局target属性，暂存watcher, 添加完移除
Dep.target = null

var uid = 0

function Dep() {
    this.id = uid++
    // 订阅者数组
    this.subs = []
}

Dep.prototype = {
    constructor: Dep,

    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
}

let dataObj = {
    one: 'one',
    two: 'two'
}
let observer = observe(dataObj)

console.log(dataObj)

console.log(dataObj.one)
console.log(dataObj.two)

dataObj.one = '1'
console.log(dataObj.one)

dataObj.two = {
    three: 'three',
    four: 'four'
}
console.log(dataObj.two)

dataObj.two.four = '4'
console.log(dataObj.two)
