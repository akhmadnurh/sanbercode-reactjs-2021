const phi = 3.14

const luasLingkaran = (r) => {
    //Function
    const phi = 3.14
    let luas = phi * r * r
    return luas
}

const kelilingLingkaran = (r) => {
    // Function
    let d = 2 * r
    let keliling = phi * d
    return keliling
}

// panggil Function
console.log(luasLingkaran(14));
console.log(kelilingLingkaran(14));