import nlp from "compromise";

export const tagText = (text) => {
  const doc = nlp(text);
  const terms = doc.terms().out("array");

  return terms.map((word) => {
    let cleanWord = word.replace(/[.,!?]/g, "").trim();
    if (!cleanWord) return null;

    const term = nlp(cleanWord);

    let pos = "X";

    if (term.nouns().found) pos = "NOUN";
    else if (term.verbs().found) pos = "VERB";
    else if (term.adjectives().found) pos = "ADJ";
    else if (term.adverbs().found) pos = "ADV";
    else if (term.pronouns().found) pos = "PRON";
    else if (term.match("#Determiner").found) pos = "DET";

    const lower = cleanWord.toLowerCase();

    // manual rules
    if (["of", "in", "on", "by", "with", "for", "to"].includes(lower)) pos = "ADP";
    else if (["and", "or", "but"].includes(lower)) pos = "CONJ";
    else if (["is", "am", "are", "was", "were", "be"].includes(lower)) pos = "VERB";

    // fix capitalization confusion
    if (cleanWord[0] === cleanWord[0]?.toUpperCase() && pos === "VERB") {
      pos = "NOUN";
    }

    return {
      word: cleanWord,
      pos,
    };
  }).filter(Boolean);
};