import Daemon from '../Daemon'
import Team from '../app'

test.each([
    ['ivan', 
        [{
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "ivan",
            type: "Daemon"
        }]
    ],
    ['dima', 
    [{
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "dima",
        type: "Daemon"
    }]
]
])('add Daemon', (name, expected) => {
    const daemon = new Daemon(name);
    const team = new Team();
    team.add(daemon);
    expect(Array.from(team.members)).toEqual(expected);
  });


  test.each([
    [['ivan', 'dima'], 
        [{
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "ivan",
            type: "Daemon"
        },
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "dima",
            type: "Daemon"
        }
    ]
    ]
])('addAll Daemon', (names, expected) => {
    const array = []
    names.forEach((name) => {
        array.push(new Daemon(name));
    })
    const team = new Team();
    team.addAll(...array);
    expect(Array.from(team.members)).toEqual(expected);
  });


  test.each([
    [['ivan', 'dima', 'victor'], 
        [{
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "ivan",
            type: "Daemon"
        },
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "dima",
            type: "Daemon"
        },
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "victor",
            type: "Daemon"
        },
    ]
    ]
])('addAll Daemon', (names, expected) => {
    const array = []
    names.forEach((name) => {
        array.push(new Daemon(name));
    })
    const team = new Team();
    team.addAll(...array);
    expect(Array.from(team.members)).toEqual(expected);
  });



  test.each([
    ['ivan', 
        [{
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "ivan",
            type: "Daemon"
        },
    ]
    ]
])('addAll clone Daemon', (name, expected) => {
    const daemon = new Daemon(name)    
    const team = new Team();
    team.addAll(daemon, daemon);
    expect(Array.from(team.members)).toEqual(expected);
  });


  test.each([
    ['ivan', 
        [{
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "ivan",
            type: "Daemon"
        },
    ]
    ]
])('addAll clone Daemon', (name, expected) => {
    const daemon = new Daemon(name)    
    const team = new Team();
    team.addAll(daemon, daemon);
    expect(Array.from(team.members)).toEqual(expected);
  });


  test.each([
    [['ivan', 'dima', 'victor'], 
        [{
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "ivan",
            type: "Daemon"
        },
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "dima",
            type: "Daemon"
        },
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: "victor",
            type: "Daemon"
        },
    ]
    ]
])('Daemon toArray', (names, expected) => {
    const array = []
    names.forEach((name) => {
        array.push(new Daemon(name));
    })
    const team = new Team();
    team.addAll(...array);
    const result = team.toArray()
    expect(result).toEqual(expected);
  });