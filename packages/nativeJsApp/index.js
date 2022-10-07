function* generator(value) {
    while(value < 3) {
        yield value;
        value++
    }
}

function basic() {
    const iterator = generator(0);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

// basic();

// ===============

async function asynFunc2(timer) {
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve(12)
            },
            timer
        )
    })
}

function* generator2(timer) {
    yield asynFunc2(timer);
}

async function consumer(timer) {
    const iterator = generator2(timer);
    let next = iterator.next();
    while (!next.done) {
        const result = await next.value;
        console.log(timer, result);
        next = iterator.next();
    }
}

consumer(1000);
consumer(4000);
consumer(1001);
