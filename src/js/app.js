/* eslint-disable no-console */
// TODO: write code here
import {
  Character,
} from './Character';

console.log('app.js bundled');

const obj = new Character(
  'Лучник',
  'Bowman',
);
console.log('Создан объект:');
console.table(obj);
console.log('Наносим повреждение points = 50:');
obj.damage(50);
console.table(obj);
obj.damage(0);
obj.damage(-10);
