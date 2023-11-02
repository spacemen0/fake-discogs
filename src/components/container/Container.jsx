import React from "react"
import TabMenu from "./TabMenu"
import Filter from "./Filter"
import RecordCard from "./RecordCard"

function Container() {
    return (
        <div className="container">
            <TabMenu/>
            <Filter genres={["rock","jazz","pop"]} years={["1001","1002"]} statuses={["sold","selling"]} />
            <RecordCard title={"title"} artist={"artist"} genre={"rock"} year={"2002"}/>
        </div>
    )
}

export default Container