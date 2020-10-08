import Character from './Character'

class Daemon extends Character {
    constructor(name) {
        super(name)
        this.type = 'Daemon'
        this.attack = 40; 
        this.defence = 10;
    }
}

export default Daemon 