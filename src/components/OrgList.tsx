import type { TeamMember } from "../data/team";

const FLAG: Record<string, string> = {
	PE: "🇵🇪",
	CO: "🇨🇴",
	CN: "🇨🇳",
};

function initials(name: string) {
	return name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((w) => w[0])
		.join("")
		.toUpperCase();
}

function PersonRow({
	member,
	isDark,
	onClick,
}: {
	member: TeamMember;
	isDark: boolean;
	onClick: () => void;
}) {
	if (member.vacant) {
		return (
			<div
				className={`flex items-center gap-3 p-3 border border-dashed ${
					isDark ? "border-[#404040]" : "border-[#D4D4D4]"
				}`}
			>
				<div
					className={`w-9 h-9 shrink-0 border border-dashed flex items-center justify-center ${
						isDark
							? "border-[#404040] text-[#404040]"
							: "border-[#D4D4D4] text-[#D4D4D4]"
					}`}
				>
					+
				</div>
				<div className="min-w-0">
					<div
						className={`text-sm font-semibold ${isDark ? "text-[#737373]" : "text-[#A3A3A3]"}`}
					>
						{member.name}
					</div>
					<div
						className={`text-xs ${isDark ? "text-[#525252]" : "text-[#A3A3A3]"}`}
					>
						{member.role}
					</div>
				</div>
			</div>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={`w-full flex items-center gap-3 p-3 border text-left transition-colors ${
				member.unknown ? "border-dashed" : ""
			} ${
				isDark
					? "bg-[#171717] border-[#333] active:border-[#FFD800]/50"
					: "bg-white border-[#D4D4D4] active:border-[#FFD800]"
			}`}
		>
			<div
				className={`relative shrink-0 overflow-hidden flex items-center justify-center ${
					member.founder
						? "border-2 border-[#FFD800]"
						: isDark
							? "border border-[#333]"
							: "border border-[#D4D4D4]"
				} ${isDark ? "bg-[#262626]" : "bg-[#F5F5F5]"}`}
				style={{ width: 36, height: 36 }}
			>
				{member.avatar ? (
					<img
						src={member.avatar}
						alt={member.name}
						style={{ width: 36, height: 36 }}
						className="object-cover"
					/>
				) : (
					<span
						className={`text-[11px] font-bold ${isDark ? "text-[#737373]" : "text-[#A3A3A3]"}`}
					>
						{initials(member.name)}
					</span>
				)}
			</div>

			<div className="min-w-0 flex-1">
				<div className="flex items-center gap-1.5">
					<span
						className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
					>
						{member.name}
					</span>
					{member.country && (
						<span className="text-[11px] shrink-0">
							{FLAG[member.country]}
						</span>
					)}
				</div>
				<div
					className={`text-xs truncate ${isDark ? "text-[#737373]" : "text-[#737373]"}`}
				>
					{member.role}
				</div>
			</div>

			{member.founder && (
				<span
					className={`shrink-0 px-1.5 py-px text-[9px] font-bold uppercase tracking-wide ${
						isDark ? "bg-[#FFD800] text-[#0A0A0A]" : "bg-[#0A0A0A] text-[#FFD800]"
					}`}
				>
					Founder
				</span>
			)}
		</button>
	);
}

function AreaBlock({
	area,
	isDark,
	onSelect,
}: {
	area: TeamMember;
	isDark: boolean;
	onSelect: (m: TeamMember) => void;
}) {
	return (
		<div className="mb-5">
			<div
				className={`border-l-2 border-[#FFD800] pl-2.5 mb-2 ${
					isDark ? "" : ""
				}`}
			>
				<div
					className={`text-sm font-bold ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
				>
					{area.name}
				</div>
				{area.role && (
					<div
						className={`text-[11px] ${isDark ? "text-[#737373]" : "text-[#737373]"}`}
					>
						{area.role}
					</div>
				)}
			</div>
			<div className="flex flex-col gap-2">
				{(area.children as TeamMember[] | undefined)?.map((m) => (
					<PersonRow
						key={m.id}
						member={m}
						isDark={isDark}
						onClick={() => onSelect(m)}
					/>
				))}
			</div>
		</div>
	);
}

export function OrgList({
	team,
	isDark,
	onSelect,
}: {
	team: TeamMember;
	isDark: boolean;
	onSelect: (m: TeamMember) => void;
}) {
	const clusters = (team.children as TeamMember[] | undefined) ?? [];

	return (
		<div className="px-4 pt-24 pb-16 max-w-lg mx-auto">
			<div
				className={`mb-6 p-4 bg-[#FFD800] text-center`}
			>
				<div className="text-base font-black tracking-tight text-[#0A0A0A]">
					CRAFTER STATION
				</div>
				<div className="mt-1 text-[11px] text-[#0A0A0A]/70">
					Áreas y ownership
				</div>
			</div>

			{clusters.map((cluster) => (
				<section key={cluster.id} className="mb-8">
					<div
						className={`mb-3 px-3 py-1.5 inline-flex text-[10px] font-bold uppercase tracking-widest border border-dashed ${
							isDark
								? "bg-[#FFD800]/[0.06] text-[#FFD800]/80 border-[#FFD800]/30"
								: "bg-[#FFD800]/[0.08] text-[#996B00] border-[#996B00]/30"
						}`}
					>
						{cluster.name}
					</div>
					{(cluster.children as TeamMember[] | undefined)?.map((area) => (
						<AreaBlock
							key={area.id}
							area={area}
							isDark={isDark}
							onSelect={onSelect}
						/>
					))}
				</section>
			))}
		</div>
	);
}
