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
        "rounded-xl border border-border bg-card overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
      layout
    >
      <div className="h-48 w-full overflow-hidden">
        <motion.img
          src={imageUrl}
          alt="Card image"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div>{cardHeader}</div>
        <AnimatePresence>
          {isHovered && expandedContent && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: "0.75rem" }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
             <div className="pt-3 border-t border-border/50">
                {expandedContent}
             </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};