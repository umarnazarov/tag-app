export const populateNestedObj = (nested) => {
  const result: any[] = [];

  for (const key in nested) {
    if (typeof nested[key] === "object") {
      for (const nesty in nested[key]) {
        result.push(...nested[key][nesty]);
      }
    } else {
      result.push(...nested[key]);
    }
  }
  return result;
};
