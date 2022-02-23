
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined') {
    return []; //вернуть пустой массив если тип введённой массива(матрицы) - undefined
  }

  let result = []; // пустой массив
  // цикл для прохождения по массиву, содержащему подмассивы
  for (let i = 0; i < matrix.length; i++) {
    // проверка на чётность
    if (i % 2 === 0) {
      result = [...result, ...matrix[i]]; // если подмассив в главном массиве чётный, то складываем c предыдущими подмассивами в массив result
    } else {
      result = [...result, ...matrix[i].reverse()]; // если подмассив в главном массиве нечётный, то переворачиваем его и складываем с предыдущими подмассивами в массив result
    }
  }
  return result; // возвращаем массив result
}
