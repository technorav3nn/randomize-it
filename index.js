module.exports = class Randomize {
    randomInt(min, max) {
        if(!min) min =0;
        if(!max) throw new Error("No maximum number provided");

        return (Math.floor(Math.random() * (max - min + 1)) + min)
        // epic
    }
    randomArray(arr) {
        if(!Array.isArray(arr) || !arr instanceof Array) {
            throw new Error("Expected a valid array!")
        }

        return arr[Math.floor(Math.random() * arr.length)]
    }
    randomMultipleArray(arr, count) {
        if(!Array.isArray(arr) || !arr instanceof Array) {
            throw new Error("Expected a valid array!")
        }
        const randomItems = [];
        for(let i = 0; i < count; i++) {
            const random = Math.floor(Math.random() * arr.length)
            randomItems.push(arr[random])
        }
        return [...randomItems]
    }
    randomFromString(str, from, to) {
        if(!from || !to) {
            throw new Error('Add a from or to argument!, ex:\nrandomFromString(\"Hello\", 1, 3) will return:\nel')
        }
        if(!typeof str === "string" || !str instanceof String) {
            throw new Error("Expected a valid string!")
        }
        const random = Math.floor(Math.random() * str.length)
        const newStr = str.slice(from, to)
    }
    randomUpper(str, count) {
        if(!typeof str === "string") {
            throw new Error("Expected a valid string!")
        }
        if(!typeof count === "number" || !count instanceof Number) {
            throw new Error("Expected a valid number to specify how many times to uppercase!")
        }
        for(let i = 0; i < count; i++) {
            const random = Math.floor(Math.random() * str.length)
            str = str.replace(str[random], str[random].toUpperCase())
        }
        return str
    }
    randomLower(str, count) {
        if(!typeof str === "string") {
            throw new Error("Expected a valid string!")
        }
        if(!typeof count === "number" || !count instanceof Number) {
            throw new Error("Expected a valid number to specify how many times to uppercase!")
        }
        for(let i = 0; i < count; i++) {
            const random = Math.floor(Math.random() * str.length)
            str = str.replace(str[random], str[random].toLowerCase())
        }
        return str
    }
}
