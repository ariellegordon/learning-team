const Sequelize = require('Sequelize');
const db = new Sequelize('postgres://localhost:5432/unicorns', {
  logging: false,
});

const Unicorn = db.define('unicorn', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'http://3.bp.blogspot.com/-kNKu4oTKVJs/TWLJ0Yhw2OI/AAAAAAAAAVo/606P2UAvHj0/s1600/FashionRob5.jpg',
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

Unicorn.beforeValidate(unicorn => {
  let name = unicorn.name;
  name = name.split(' ');
  let result = name.map(x => {
    return x[0].toUpperCase() + x.slice(1).toLowerCase();
  });
  unicorn.name = result.join(' ');
});

Unicorn.prototype.findBirthYear = function() {
  let age = this.age;
  let today = new Date().getFullYear();
  return Math.abs(today - age);
};

module.exports = { db, Unicorn };
