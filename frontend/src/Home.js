import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./Home.css";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
// import Calendar from "./assets/calendar.png";
import TRR from "./assets/trr.png";
import Recycling from "./assets/recycling.png";
import moment from 'moment';

export default function Home() {
    const [startDate, setStartDate] = useState(new Date());

    function getRandom() {
        return Math.floor((Math.random()).toFixed(2) * 100);
    }

    const data = [
        {
            name: 'Page A',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
        {
            name: 'Page B',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
        {
            name: 'Page C',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
        {
            name: 'Page D',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
        {
            name: 'Page E',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
        {
            name: 'Page F',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
        {
            name: 'Page G',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
        {
            name: 'Page H',
            uv: getRandom(),
            pv: getRandom(),
            amt: getRandom(),
        },
    ];

    return (
        <div className="home">
            <div className="card-container">

                <div class="date-card">
                    <DatePicker className="date-picker" selected={startDate} onChange={date => setStartDate(date)} />
                    <span>{moment(startDate).format("LLLL")}</span>

                </div>

                <div className="card">
                    <div class="home-card">
                        <div className="card-data">
                            <p className="icon"><img class="icon" src={TRR} alt="schedule" /><span>T.R.R</span></p>
                            <h2 onChange={getRandom()}>{getRandom()}</h2>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="card-data">
                            <p className="icon"><img class="icon" src={Recycling} alt="schedule" />Recovered</p>
                            <h2 onChange={getRandom()}>{getRandom()}<span class="kg">Kg.</span></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" id="chart">
                <div>
                    <div className="card-data">
                        <p className="icon"><img class="icon" src={Recycling} alt="schedule" />Recovered</p>
                    </div>
                </div>
                <ResponsiveContainer width={'99%'} height={300}>
                    <LineChart
                        width={1300}
                        height={400}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div >
    )
}
