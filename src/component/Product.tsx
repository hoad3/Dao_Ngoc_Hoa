import { FaGithub } from "react-icons/fa6";
import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTranslation } from "react-i18next";

const projects = [
	{
		titleKey: "projectpage.tetx_1",
		descKey: "projectpage.tetx_2",
		image: "/assets/web.png",
		github: "https://github.com/hoad3/Shoping-Web",
		demo: null,
	},
	{
		titleKey: "projectpage.tetx_3",
		descKey: "projectpage.tetx_4",
		image: "/assets/Summerizer.png",
		github: "https://github.com/hoad3/NewStalker",
		demo: null,
	},
	{
		titleKey: "projectpage.text_7",
		descKey: "projectpage.text_8",
		image: "/assets/kairos%20(2).jpg",
		github: "https://github.com/hoad3/Kairos",
		demo: null,
	},
	{
		titleKey: "projectpage.text_9",
		descKey: "projectpage.text_10",
		image: "/assets/draw_battle.png",
		github: "https://github.com/hoad3/draw",
		demo: "https://drawbattle.daongochoa.click/login",
	},
    {
        titleKey: "projectpage.text_11",
        descKey: "projectpage.text_12",
        image: "/assets/Web_MVC.png",
        github: "https://github.com/hoad3/QLbansach",
        demo: "https://milkyway.somee.com/#home",
    },
];

const overlayBg = "bg-gradient-to-br from-indigo-500/90 to-pink-400/90";
const cardBg = "bg-gradient-to-br from-indigo-100 to-purple-100";

const Product: React.FC = () => {
	const { t } = useTranslation();
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<div className="w-full py-10 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
			{projects.map((project, idx) => (
				<div
					key={idx}
					className={`${cardBg} rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 max-w-sm w-full group relative cursor-pointer`}
					data-aos="fade-up"
					onClick={() => setSelected(idx)}
				>
					<div className="w-full h-56 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 mb-4">
						<img
							src={project.image}
							alt={t(project.titleKey)}
							className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
						/>
					</div>
					<h3 className="font-bold text-xl text-indigo-700 mb-2 text-center">
						{t(project.titleKey)}
					</h3>
					<p className="text-gray-700 text-sm mb-4 text-center min-h-[64px]">
						{t(project.descKey)}
					</p>
					<div className="flex justify-center gap-4 mt-auto">
						{project.github && (
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 shadow-md"
								onClick={e => e.stopPropagation()}
							>
								<FaGithub className="mr-2" />
								GitHub
							</a>
						)}
						{project.demo && (
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-pink-500 transition-colors duration-200 shadow-md"
								onClick={e => e.stopPropagation()}
							>
								Demo
							</a>
						)}
					</div>
				</div>
			))}
			{/* Xem thêm */}
			<div
				className="bg-gradient-to-br from-indigo-500 to-pink-400 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 max-w-sm w-full min-h-[350px] group relative"
				data-aos="fade-up"
			>
				<span className="font-bold text-xl text-white mb-4 text-center">
					{t("projectpage.tetx_5")}
				</span>
				<a
					href="https://github.com/hoad3"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col items-center justify-center mt-2"
				>
					<FaGithub
						size={48}
						className="m-2 text-white bg-black rounded-full p-2 hover:bg-white hover:text-indigo-600 transition-colors duration-200"
					/>
					<span className="text-white font-semibold mt-2">GitHub</span>
				</a>
			</div>

			{/* Overlay modal for selected project */}
			{selected !== null && (
				<div className={`fixed inset-0 z-[9999] flex items-center justify-center ${overlayBg} bg-opacity-90 transition-all`} onClick={() => setSelected(null)}>
					<div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full flex flex-col items-center relative animate-[zoomIn_0.3s]" onClick={e => e.stopPropagation()}>
						<button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold" onClick={() => setSelected(null)}>&times;</button>
						<div className="w-full h-80 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100 mb-4">
							<img
								src={projects[selected].image ?? undefined}
								alt={t(projects[selected].titleKey)}
								className="object-contain h-full w-full"
							/>
						</div>
						<h3 className="font-bold text-2xl text-indigo-700 mb-2 text-center">
							{t(projects[selected].titleKey)}
						</h3>
						<p className="text-gray-700 text-base mb-4 text-center">
							{t(projects[selected].descKey)}
						</p>
						<div className="flex justify-center gap-4 mt-auto">
							{projects[selected].github && (
								<a
									href={projects[selected].github ?? undefined}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 shadow-md"
								>
									<FaGithub className="mr-2" />
									GitHub
								</a>
							)}
							{projects[selected].demo && (
								<a
									href={projects[selected].demo ?? undefined}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-pink-500 transition-colors duration-200 shadow-md"
								>
									Demo
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Product;