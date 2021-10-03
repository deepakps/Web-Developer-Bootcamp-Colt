function rgb(r, b, g) {
    return `rgb(${r}, ${g}, ${b})`;
}

function hex(r, b, g) {
    // const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function makeColor(r, b, g) {
    const color = {};

    color.r = r;
    color.b = b;
    color.g = g;
    color.rgb = function() {
        // return this;
        // return `rgb(${r}, ${g}, ${b})`;
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function() {
        // const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(2, 23, 34);
firstColor.rgb();

//Constructor Function

// function color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.rgb = function() {
//         return this;
//     };
// }

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }
    greet() {
        return `Hello from color ${this.colorName}`;
    }

    innerRgb() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    };

    rgb() {
        return `rgb(${this.innerRgb()})`;
    }
}

Color.prototype.rgba = function(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}