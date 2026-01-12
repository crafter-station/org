import { HierarchyView, ZoomableCanvas } from "@crafter/flow";
import { useCallback, useEffect, useState } from "react";
import { type TeamMember, team } from "../data/team";

const FLAG: Record<string, string> = {
	PE: "🇵🇪",
	CO: "🇨🇴",
};

function ProfilePopover({
	member,
	isDark,
	onClose,
}: {
	member: TeamMember;
	isDark: boolean;
	onClose: () => void;
}) {
	const [isVisible, setIsVisible] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = useCallback(() => {
		setIsClosing(true);
		setTimeout(() => {
			onClose();
		}, 200);
	}, [onClose]);

	useEffect(() => {
		requestAnimationFrame(() => setIsVisible(true));
	}, []);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") handleClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [handleClose]);

	const isAnimating = isVisible && !isClosing;

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center">
			<div
				className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
					isAnimating ? "opacity-100" : "opacity-0"
				}`}
				onClick={handleClose}
			/>
			<div
				className={`relative z-10 w-[340px] border p-6 transition-all duration-200 ${
					isAnimating
						? "opacity-100 scale-100 translate-y-0"
						: "opacity-0 scale-95 translate-y-2"
				} ${
					isDark
						? "bg-[#171717] border-[#333] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
						: "bg-white border-[#E5E5E5] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
				}`}
			>
				<button
					onClick={handleClose}
					className={`absolute top-4 right-4 w-7 h-7 flex items-center justify-center transition-all ${
						isDark
							? "hover:bg-[#262626] text-[#737373] hover:text-white"
							: "hover:bg-[#F5F5F5] text-[#A3A3A3] hover:text-[#0A0A0A]"
					}`}
				>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="flex items-center gap-4">
					{member.avatar && (
						<div className="relative">
							<img
								src={member.avatar}
								alt={member.name}
								className="w-[72px] h-[72px] border-2 border-[#FFD800]/30 object-cover"
							/>
							{member.country && (
								<span className="absolute -bottom-1 -right-1 text-sm bg-[#171717] px-1 py-0.5 border border-[#333]">
									{FLAG[member.country]}
								</span>
							)}
						</div>
					)}
					<div className="flex-1 min-w-0">
						<h3
							className={`font-bold text-lg leading-tight ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
						>
							{member.name}
						</h3>
						<p
							className={`text-sm mt-0.5 ${isDark ? "text-[#A3A3A3]" : "text-[#737373]"}`}
						>
							{member.role}
						</p>
						{member.founderTitle && (
							<span
								className={`inline-flex mt-2 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${
									isDark ? "bg-white text-[#0A0A0A]" : "bg-[#0A0A0A] text-white"
								}`}
							>
								{member.founderTitle}
							</span>
						)}
					</div>
				</div>

				{member.bio && (
					<p
						className={`mt-5 text-sm leading-relaxed ${isDark ? "text-[#A3A3A3]" : "text-[#525252]"}`}
					>
						{member.bio}
					</p>
				)}

				{(member.github || member.linkedin || member.twitter) && (
					<div
						className={`flex gap-2 mt-5 pt-5 border-t ${isDark ? "border-[#333]" : "border-[#E5E5E5]"}`}
					>
						{member.github && (
							<a
								href={`https://github.com/${member.github}`}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold transition-all ${
									isDark
										? "bg-[#262626] text-white hover:bg-[#333] border border-[#404040]"
										: "bg-[#0A0A0A] text-white hover:bg-[#171717]"
								}`}
							>
								<GitHubLogo className="w-4 h-4" />
								GitHub
							</a>
						)}
						{member.linkedin && (
							<a
								href={`https://linkedin.com/in/${member.linkedin}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold bg-[#0A66C2] text-white hover:bg-[#004182] transition-all"
							>
								<LinkedInLogo className="w-4 h-4" />
								LinkedIn
							</a>
						)}
						{member.twitter && (
							<a
								href={`https://twitter.com/${member.twitter}`}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center justify-center px-3 py-2.5 text-xs font-semibold transition-all ${
									isDark
										? "bg-[#262626] text-white hover:bg-[#333] border border-[#404040]"
										: "bg-[#0A0A0A] text-white hover:bg-[#171717]"
								}`}
							>
								<XLogo className="w-4 h-4" />
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

function TeamNode({
	member,
	isDark,
	onClick,
}: {
	member: TeamMember;
	isDark: boolean;
	onClick?: () => void;
}) {
	const isOrg = member.level === "org";
	const isFounder = member.level === "founder";
	const isTeam = member.level === "team";
	const isClickable = !isOrg && !isTeam;

	const wrapperClass = isClickable ? "cursor-pointer" : "";

	if (isOrg) {
		return (
			<div className="relative px-6 py-4 bg-[#FFD800] border-2 border-[#FFD800] shadow-lg">
				<div className="text-center">
					<div className="text-base font-black tracking-tight text-[#0A0A0A] whitespace-nowrap">
						CRAFTER STATION
					</div>
					<div className="mt-1.5 inline-flex px-2.5 py-0.5 bg-[#0A0A0A]/10 text-[10px] font-medium text-[#0A0A0A]/80">
						Organization
					</div>
				</div>
			</div>
		);
	}

	if (isFounder) {
		return (
			<div
				onClick={onClick}
				className={`relative p-4 border-2 overflow-hidden ${wrapperClass} ${
					isDark
						? "bg-[#171717] border-[#FFD800] shadow-[0_0_20px_rgba(255,216,0,0.15)] hover:shadow-[0_0_30px_rgba(255,216,0,0.25)]"
						: "bg-white border-[#FFD800] shadow-lg hover:shadow-xl"
				} transition-all`}
			>
				{member.country && (
					<span
						className={`absolute top-0 right-0 text-xs px-1.5 py-0.5 ${
							isDark
								? "bg-[#262626] border-l border-b border-[#404040]"
								: "bg-[#F5F5F5] border-l border-b border-[#D4D4D4]"
						}`}
					>
						{FLAG[member.country]}
					</span>
				)}
				<div className="text-center">
					<div
						className={`text-sm font-bold whitespace-nowrap ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
					>
						{member.name}
					</div>
					<div className="mt-2 flex flex-wrap justify-center gap-1.5">
						<span
							className={`inline-flex px-2 py-0.5 text-[10px] font-medium whitespace-nowrap ${
								isDark
									? "bg-[#FFD800]/10 text-[#FFD800] border border-[#FFD800]/20"
									: "bg-[#FFD800]/20 text-[#996B00] border border-[#FFD800]/40"
							}`}
						>
							{member.role}
						</span>
						{member.founderTitle && (
							<span
								className={`inline-flex px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${
									isDark ? "bg-white text-[#0A0A0A]" : "bg-[#0A0A0A] text-white"
								}`}
							>
								{member.founderTitle}
							</span>
						)}
					</div>
				</div>
			</div>
		);
	}

	if (isTeam) {
		return (
			<div
				className={`relative p-3 border ${
					isDark
						? "bg-[#1a1a1a] border-[#404040]"
						: "bg-[#FAFAFA] border-[#D4D4D4] shadow-sm"
				}`}
			>
				<div className="text-center">
					<div
						className={`text-xs font-semibold whitespace-nowrap ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
					>
						{member.name}
					</div>
					{member.role && (
						<div
							className={`mt-1.5 inline-flex px-2 py-0.5 text-[9px] font-medium whitespace-nowrap ${
								isDark
									? "bg-[#262626] text-[#A3A3A3]"
									: "bg-[#E5E5E5] text-[#525252]"
							}`}
						>
							{member.role}
						</div>
					)}
				</div>
			</div>
		);
	}

	return (
		<div
			onClick={onClick}
			className={`relative p-4 border transition-all overflow-hidden ${wrapperClass} ${
				isDark
					? "bg-[#171717] border-[#333] hover:border-[#FFD800]/50 hover:shadow-[0_0_15px_rgba(255,216,0,0.1)]"
					: "bg-white border-[#D4D4D4] shadow-sm hover:border-[#FFD800] hover:shadow-md"
			}`}
		>
			{member.country && (
				<span
					className={`absolute top-0 right-0 text-[10px] px-1 py-0.5 ${
						isDark
							? "bg-[#262626] border-l border-b border-[#404040]"
							: "bg-[#F5F5F5] border-l border-b border-[#D4D4D4]"
					}`}
				>
					{FLAG[member.country]}
				</span>
			)}
			<div className="text-center">
				<div
					className={`text-sm font-semibold whitespace-nowrap ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
				>
					{member.name}
				</div>
				<div className="mt-1.5 flex flex-wrap justify-center gap-1">
					<span
						className={`inline-flex px-2 py-0.5 text-[10px] font-medium whitespace-nowrap ${
							isDark
								? "bg-[#FFD800]/10 text-[#FFD800] border border-[#FFD800]/20"
								: "bg-[#FFD800]/20 text-[#996B00] border border-[#FFD800]/40"
						}`}
					>
						{member.role}
					</span>
					{member.founderTitle && (
						<span
							className={`inline-flex px-2 py-0.5 text-[9px] font-semibold whitespace-nowrap ${
								isDark ? "bg-white text-[#0A0A0A]" : "bg-[#0A0A0A] text-white"
							}`}
						>
							{member.founderTitle}
						</span>
					)}
				</div>
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
        fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2
        transition-all font-medium text-sm border
        ${
					isDark
						? "bg-[#171717] border-[#333] text-white hover:border-[#FFD800]/50"
						: "bg-white border-[#D4D4D4] text-[#0A0A0A] hover:border-[#FFD800] shadow-sm"
				}
      `}
		>
			{isDark ? (
				<>
					<svg
						className="w-4 h-4 text-[#FFD800]"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
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
					<svg
						className="w-4 h-4 text-[#FFD800]"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
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
		<svg viewBox="0 0 257 257" className={className} fill="currentColor">
			<path d="M116.419 16.3268C109.59 11.5679 97.9222 5.96914 90.2388 3.72965C72.8798 -1.58913 59.1794 1.40491 50.114 4.56947C32.4704 10.7281 21.3721 18.8462 11.412 33.6828C-4.23949 56.6375 -1.96292 93.869 17.1035 114.864C21.3721 119.903 23.6487 119.063 40.1539 107.026C40.723 106.466 38.4465 102.827 35.0316 98.6278C27.3481 89.11 22.7949 71.754 25.0715 61.9563C32.4704 31.1634 70.3187 14.6472 94.7919 31.4433C100.199 35.0825 117.273 50.199 132.64 65.0356C155.691 86.8706 162.52 91.9094 168.212 91.3496C173.903 90.7897 175.895 88.8301 176.464 82.6715C177.318 75.9531 174.757 72.034 161.667 60.2767C152.845 52.1585 145.731 44.8802 145.731 43.4805C145.731 42.3608 151.707 37.6019 159.105 33.1229C206.914 3.1698 258.421 62.7961 218.581 101.987C213.459 107.026 204.353 112.345 198.377 114.024C191.547 115.704 159.959 117.104 120.688 117.104C47.2683 117.104 43.2842 117.943 23.9332 135.02C-0.824636 157.134 -6.51609 194.926 10.8429 222.359C33.3241 258.191 81.7016 267.149 115.85 241.675L128.372 232.157L142.885 241.675C166.504 257.351 185.571 260.431 208.621 252.872C254.722 237.476 271.796 179.809 241.916 141.178C238.501 136.979 236.794 136.699 232.241 138.939C218.297 146.777 218.581 146.217 226.834 163.013C233.094 175.89 234.233 180.929 232.81 190.727C228.826 215.361 210.044 231.877 186.14 231.877C167.643 231.877 161.667 228.238 127.518 195.486C109.59 178.689 93.0845 164.693 90.8079 164.693C86.5393 164.693 77.433 173.371 77.433 177.57C77.433 178.689 85.1165 187.647 94.7919 197.165L112.151 214.241L101.906 222.08C65.7655 249.233 14.2578 216.761 26.2098 174.211C29.9093 161.333 42.9996 147.057 55.5209 142.578C60.3586 140.618 90.2388 139.498 130.648 139.498C204.922 139.498 213.744 138.099 230.818 123.542C281.757 80.9919 252.161 0.930299 185.571 1.21023C166.22 1.21023 155.691 5.12933 137.762 18.2863L128.656 25.0048L116.419 16.3268Z" />
		</svg>
	);
}

function GitHubLogo({ className }: { className?: string }) {
	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			className={className}
			fill="currentColor"
		>
			<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
		</svg>
	);
}

function LinkedInLogo({ className }: { className?: string }) {
	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			className={className}
			fill="currentColor"
		>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

function XLogo({ className }: { className?: string }) {
	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			className={className}
			fill="currentColor"
		>
			<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
		</svg>
	);
}

function Header({ isDark }: { isDark: boolean }) {
	return (
		<div className="fixed top-5 left-5 z-50 flex items-center gap-3">
			<div
				className={`w-10 h-10 flex items-center justify-center ${
					isDark
						? "bg-[#171717] border border-[#333]"
						: "bg-white border border-[#D4D4D4] shadow-sm"
				}`}
			>
				<CrafterStationLogo className="w-6 h-6 text-[#FFD800]" />
			</div>
			<div>
				<div
					className={`font-black text-sm tracking-tight ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
				>
					CRAFTER <span className="text-[#FFD800]">STATION</span>
				</div>
				<div
					className={`text-xs ${isDark ? "text-[#A3A3A3]" : "text-[#737373]"}`}
				>
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
        fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3 py-2
        transition-all text-xs font-medium border
        ${
					isDark
						? "bg-[#171717] border-[#333] text-[#A3A3A3] hover:border-[#FFD800]/50 hover:text-white"
						: "bg-white border-[#D4D4D4] text-[#737373] hover:border-[#FFD800] hover:text-[#0A0A0A] shadow-sm"
				}
      `}
		>
			<GitHubLogo
				className={`w-4 h-4 ${isDark ? "text-white" : "text-[#0A0A0A]"}`}
			/>
			<span>Built with</span>
			<span className="text-[#FFD800] font-semibold">@crafter/flow</span>
		</a>
	);
}

export function OrgChart() {
	const [isDark, setIsDark] = useState(true);
	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

	return (
		<div
			className={`w-full h-screen transition-colors duration-200 ${
				isDark ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
			}`}
		>
			<Header isDark={isDark} />
			<ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
			<BuiltWithBadge isDark={isDark} />

			{selectedMember && (
				<ProfilePopover
					member={selectedMember}
					isDark={isDark}
					onClose={() => setSelectedMember(null)}
				/>
			)}

			<ZoomableCanvas
				backgroundColor={isDark ? "#0A0A0A" : "#F5F5F5"}
				dotColor={isDark ? "rgba(255, 216, 0, 0.08)" : "rgba(0, 0, 0, 0.1)"}
				gridSpacing={24}
				minZoom={0.2}
				maxZoom={2}
			>
				<HierarchyView<TeamMember>
					data={team}
					config={{ direction: "horizontal" }}
					nodeSize={(node) => {
						if (node.level === "org") return { width: 180, height: 75 };
						if (node.level === "founder") return { width: 200, height: 90 };
						if (node.level === "team") return { width: 130, height: 55 };
						if (node.founderTitle) return { width: 175, height: 75 };
						return { width: 155, height: 70 };
					}}
					gap={{ x: 35, y: 45 }}
					edgeColor={isDark ? "rgba(255, 216, 0, 0.5)" : "rgba(0, 0, 0, 0.25)"}
					renderNode={(node) => (
						<TeamNode
							member={node}
							isDark={isDark}
							onClick={
								node.level !== "org" && node.level !== "team"
									? () => setSelectedMember(node)
									: undefined
							}
						/>
					)}
				/>
			</ZoomableCanvas>
		</div>
	);
}
