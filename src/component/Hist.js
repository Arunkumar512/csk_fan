import React from 'react'
import "./Hist.css"
import Timelines from './Timelines';
import { ReactComponent as Wistle } from "./wistle.svg";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Hist() {
    let workIconStyles = { background: "#173571" };
    return (
        <div id="trophy">
            <VerticalTimeline>
                {Timelines.map((element) => {
                    return (
                        <VerticalTimelineElement
                            date={
                                <div className='id'>{element.date}</div>}
                            dateClassName="date"
                            iconstyle={{color: '#173571'}}
                            iconStyle={workIconStyles}
                            icon={<Wistle />}
                        ><img class="win_img" src={element.img} alt="trophy" />

                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Hist