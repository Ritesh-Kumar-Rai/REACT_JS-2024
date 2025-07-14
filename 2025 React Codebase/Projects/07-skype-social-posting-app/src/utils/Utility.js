// the custom utility class

class Utility {
  static findMissingProps(obj, path = "") {
    const missingProps = [];

    for (const key in obj) {
      const value = obj[key];
      const currentPath = path ? `${path}.${key}` : key;

      if (
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        (Array.isArray(value) && value.length === 0)
      ) {
        // Property is missing, null, undefined, empty string, or empty array
        missingProps.push(currentPath);
      } else if (typeof value === "object" && !Array.isArray(value)) {
        // Recurse into nested object
        missingProps.push(...Utility.findMissingProps(value, currentPath));
      }
    }

    return missingProps;
  }

  static isAvailableInArr(value, arr) {
    try {
      if (!value || !arr || !Array.isArray(arr)) {
        throw new ReferenceError(
          "Oops! value and array is required before operation.."
        );
      }

      return arr.includes(value);
    } catch (error) {
      console.error(`${error.name} -> ${error.message}`);
      return false;
    }
  }
}

export default Utility;
