import * as React from "react";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isUppercase(char: string) {
  if (char.length !== 1) {
    return false;
  }

  const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split("");
  return chars.includes(char);
}

export const useScrambleText = (text: string) => {
  const chars = `abcdefghijklmnopqrstuvwxyz`.split("");
  function getRandomChar(char: string) {
    if (!chars.includes(char.toLowerCase())) {
      return char;
    }
    const charIndex = getRandomInt(0, chars.length - 1);
    const c = chars[charIndex];
    if (isUppercase(char)) {
      return c.toUpperCase();
    }
    return c;
  }

  function scrambleText(text: string, fromIndex: number = 0) {
    const scrambleText = text.slice(fromIndex);
    const ignoreText = text.slice(0, fromIndex);
    return (
      ignoreText +
      scrambleText
        .split("")
        .map(getRandomChar)
        .join("")
    );
  }
  const scrambledText = scrambleText(text);

  const [outputText, setOutputText] = React.useState<string>(scrambledText);
  const [updateIndex, setUpdateIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const textUpdateInterval = window.setInterval(() => {
      if (updateIndex >= text.length) {
        return window.clearInterval(textUpdateInterval);
      }
      setOutputText(scrambleText(text, updateIndex));
    }, 16);

    return () => window.clearInterval(textUpdateInterval);
  }, [text, setOutputText, updateIndex]);

  React.useEffect(() => {
    const updateIndexInterval = window.setInterval(() => {
      if (updateIndex >= text.length) {
        return window.clearInterval(updateIndexInterval);
      }
      setUpdateIndex(updateIndex + 1);
    }, 50);

    return () => window.clearInterval(updateIndexInterval);
  }, [text, updateIndex, setUpdateIndex]);

  return outputText;
};
