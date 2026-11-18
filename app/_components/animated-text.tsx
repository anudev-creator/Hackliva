import type { CSSProperties } from "react";

const vars = (values: Record<string, string | number>) => values as CSSProperties;

/**
 * Line that types itself out, then blinks a red cursor a few times.
 * Every letter is a real element, so wrapping and screen readers behave normally.
 */
export function TypedText({
  text,
  delay = 1.1,
  step = 0.028,
}: {
  text: string;
  /** Seconds before the first letter. */
  delay?: number;
  /** Seconds between letters. */
  step?: number;
}) {
  let count = 0;
  const end = delay + text.length * step + 0.2;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" style={vars({ "--d": `${delay}s`, "--step": `${step}s`, "--end": `${end}s` })}>
        {text.split(" ").map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`}>
            {wordIndex > 0 && " "}
            <span className="typed-word">
              {[...word].map((char) => (
                <span key={count} className="typed-char" style={vars({ "--c": count++ })}>
                  {char}
                </span>
              ))}
            </span>
          </span>
        ))}
        <span className="typed-caret" />
      </span>
    </>
  );
}
