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
				<div className="flex flex-grow flex-col-reverse md:flex-row items-center my-20 mx-2 sm:mx-10 h-auto gap-6 lg:mx-40">
					<div className="md:w-1/2 w-full flex flex-col justify-center">
						<p className="block text-lg leading-tight font-medium text-black hover:underline">
							{data.title}
						</p>

						<p className="mt-4 text-slate-700 w-auto md:w-11/12 text-start">
							<Truncate text={data.explanation} />.
						</p>

						{data.copyright ? (
							<p className="mt-4 tracking-wide text-sm text-indigo-500 font-semibold">
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
								className="object-cover aspect-4/3 rounded-md w-72 md:w-auto"
							/>
						) : (
							<iframe
								title={data.title}
								src={data.url}
								className="object-cover aspect-4/3 rounded-md w-72 md:w-auto"
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
