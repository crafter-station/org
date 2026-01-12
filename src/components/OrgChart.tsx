import { useState } from "react";
import { ZoomableCanvas, HierarchyView } from "@crafter/flow";
import { team, type TeamMember } from "../data/team";

function TeamNode({
  member,
  isDark,
}: {
  member: TeamMember;
  isDark: boolean;
}) {
  const isOrg = member.level === "org";
  const isFounder = member.level === "founder";

  const baseClasses =
    "px-5 py-3 rounded-md border-2 transition-all text-center min-w-[120px]";

  const darkClasses = isOrg
    ? "bg-[#FFD800] border-[#FFD800] text-[#0A0A0A]"
    : isFounder
      ? "bg-[#171717] border-[#FFD800] text-white"
      : "bg-[#171717] border-[#262626] text-white hover:border-[#FFD800]/50";

  const lightClasses = isOrg
    ? "bg-[#FFD800] border-[#FFD800] text-[#0A0A0A]"
    : isFounder
      ? "bg-white border-[#FFD800] text-[#0A0A0A] shadow-sm"
      : "bg-white border-[#E5E5E5] text-[#0A0A0A] shadow-sm hover:border-[#FFD800]/60";

  return (
    <div className={`${baseClasses} ${isDark ? darkClasses : lightClasses}`}>
      <div
        className={`font-black tracking-tight ${isOrg ? "text-base uppercase" : "text-sm font-semibold"}`}
      >
        {member.name}
      </div>
      <div
        className={`text-xs mt-1 font-medium ${
          isDark
            ? isOrg
              ? "text-[#0A0A0A]/70"
              : "text-[#A3A3A3]"
            : isOrg
              ? "text-[#0A0A0A]/70"
              : "text-[#737373]"
        }`}
      >
        {member.role}
      </div>
    </div>
  );
}

function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`
        fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2 rounded-md
        transition-all font-medium text-sm border
        ${
          isDark
            ? "bg-[#171717] border-[#262626] text-white hover:border-[#FFD800]/50"
            : "bg-white border-[#E5E5E5] text-[#0A0A0A] hover:border-[#FFD800]/50 shadow-sm"
        }
      `}
    >
      {isDark ? (
        <>
          <svg className="w-4 h-4 text-[#FFD800]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          Light
        </>
      ) : (
        <>
          <svg className="w-4 h-4 text-[#FFD800]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          Dark
        </>
      )}
    </button>
  );
}

function Header({ isDark }: { isDark: boolean }) {
  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-md flex items-center justify-center ${
          isDark ? "bg-[#171717] border border-[#262626]" : "bg-white border border-[#E5E5E5] shadow-sm"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-[#FFD800]"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>
      <div>
        <div className={`font-black text-sm tracking-tight ${isDark ? "text-white" : "text-[#0A0A0A]"}`}>
          CRAFTER <span className="text-[#FFD800]">STATION</span>
        </div>
        <div className={`text-xs ${isDark ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
          Team Organization
        </div>
      </div>
    </div>
  );
}

export function OrgChart() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`w-full h-screen transition-colors duration-200 ${
        isDark ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
      }`}
    >
      <Header isDark={isDark} />
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

      <ZoomableCanvas
        backgroundColor={isDark ? "#0A0A0A" : "#F5F5F5"}
        dotColor={isDark ? "rgba(255, 216, 0, 0.08)" : "rgba(255, 216, 0, 0.2)"}
        gridSpacing={24}
        minZoom={0.3}
        maxZoom={2}
      >
        <HierarchyView<TeamMember>
          data={team}
          config={{ direction: "vertical" }}
          nodeSize={(node) => {
            if (node.level === "org") return { width: 180, height: 68 };
            if (node.level === "founder") return { width: 160, height: 62 };
            return { width: 130, height: 56 };
          }}
          gap={{ x: 20, y: 70 }}
          edgeColor={isDark ? "rgba(255, 216, 0, 0.4)" : "rgba(255, 216, 0, 0.6)"}
          renderNode={(node) => <TeamNode member={node} isDark={isDark} />}
        />
      </ZoomableCanvas>
    </div>
  );
}
