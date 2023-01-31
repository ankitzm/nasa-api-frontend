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
			<div className="flex flex-grow flex-col md:flex-row my-20 mx-16 border-2 h-auto">
				<div className="border-2 md:w-1/2 w-full bg-red-400 flex flex-col justify-center h-80 pl-12">
					{/* <ReadMore text="
                    Where did all the stars go?  What used to be considered a hole in the sky is now known to astronomers as a dark molecular cloud.  Here, a high concentration of dust and molecular gas absorb practically all the visible light emitted from background stars.  The eerily dark surroundings help make the interiors of molecular clouds some of the coldest and most isolated places in the universe.  One of the most notable of these dark absorption nebulae is a cloud toward the constellation Ophiuchus known as Barnard 68, pictured here.  That no stars are visible in the center indicates that Barnard 68 is relatively nearby, with measurements placing it about 500 light-years away and half a light-year across.  It is not known exactly how molecular clouds like Barnard 68 form, but it is known that these clouds are themselves likely places for new stars to form. In fact, Barnard 68 itself has been found likely to collapse and form a new star system. It is possible to look right through the cloud in infrared light.Postcards from the Universe 2022: APOD Year in Review" /> */}

					<p className="block text-lg leading-tight font-medium text-black hover:underline">
						{data.title}
						dwib
					</p>

					<p className="mt-2 text-slate-500">
						{data.explanation ? <Truncate text={data.explanation} /> : ""}
					</p>

					<p className="uppercase mt-2 tracking-wide text-sm text-indigo-500 font-semibold">
						{data.copyright}
					</p>
				</div>

				<div className="border-2 sm:w-1/2 w-full h-auto bg-green-400 flex items-center justify-center">
					<img
						src={data.url}
						alt="Front of men&#039;s Basic Tee in black."
						className="object-cover aspect-4/3 object-center rounded-md"
					/>
				</div>
			</div>
		</>
	)
}

export default Spotlight
