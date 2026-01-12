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

function CrafterStationLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <path d="M50 10C27.91 10 10 27.91 10 50s17.91 40 40 40 40-17.91 40-40S72.09 10 50 10zm0 70c-16.57 0-30-13.43-30-30s13.43-30 30-30 30 13.43 30 30-13.43 30-30 30z" />
      <path d="M50 30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" />
      <circle cx="50" cy="50" r="5" />
    </svg>
  );
}

function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 97.6 96"
      className={className}
      fill="currentColor"
    >
      <path d="M48.9,0C21.8,0,0,22,0,49.2C0,71,14,89.4,33.4,95.9c2.4,0.5,3.3-1.1,3.3-2.4c0-1.1-0.1-5.1-0.1-9.1c-13.6,2.9-16.4-5.9-16.4-5.9c-2.2-5.7-5.4-7.2-5.4-7.2c-4.4-3,0.3-3,0.3-3c4.9,0.3,7.5,5.1,7.5,5.1c4.4,7.5,11.4,5.4,14.2,4.1c0.4-3.2,1.7-5.4,3.1-6.6c-10.8-1.1-22.2-5.4-22.2-24.3c0-5.4,1.9-9.8,5-13.2c-0.5-1.2-2.2-6.3,0.5-13c0,0,4.1-1.3,13.4,5.1c3.9-1.1,8.1-1.6,12.2-1.6s8.3,0.6,12.2,1.6c9.3-6.4,13.4-5.1,13.4-5.1c2.7,6.8,1,11.8,0.5,13c3.2,3.4,5,7.8,5,13.2c0,18.9-11.4,23.1-22.3,24.3c1.8,1.5,3.3,4.5,3.3,9.1c0,6.6-0.1,11.9-0.1,13.5c0,1.3,0.9,2.9,3.3,2.4C83.6,89.4,97.6,71,97.6,49.2C97.7,22,75.8,0,48.9,0z" />
    </svg>
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
        <CrafterStationLogo className="w-6 h-6 text-[#FFD800]" />
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

function BuiltWithBadge({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://github.com/crafter-station/flow"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3 py-2 rounded-md
        transition-all text-xs font-medium border
        ${
          isDark
            ? "bg-[#171717] border-[#262626] text-[#A3A3A3] hover:border-[#FFD800]/50 hover:text-white"
            : "bg-white border-[#E5E5E5] text-[#737373] hover:border-[#FFD800]/50 hover:text-[#0A0A0A] shadow-sm"
        }
      `}
    >
      <GitHubLogo className={`w-4 h-4 ${isDark ? "text-white" : "text-[#0A0A0A]"}`} />
      <span>Built with</span>
      <span className="text-[#FFD800] font-semibold">@crafter/flow</span>
    </a>
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
      <BuiltWithBadge isDark={isDark} />

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
