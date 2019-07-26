// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidClass {
    constructor(attrs) {
        this.length = attrs.length,
            this.width = attrs.width,
            this.height = attrs.height
    }
    volume() {
        return (this.length * this.width * this.height);
    }

    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }

};

const cubey2 = {
    length: 4,
    width: 5,
    height: 5
};

const cubey3 = {
    length: 6,
    width: 7,
    height: 8
};

const cuboid2 = new CuboidClass(cubey2);

// CubeMaker Subclass ===
class CubeMaker extends CuboidClass {
    constructor(attrs) {
        super(attrs);
    }
}

const cube = new CubeMaker(cubey3);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  Test your work by logging out your 
// volume and surface area.

console.log(cube.volume());
console.log(cube.surfaceArea());