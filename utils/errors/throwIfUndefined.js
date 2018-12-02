function throwIfUndefined(keys, obj) {
  const missingKeys = [];

  Object.keys(obj).forEach((key) => {
    if (!(key in obj)) {
      missingKeys.push(key);
    }
  });

  if (missingKeys.length > 0) {
    throw new Error(`Invalid object definition. Missing keys ${missingKeys}`);
  }
}

module.exports = throwIfUndefined;
