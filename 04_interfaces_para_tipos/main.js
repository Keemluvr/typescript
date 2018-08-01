function people(value) {
    console.log(value);
}
people({ name: "Keila", age: 19 });
//retorna a função
function people2(name, age) {
    return { name: name, age: age };
}
function getColor(codeColor, title) {
    if (title) {
        return { title: title, codeColor: codeColor };
    }
    return { codeColor: codeColor };
}
console.log(getColor("#000"));
console.log(getColor("#000", "black"));
