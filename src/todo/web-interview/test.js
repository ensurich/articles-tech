
const currying = fn => {
    const len = fn.length
    return function curr (...args1) {
        if (args1.length >= len) {
            return fn(...args1)
        }
        return (...args2) => curr(...args1, ...args2)
    }
}

currying()