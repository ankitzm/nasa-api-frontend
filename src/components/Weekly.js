import React from "react"
import Preview from "./Preview"

function Weekly({data}) {
	return (
		<div className="flex overflow-x-scroll pb-10">
			<div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
				{data.map(obj => {
					return (
						<div className="inline-block px-3" key={obj.date}>
							<Preview
								mediaType={obj.media_type}
								url={obj.url}
								title={obj.title}
								date={obj.date}
								explanation={obj.explanation}
								copyright={obj.copyright}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Weekly
