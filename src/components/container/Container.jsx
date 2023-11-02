import React, { useCallback, useEffect } from "react"
import TabMenu from "./TabMenu"
import Filter from "./Filter"
import RecordCard from "./RecordCard"

function FetchRecords() {
    const fetchRecords = useCallback(async () => {
        const response = await fetch("http://localhost:1111/get-records")
        const records = await response.json()
        console.log(records)
    }, [])

    useEffect(() => {
        fetchRecords()
    }, [fetchRecords])
}

function Container() {

    FetchRecords()
    useEffect(() => {
        document.title = "Record Store"
    }
    , [])
    return (
        <div className="container">
            <TabMenu/>
            <Filter genres={["rock","jazz","pop"]} years={["1001","1002"]} statuses={["sold","selling"]} />
            <RecordCard title={"title"} artist={"artist"} genre={"rock"} year={"2002"}/>
        </div>
    )
}

export default Container