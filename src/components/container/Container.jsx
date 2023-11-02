import React, { useCallback, useEffect, useState } from "react"
import TabMenu from "./TabMenu"
import Filter from "./Filter"
import RecordCard from "./RecordCard"

function Container() {
    const [records, setRecords] = useState([])

    async function fetchRecords() {
        const response = await fetch("http://localhost:1111/api/v1/get-records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: "[]"
        })
        const records = await response.json()
        setRecords(records)
    }

    useEffect(() => {
        fetchRecords()
    }, [])

    return (
        <div className="container">
            <TabMenu/>
            <Filter genres={["rock","jazz","pop"]} years={["1001","1002"]} statuses={["sold","selling"]} />
            {records.map(record => (
                <RecordCard key={record.id} title={record.title} artist={record.artist} genre={record.genre} year={record.year} description={record.description}/>
            ))}
        </div>
    )
}

export default Container