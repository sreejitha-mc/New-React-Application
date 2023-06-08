import React from "react"
import {Outlet} from "react-router-dom"

import TavNav from "./TabNav"

const Tabs = () => {
	return (
		<div className="tabs">
			<h1>Tabs demo page </h1>
			<TavNav />
			<Outlet />
		</div>
	)
}

export default Tabs