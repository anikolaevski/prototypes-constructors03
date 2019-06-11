/* eslint-disable func-names */
/* eslint-disable no-throw-literal */
/**
* Description: Character constructor
*
* @param {string} name - Character name
* @param {string} type - character type
*
* @throws {error} in case of wrong name
* @throws {error} in case of wrong type
*/
// eslint-disable-next-line import/prefer-default-export
export function Character(name, type) {
  const allowedTypes = [
    { type: 'Bowman', attack: 25, defense: 25 },
    { type: 'Swordsman', attack: 40, defense: 10 },
    { type: 'Magician', attack: 10, defense: 40 },
    { type: 'Daemon', attack: 25, defense: 25 },
    { type: 'Undead', attack: 40, defense: 10 },
    { type: 'Zombie', attack: 10, defense: 40 },
  ];
  try {
    if (name.length < 2 || name.length > 10) {
      throw `Введено имя "${name}". Должно быть: строка, min 2 символа, max 10`;
    }
    const legalType = allowedTypes.find(element => element.type === type);
    if (!legalType) {
      let errorInfo = '';
      // eslint-disable-next-line no-return-assign
      allowedTypes.forEach(element => errorInfo = ` ${element.type}${errorInfo}`);
      throw `Введен тип: "${type}". type - один из типов: ${errorInfo}`;
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = legalType.attack;
    this.defense = legalType.defense;
  } catch (err) {
    this.error = err;
  }
}

/**
* Description: damage method
*
* @param {number} points - damage points quantity
*
* @throws {error} in case of points <= 0
*/
Character.prototype.damage = function (points) {
  if (points <= 0) {
    // eslint-disable-next-line no-console
    console.log(`Введено значение points ${points}. Значение должно быть > 0`);
    return;
  }
  this.health -= (points * (1 - this.defense / 100));
};
