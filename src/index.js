exports.min = function min (array) {
  return array ? array.reduce((min, current) => {if (current < min) min = current; return min;}, 0) : 0;
}

exports.max = function max (array) {
  return array ? array.reduce((max, current) => {if (current > max) max = current; return max;}, 0) : 0;
}

exports.avg = function avg (array) {
  return array !== undefined && array.length > 0 ? array.reduce((sum, current) => sum + current, 0) / array.length : 0;
}
