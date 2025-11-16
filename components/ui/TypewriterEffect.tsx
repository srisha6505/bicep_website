import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = useMemo(() => words.map((word) => ({ ...word, text: word.text.split('') })), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < wordsArray[wordIndex].text.length) {
        setCharIndex((prev) => prev + 1);
      } else if (wordIndex < wordsArray.length - 1) {
        setWordIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, wordIndex, wordsArray]);

  return (
    <div className={cn("my-6 flex flex-wrap items-center", className)}>
      {wordsArray.map((word, wIndex) => (
        <div key={`word-${wIndex}`} className={cn("inline-block mr-3", word.className)}>
          {word.text.map((char, cIndex) => (
            <motion.span
              key={`char-${cIndex}`}
              initial={{ opacity: 0, display: 'none' }}
              animate={{
                display: 'inline-block',
                opacity: wIndex < wordIndex || (wIndex === wordIndex && cIndex < charIndex) ? 1 : 0,
              }}
              transition={{ duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
       <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("block rounded-sm w-[4px] h-6 sm:h-8 md:h-10 bg-primary", cursorClassName)}
        ></motion.span>
    </div>
  );
};
