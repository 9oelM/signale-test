const signale = require("signale")

const test = async () => {
    signale.time("Test")
    await new Promise(resolve => {
        setTimeout(()=>{
            console.log(`1 sec has elapsed`)
        }, 1000)
    })
    signale.timeEnd("Test")
}

test()