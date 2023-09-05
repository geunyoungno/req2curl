export default function removeUndefinedHelper(
  obj: Record<string, unknown> | undefined,
): Record<string, string> | undefined {
  if (obj == null) {
    return undefined;
  }

  const removedUndefinedObj = Object.entries(obj).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value === undefined) {
      return acc;
    }

    return {
      ...acc,
      [key]: `${value}`,
    };
  }, {});

  return removedUndefinedObj;
}
