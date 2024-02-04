export const countProps = <T>(obj: T, key: string): number => {
  let count: number = 0;
  if (Array.isArray(obj)) {
    obj.forEach((element) => {
      for (const item in element) {
        if (typeof element[item as keyof typeof element] === 'number' && item === key) count += element[item as keyof typeof element];
      }
    });
  }
  return count;
};
