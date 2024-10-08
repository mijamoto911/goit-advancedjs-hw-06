/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(top: T, bottom: U): AllType {
  return {
    name: top.name || bottom.name,
    color: top.color || bottom.color,
    position: bottom.position || top.position,
    weight: bottom.weight || top.weight,
  };
}
