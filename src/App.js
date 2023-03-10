import React, { useState, useEffect } from "react"
import "./App.css"
import Spotlight from "./components/Spotlight"
import Weekly from "./components/Weekly"
import { Toaster, toast } from "react-hot-toast"
import Loader from "./assets/loader.gif"
import Nasa from "./assets/nasa.jpg"

function formatDate(date) {
	const formattedDate = date.toISOString().split("T")[0]
	return formattedDate
}

function App() {
	const [data, setData] = useState([])
	const [week, setWeek] = useState(1)
	const [loader, setLoader] = useState(true)

	const weekInMs = 7 * 24 * 60 * 60 * 1000
	const dayInMs = 24 * 60 * 60 * 1000

	const [current, setCurrent] = useState(new Date())
	const [prevDate, setPrevDate] = useState(
		new Date(current.getTime() - weekInMs),
	)

	useEffect(() => {
		fetchData()
	}, [week])

	function fetchData() {
		// toast
		toast("Loading more ... ", {
			icon: "◕ ",
			style: {
				borderRadius: "10px",
				width: "220px",
				height: "60px",
				fontSize: "20px",
				background: "#333",
				color: "#fff",
			},
			position: "bottom-center",
		})

		fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${
				process.env.REACT_APP_NASA_API
			}&start_date=${formatDate(prevDate)}&end_date=${formatDate(
				current,
			)}`,
		)
			.then(response => response.json())
			.then(res => {
				setLoader(false)
				setData(data.concat(res.reverse()))
				setCurrent(new Date(prevDate - dayInMs))
				setPrevDate(new Date(prevDate - weekInMs))
			})
	}

	const onScroll = () => {
		const scrollTop = document.documentElement.scrollTop
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight

		// console.log(scrollTop, " dv ", scrollHeight, " te ", clientHeight );
		if (scrollTop + clientHeight >= scrollHeight) {
			setWeek(week + 1)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [data])

	// divide the data into weekly data
	const weekDataList = data.slice(8).reduce((acc, cur, i) => {
		if (i % 7 === 0) {
			acc.push([cur])
		} else {
			acc[acc.length - 1].push(cur)
		}
		return acc
	}, [])

	return (
		<div className="min-h-screen w-full flex flex-col">
			<header className="sticky p-auto font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight flex justify-between w-full py-4 px-10 md:px-16 lg:px-32">
				<div className="flex flex-col">
					<p className="text-2xl sm:text-4xl">NASA</p>
					<p className="text-xl sm:text-3xl">
						(created by Ankit Singh)
					</p>
				</div>
				<img src={Nasa} alt="nasa_logo" className="h-20 w-20" />
			</header>

			{!loader ? (
				<>
					<div className="flex justify-center">
						<Spotlight data={data[0]} />
					</div>

					<h2 className="font-bold ml-6 my-10 leading-7 text-gray-900 sm:truncate sm:tracking-tight text-2xl sm:text-3xl">
						Past Week's ( scroll ➜ )
					</h2>
					<Weekly data={data.slice(1, 8)} />

					{/* Show Weekly Data */}

					{weekDataList.map(dataList => {
						return (
							<div key={dataList[0].date}>
								<Weekly data={dataList} />
							</div>
						)
					})}

					<Toaster />
				</>
			) : (
				<div className="m-auto flex flex-col items-center font-bold leading-7 text-gray-900 text-xl sm:text-2xl">
					<img src={Loader} alt="loader ..." className="w-40" />
					Loading ...
				</div>
			)}
		</div>
	)
}

export default App
