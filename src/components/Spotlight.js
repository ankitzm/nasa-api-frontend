import React, { useState, useEffect } from "react"

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
				<div className="flex flex-grow flex-col-reverse md:flex-row items-center my-20 mx-2 sm:mx-10 md:mx-16 border-2 h-auto">
					<div className="border-2 md:w-1/2 w-full bg-red-400 flex flex-col justify-center">
						<p className="block text-lg leading-tight font-medium text-black hover:underline">
							{data.title}
						</p>

						<p className="mt-2 text-slate-500">
							<Truncate text={data.explanation} />
						</p>

						{data.copyright ? (
							<p className="uppercase mt-2 tracking-wide text-sm text-indigo-500 font-semibold">
								{data.copyright}
							</p>
						) : (
							""
						)}

					</div>

					<div className="border-2 sm:w-1/2 w-full h-auto bg-green-400 flex items-center justify-center">
						{data.media_type === "image" ? (
							<img
								src={data.url}
								alt="Front of men&#039;s Basic Tee in black."
								className="object-cover aspect-4/3 object-center rounded-md"
							/>
						) : (
							<iframe
								title={data.title}
								src={data.url}
								className="aspect-4/3 rounded-md"
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
