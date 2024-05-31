function calculateTotal(){
    let femalePrice = 150.95;
    let malePrice = 180.95;
    let femaleQuantity = parseInt(document.getElementById('femaleQuantity').value);
    let maleQuantity = parseInt(document.getElementById('maleQuantity').value);
    let femaleTotal = femalePrice * femaleQuantity;
    let maleTotal = malePrice * maleQuantity;
    let orderTotal = femaleTotal + maleTotal;

    document.getElementById('femaleTotal').innerHTML = '$' + femaleTotal;
    document.getElementById('male')
}