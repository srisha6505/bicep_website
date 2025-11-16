import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { cn } from '../lib/utils';
import { ThemeToggle } from './ThemeToggle';

const IconContainer = ({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [100, 140, 100]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [80, 120, 80]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [36, 52, 36]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [36, 52, 36]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex flex-col gap-2 items-center justify-center rounded-2xl transition-colors px-6 py-5",
          isActive ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"
        )}
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-4xl"
        >
          {icon}
        </motion.div>
        <span className="text-lg font-semibold whitespace-nowrap">{title}</span>
      </motion.div>
    </Link>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isActive: boolean }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden h-auto w-full items-center justify-between gap-8 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-border px-10 py-6 md:flex shadow-xl",
        className
      )}
    >
      <Link to="/home" className="text-4xl font-bold text-foreground mr-8">
        BICEP
      </Link>
      <div className="flex items-center gap-8">
        {items.map((item, idx) => (
          <IconContainer 
            key={idx}
            mouseX={mouseX}
            title={item.title}
            icon={item.icon}
            href={item.href}
            isActive={item.isActive}
          />
        ))}
      </div>
      <div className="flex items-center gap-4 ml-8">
        <Link to="/login" className="px-6 py-3 rounded-xl text-lg font-semibold text-foreground/80 bg-secondary hover:bg-border transition-colors">
          Login
        </Link>
        <Link to="/signup" className="px-6 py-3 rounded-xl text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          Sign Up
        </Link>
      </div>
    </motion.div>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isActive: boolean }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-3 flex flex-col gap-3"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  to={item.href}
                  key={item.title}
                  className={cn(
                    "flex items-center gap-3 px-5 py-4 rounded-xl text-lg font-semibold",
                    item.isActive ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <div className="text-2xl w-8">{item.icon}</div>
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-card border-2 border-border shadow-xl text-2xl"
      >
        <i className={cn("fas transition-transform duration-200", open ? "fa-times" : "fa-bars")}></i>
      </button>
    </div>
  );
};

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      title: "Home",
      icon: <i className="fas fa-home"></i>,
      href: "/home",
      isActive: location.pathname === "/home" || location.pathname === "/"
    },
    {
      title: "Incubations",
      icon: <i className="fas fa-lightbulb"></i>,
      href: "/incubations",
      isActive: location.pathname.startsWith("/incubations") || location.pathname.startsWith("/incubatee")
    },
    {
      title: "Events",
      icon: <i className="fas fa-calendar-alt"></i>,
      href: "/events",
      isActive: location.pathname.startsWith("/events") || location.pathname.startsWith("/event")
    },
    {
      title: "Clubs",
      icon: <i className="fas fa-users"></i>,
      href: "/clubs",
      isActive: location.pathname.startsWith("/clubs") || location.pathname.startsWith("/club")
    },
    {
      title: "IdeaBank",
      icon: <i className="fas fa-brain"></i>,
      href: "/ideabank",
      isActive: location.pathname === "/ideabank"
    },
    {
      title: "Facilities",
      icon: <i className="fas fa-building"></i>,
      href: "/facilities",
      isActive: location.pathname === "/facilities"
    },
    {
      title: "Team",
      icon: <i className="fas fa-user-friends"></i>,
      href: "/team",
      isActive: location.pathname === "/team"
    },
  ];

  return (
    <header className="fixed top-8 left-0 right-0 z-50 px-6">
      <div className="w-full">
        <FloatingDockDesktop items={navItems} />
        <div className="flex md:hidden justify-end">
          <FloatingDockMobile items={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
