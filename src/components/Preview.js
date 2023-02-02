import React from "react"
import Spotlight from "./Spotlight"
import "./../Shimmer.css"

function Preview({
	mediaType,
	thumbNailUrl,
	url,
	title,
	date,
	explanation,
	copyright,
}) {
	const [showModal, setShowModal] = React.useState(false)

	return (
		<div className="w-32 sm:w-56 md:w-72">
			<div
				onClick={() => setShowModal(true)}
				className="aspect-4/3 h-auto w-32 sm:w-56 md:w-72 bg-slate-300 shimmer cursor-pointer"
			>
				{mediaType === "image" ? (
					<img
						src={url}
						alt={title}
						className="object-cover aspect-4/3 w-32 sm:w-56 md:w-72 object-center rounded-md shadow-lg shadow-gray-600"
						loading="lazy"
					/>
				) : (
					<iframe
						title={title}
						src={thumbNailUrl}
						className="object-cover aspect-4/3 w-32 sm:w-56 md:w-72 rounded-md"
					/>
				)}
			</div>
			<div className="mt-4 flex flex-col justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<p>{title}</p>
					</h3>
				</div>
				<p className="text-sm font-medium text-gray-900 inline-block bottom-0 py-4">
					{date}
				</p>

				{showModal ? (
					<>
						<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
							<div className="relative my-6 mx-auto w-10/12 shadow-2xl shadow-slate-900">
								{/*content*/}
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
									<button
										className="background-transparent font-bold flex justify-end mt-6 mr-10 text-sm ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										❌
									</button>

									{/*body*/}
									<div className="relative px-2 flex justify-center">
										<Spotlight
											data={{
												title: title,
												date,
												explanation: explanation,
												copyright: copyright,
												media_type: mediaType,
												url: url,
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</>
				) : null}
			</div>
		</div>
	)
}

export default Preview
