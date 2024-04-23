import React from 'react'

const BtnDisplayComponent = (props) => {
    return (
        <div style={{"paddingLeft":'50px'}}>
            {(props.status === 0) ?
                <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start} style={{ background: '#2ecc71', borderColor: '#27ae60' }}>Start</button> :
                ""
            }
            {(props.status === 1) ?
                <div>
                    <button className='stopwatch-btn stopwatch-btn-red' onClick={props.stop}  >Stop</button>
                    <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.reset} >Reset</button>
                </div> : ""
            }
            {(props.status === 2) ?
                <div>
                    <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.resume} >Resume</button>
                    <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.reset} >Reset</button>
                </div> : ""
            }

        </div>
    )
}

export default BtnDisplayComponent;