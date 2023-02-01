import React from "react"
import Spotlight from "./Spotlight"

function Preview({ mediaType, url, title, date, explanation, copyright }) {
	const [showModal, setShowModal] = React.useState(false)

	return (
		<div className="w-32 sm:w-56 md:w-72">
			<div onClick={() => setShowModal(true)}>
				{mediaType === "image" ? (
					<img
						src={url}
						alt="Front of men&#039;s Basic Tee in black."
						className="object-cover aspect-4/3 object-center rounded-md"
						loading="lazy"
					/>
				) : (
					<iframe
						title={title}
						src="https://www.youtube.com/embed/0fKBhvDjuy0?rel=0"
						className="aspect-4/3 w-32 sm:w-56 md:w-72 rounded-md"
					/>
				)}
			</div>
			<div className="mt-4 flex flex-col justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<p>{title}</p>
					</h3>
				</div>
				<p className="text-sm font-medium text-gray-900 inline-block bottom-0 py-4">{date}</p>

				{showModal ? (
					<>
						<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
							<div className="relative my-6 mx-auto w-10/12">
								{/*content*/}
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							
									<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
										<h3 className="text-3xl font-semibold">
											Modal Title
										</h3>
										<button
											className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											❌
										</button>
									</div>
									{/*body*/}
									<div className="relative p-6 flex-auto">
										<Spotlight
											data={{
												title: title,
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
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null}
			</div>
		</div>
	)
}

export default Preview
