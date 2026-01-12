import { ZoomableCanvas, HierarchyView } from "@crafter/flow";
import { team, type TeamMember } from "../data/team";

function TeamNode({ member }: { member: TeamMember }) {
  const isOrg = member.id === "crafter-station";
  const isTeam = member.id === "dev-team";

  return (
    <div
      className={`
        px-4 py-3 rounded-xl border transition-all
        ${
          isOrg
            ? "bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/20"
            : isTeam
              ? "bg-zinc-800/80 border-zinc-700"
              : "bg-zinc-900/90 border-zinc-800 hover:border-purple-500/50"
        }
      `}
    >
      <div className={`font-semibold ${isOrg ? "text-purple-300" : "text-zinc-100"}`}>
        {member.name}
      </div>
      <div className="text-xs text-zinc-400 mt-0.5">{member.role}</div>
    </div>
  );
}

export function OrgChart() {
  return (
    <div className="w-full h-screen bg-zinc-950">
      <ZoomableCanvas
        backgroundColor="#09090b"
        dotColor="rgba(168, 85, 247, 0.15)"
        gridSpacing={20}
        minZoom={0.3}
        maxZoom={2}
      >
        <HierarchyView<TeamMember>
          data={team}
          nodeSize={(node) => {
            if (node.id === "crafter-station") return { width: 200, height: 70 };
            if (node.id === "dev-team") return { width: 140, height: 60 };
            return { width: 180, height: 60 };
          }}
          gap={{ x: 40, y: 60 }}
          edgeColor="rgba(168, 85, 247, 0.4)"
          edgeAnimation={{ style: "dots" }}
          renderNode={(node) => <TeamNode member={node} />}
        />
      </ZoomableCanvas>
    </div>
  );
}
