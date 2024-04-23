import React from 'react'

const DisplayComponent = (props) => {
    const h = () => {
        if (props.time.h === 0) {
            return '';
        } 
        else {
            return 
            <>
                <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h} </span>&nbsp; : &nbsp;
            </>
        }

    }

    return (
        <div>
            <div className='clock-holder'>
                <div className='stopwatch' style={{'color':'white','text-shadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                    {h()}
                    <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp; : &nbsp;
                    <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp; : &nbsp;
                    <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>&nbsp;
                </div>
            </div>
        </div>
    )
}

export default DisplayComponent