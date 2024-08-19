/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}
function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Tuesday));

console.log(isWeekend(DayOfWeek.Saturday));
console.log(isWeekend(DayOfWeek.Sunday));
