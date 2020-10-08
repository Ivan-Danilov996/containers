class Character {
    constructor(name) {
        if (typeof name != 'string' || name.length < 2 || name.length > 10 ) {
            throw new Error('error')
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack = this.attack / 5 + this.attack;
            this.defence = this.defence / 5 + this.defence;
            this.health = 100;
        } else  {
            throw new Error ('нельзя повысить левел умершего')
        }
    }
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}

export default Character;