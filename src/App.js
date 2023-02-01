import React, { useState, useEffect } from "react"
import "./App.css"
import Spotlight from "./components/Spotlight"
import Weekly from "./components/Weekly"

function formatDate(date) {
	const formattedDate = date.toISOString().split("T")[0]
	return formattedDate
}

function App() {
	const [data, setData] = useState([])
	const [week, setWeek] = useState(1)

	const weekInMs = 7 * 24 * 60 * 60 * 1000
	const dayInMs = 24 * 60 * 60 * 1000

	const [current, setCurrent] = useState(new Date())
	const [prevDate, setPrevDate] = useState(
		new Date(current.getTime() - weekInMs),
	)

	useEffect(() => {
		fetchData()
	}, [week])

	console.log(process.env)

	function fetchData() {
		fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${
				process.env.REACT_APP_NASA_API
			}&start_date=${formatDate(prevDate)}&end_date=${formatDate(
				current,
			)}`,
		)
			.then(response => response.json())
			.then(res => {
				setData(data.concat(res.reverse()))
				setCurrent(new Date(prevDate - dayInMs))
				setPrevDate(new Date(prevDate - weekInMs))
			})
	}

	const onScroll = () => {
		const scrollTop = document.documentElement.scrollTop
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight

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

	console.log(weekDataList)

	return (
		<div className="min-h-screen w-full bg-zinc-500">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Spotlight data={data[0]} />
			<Weekly data={data.slice(1, 8)} />

			{/* Show Weekly Data */}
			{weekDataList.map(dataList => {
				return (
					<div key={dataList[0].date}>
						<Weekly data={dataList} />
					</div>
				)
			})}
		</div>
	)
}

export default App
