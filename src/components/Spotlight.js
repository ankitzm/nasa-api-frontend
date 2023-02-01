import React from "react"

function Truncate({ text }) {
	const sentences = text.split(".")
	if (sentences.length > 2) {
		return sentences.slice(0, 2).join(". ")
	}
	return text
}

function Spotlight({ data }) {
	return (
		<>
			{data ? (
				<div className="flex flex-grow flex-col-reverse md:flex-row items-center my-10 mx-2 sm:mx-10 h-auto gap-6 lg:mx-40">
					<div className="md:w-1/2 w-full flex flex-col justify-center text-lg lg:text-xl">
						<p className="font-bold text-lg py-4 text-red-700">
							{data.date}
						</p>
						<p className="block text-lg lg:text-xl leading-tight font-medium text-black underline-offset-2">
							{data.title}
						</p>

						<p className="mt-4 text-lg text-slate-700 w-auto md:w-11/12 text-start">
							<Truncate text={data.explanation} />.
						</p>

						{data.copyright ? (
							<p className="mt-4 tracking-wide text-base text-indigo-500 font-semibold">
								Copyrights: {data.copyright}
							</p>
						) : (
							""
						)}
					</div>

					<div className="sm:w-1/2 w-full max-w-xl h-auto bg-green flex items-center justify-center">
						{data.media_type === "image" ? (
							<img
								src={data.url}
								alt="Front of men&#039;s Basic Tee in black."
								className="object-cover aspect-4/3 rounded-md w-72 md:w-auto shadow-2xl shadow-slate-700"
							/>
						) : (
							<iframe
								title={data.title}
								src={data.url}
								className="object-cover aspect-4/3 rounded-md w-72 md:w-auto shadow-2xl shadow-slate-700"
							/>
						)}
					</div>
				</div>
			) : (
				""
			)}
		</>
	)
}

export default Spotlight
