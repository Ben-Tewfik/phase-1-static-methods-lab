class Formatter {
  //add static methods here
  static capitalize(word) {
    const firstLetterCap = word.charAt(0).toUpperCase() + word.slice(1);
    return firstLetterCap;
  }
  static sanitize(word) {
    const newWord = word.replace(/[^A-Za-z0-9-' ]+/g, "");
    return newWord;
  }

  static titleize(string) {
    const excludedWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = string.split(" ");
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
    return titleizedWords.join(" ");
  }
}
