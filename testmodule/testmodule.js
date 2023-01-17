class Color{
    constructor(name, code){
        this.name=name;
        this.code=code;
    }
}

const allColors = [
    new Color("brightred", "#E74C3C"),
];

exports.getrandomColor = () => {
    return allColors[0];
}

exports.allColors=allColors;