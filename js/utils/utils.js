
// Функция, возвращающая случайное целое число из переданного диапазона включительно

export function getRandomIntegerInRange(from, to) {
  // Проверяем, являются ли аргументы целыми числами и "до" больше или равно "от"
  if (!Number.isInteger(from) || !Number.isInteger(to) || to < from) {
    throw new Error('Неверные аргументы. "to" должно быть больше или равно "from", и оба должны быть целыми числами.');
  }
  // Генерируем случайное целое число в диапазоне от "от" до "до"
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

// Функция для проверки максимальной длины строки

export function isStringWithinMaxLength(str, maxLength) {
  // Проверяем, является ли аргумент str строкой и maxLength положительным числом
  if (typeof str !== 'string' || typeof maxLength !== 'number' || maxLength <= 0) {
    throw new Error('Неверные аргументы. Первый аргумент должен быть строкой, а второй - положительным числом.');
  }
  // Проверяем длину строки и возвращаем true, если она не превышает максимальную длину, и false в противном случае
  return str.length <= maxLength;
}

