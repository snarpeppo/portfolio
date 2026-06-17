import { ReactNode } from "react";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiJquery,
  SiTailwindcss,
  SiNestjs,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiGit,
  SiLinux,
  SiBlender,
  SiFigma,
  SiGo,
  SiFreecad,
  SiDavinciresolve,
} from "react-icons/si";
import { DiDatabase, DiTerminal } from "react-icons/di";
import {
  MdOutlineScience,
  MdOutlineBuild,
  MdPalette,
} from "react-icons/md";

export interface TechIcon {
  icon: ReactNode;
  color: string;
  bgColor: string;
}

/* ─── Custom SVG Icons for technologies not in react-icons ─── */

function CSharpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
      <text x="3" y="18" fontSize="16" fontWeight="700" stroke="none" fill="currentColor">C#</text>
    </svg>
  );
}

function PlaywrightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Icon Map ─── */

const iconMap: Record<string, TechIcon> = {
  // Frontend
  Angular: { icon: <SiAngular />, color: "#DD0031", bgColor: "#DD003110" },
  React: { icon: <SiReact />, color: "#61DAFB", bgColor: "#61DAFB10" },
  "Next.js": { icon: <SiNextdotjs />, color: "#000000", bgColor: "#00000010" },
  "Vue.js": { icon: <SiVuedotjs />, color: "#4FC08D", bgColor: "#4FC08D10" },
  TypeScript: { icon: <SiTypescript />, color: "#3178C6", bgColor: "#3178C610" },
  JavaScript: { icon: <SiJavascript />, color: "#F7DF1E", bgColor: "#F7DF1E10" },
  jQuery: { icon: <SiJquery />, color: "#0769AD", bgColor: "#0769AD10" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4", bgColor: "#06B6D410" },
  PWA: { icon: <MdOutlineScience />, color: "#5A0FC8", bgColor: "#5A0FC810" },

  // Backend
  ".NET Core 7+": { icon: <SiDotnet />, color: "#512BD4", bgColor: "#512BD410" },
  "Node.js": { icon: <SiNodedotjs />, color: "#339933", bgColor: "#33993310" },
  Express: { icon: <SiExpress />, color: "#000000", bgColor: "#00000010" },
  "C#": { icon: <CSharpIcon />, color: "#239120", bgColor: "#23912010" },
  "Nest.js": { icon: <SiNestjs />, color: "#E0234E", bgColor: "#E0234E10" },
  Go: { icon: <SiGo />, color: "#00ADD8", bgColor: "#00ADD810" },
  REST: { icon: <DiDatabase />, color: "#E44D26", bgColor: "#E44D2610" },
  COBOL: { icon: <DiTerminal />, color: "#8B4513", bgColor: "#8B451310" },

  // Testing & QA
  Playwright: { icon: <PlaywrightIcon />, color: "#45BA4B", bgColor: "#45BA4B10" },
  "E2E Testing": { icon: <MdOutlineBuild />, color: "#6C5CE7", bgColor: "#6C5CE710" },

  // DevOps & Tools
  Docker: { icon: <SiDocker />, color: "#2496ED", bgColor: "#2496ED10" },
  Git: { icon: <SiGit />, color: "#F05032", bgColor: "#F0503210" },
  "CI/CD": { icon: <DiTerminal />, color: "#2D9CDB", bgColor: "#2D9CDB10" },
  Linux: { icon: <SiLinux />, color: "#FCC624", bgColor: "#FCC62410" },
  CUPS: { icon: <DiTerminal />, color: "#27AE60", bgColor: "#27AE6010" },

  // Creative
  Blender: { icon: <SiBlender />, color: "#F5792A", bgColor: "#F5792A10" },
  "Fusion 360": { icon: <MdPalette />, color: "#FF6B00", bgColor: "#FF6B0010" },
  "3D Printing": { icon: <MdOutlineScience />, color: "#00B894", bgColor: "#00B89410" },
  Figma: { icon: <SiFigma />, color: "#F24E1E", bgColor: "#F24E1E10" },
  FreeCAD: { icon: <SiFreecad />, color: "#CB3837", bgColor: "#CB383710" },
  "Davinci Resolve": { icon: <SiDavinciresolve />, color: "#233A51", bgColor: "#233A5110" },
};

export function getTechIcon(name: string): TechIcon | undefined {
  return iconMap[name];
}
