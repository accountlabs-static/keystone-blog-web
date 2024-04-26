export function slugify(text: string) {
  return text
    .toString() // Cast to string (optional)
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\\-]+/g, '') // Remove all non-word chars
    .replace(/\\_/g, '-') // Replace _ with -
    .replace(/\\-\\-+/g, '-') // Replace multiple - with single -
    .replace(/\\-$/g, ''); // Remove trailing -
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function slugToUpperCase(text: string) {
  return text.split('-').map(capitalize).join('');
}

export function slugToUpperCaseRecoverEnum(text: string) {
  return text.split('-').map(capitalize).join(' ');
}
