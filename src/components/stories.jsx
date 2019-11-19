import React from "react";

class Stories extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <div className="newsAll">
                <div className="newsImg1">
                <img className="newsImg" src="https://cdn.vox-cdn.com/thumbor/PpdyWGfF1WM8ptEA5_lxqndfWYc=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65711737/DSCF0458.0.0.jpg"/>
            </div>

            <div className="newspart">
            <h2 className="newsTitle">
                <a  className="newsTitle1" href="https://www.theverge.com/2019/11/15/20966362/apple-vaping-e-cigarette-apps-remove-app-store">
                Twitter’s political ad ban provides little oversight for fossil fuel companies
</a>
            </h2>
            <div className="newsLine">
                By
                <span className="newsA"> Sam Byford </span> 
                <span className="newsB"> November 15</span>
                <span className="newsC"> 6 comments </span>
            </div>
        </div>
    </div>
        )
    }

}

export default Stories;