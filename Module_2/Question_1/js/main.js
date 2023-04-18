function oncha() {
    let a = parseInt(document.getElementById("qty").value);
    let b = parseInt(document.getElementById("price").value);
    let c = a * b;
    document.getElementById("subtotal").value = c;

    let x = parseInt(document.getElementById("subtotal").value);
    let y = parseInt(document.getElementById("subtotal1").value);
    let z = parseInt(document.getElementById("subtotal2").value);
    let m = x + y + z;
    document.getElementById("total").value = m;
}

function oncha1() {
    let p = parseInt(document.getElementById("qty1").value);
    let q = parseInt(document.getElementById("price1").value);
    let r = p * q;
    document.getElementById("subtotal1").value = r;

    let x = parseInt(document.getElementById("subtotal").value);
    let y = parseInt(document.getElementById("subtotal1").value);
    let z = parseInt(document.getElementById("subtotal2").value);
    let m = x + y + z;
    document.getElementById("total").value = m;
}

function oncha2() {
    let d = parseInt(document.getElementById("qty2").value);
    let e = parseInt(document.getElementById("price2").value);
    let f = d * e;
    document.getElementById("subtotal2").value = f;

    let x = parseInt(document.getElementById("subtotal").value);
    let y = parseInt(document.getElementById("subtotal1").value);
    let z = parseInt(document.getElementById("subtotal2").value);
    let m = x + y + z;
    document.getElementById("total").value = m;
}




