import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface ExpandableCardProps {
  imageUrl: string;
  cardHeader: React.ReactNode;
  expandedContent?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  imageUrl,
  cardHeader,
  expandedContent,
  onClick,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "rounded-xl border border-border/40 bg-card overflow-hidden group transition-all duration-300",
        "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50",
        "backdrop-blur-sm bg-gradient-to-br from-card to-card/80",
        onClick && "cursor-pointer",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <div className="relative h-80 w-full overflow-hidden">
        <motion.img
          src={imageUrl}
          alt="Card image"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-8">
        <div>{cardHeader}</div>
        <AnimatePresence>
          {isHovered && expandedContent && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: "1rem" }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
             <div className="pt-3 border-t border-primary/20">
                {expandedContent}
             </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};