import React from "react"

function Preview({ imgUrl, title, date }) {
	return (
		<div className="w-32 sm:w-56 md:w-72">
			<div className="">
				<img
					src={imgUrl}
					alt="Front of men&#039;s Basic Tee in black."
					className="object-cover aspect-4/3 object-center rounded-md"
				/>
			</div>
			<div className="mt-4 flex flex-col justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<p>
							{title}
						</p>
					</h3>
				</div>
				<p className="text-sm font-medium text-gray-900">{date}</p>
			</div>
		</div>
	)
}

export default Preview
