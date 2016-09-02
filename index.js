const _curry = (fn, initialArgs, lenght) => {
  return (...args) => {
    const allArgs = [...initialArgs].concat(args);
    if (allArgs.length >= lenght) {
      return fn(...allArgs);
    }
    return _curry(fn, allArgs, lenght);
  };
};

const curry = (fn, length) => {
  if (typeof fn !== 'function') {
    throw new Error(`Expected function as first argument but got ${typeof(fn)}`);
  }
  length = length || fn.length;
  return (...args) => {
    if (args.length >= length) {
      return fn(...args);
    }
    return _curry(fn, args, length);
  };
};

module.exports = curry;
