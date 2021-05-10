class Grault {
    private garply: string

    constructor(quux: Quux, waldo: number[]){ 
        this.garply = quux.quuz + " " + quux.corge + " " + waldo
    }

    public getGarply(){
        return this.garply
    }
}

type Quux = {
    quuz: string
    corge: number
}

let bazz = {quuz: "ABC", corge: 2};

let fred: Grault = new Grault(bazz, [1,2,3])

console.log(fred.getGarply());

try {
    document.body.innerHTML = fred.getGarply()
} catch (e) { 
    
}