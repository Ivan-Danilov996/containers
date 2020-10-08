// TODO: write your code here
import sum from './basic';
import Daemon from './Daemon';

console.log('worked');

console.log(sum([1, 2]));

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
      if (this.members.has(name)) {
          throw new Error('такой персонаж уже есть в команде')
      } else {
        this.members.add(name)
      }
  }

  addAll(...names) {
    names.forEach((name) => {
      this.members.add(name);      
    })
  }

  toArray() {
    return Array.from(this.members)
  }
}


export class ErrorRepository {
    constructor() {
        this.map = new Map([[100, 'error'],[200, 'fatalError']])
    }

    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code)
        } else {
            return 'Unknown error'
        }
    }

    show() {
        console.log(this.map)
    }
}



