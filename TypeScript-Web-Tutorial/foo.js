var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.quuz + " " + quux.corge + " " + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
var bazz = { quuz: "ABC", corge: 2 };
var fred = new Grault(bazz, [1, 2, 3]);
console.log(fred.getGarply());
try {
    document.body.innerHTML = fred.getGarply();
}
catch (e) {
}
