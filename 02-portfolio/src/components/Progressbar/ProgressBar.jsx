import React from 'react'
// import * as ProgressBar from "@radix-ui/react-progress"

function ProgressBar({ languages,  completed}) {
  return (
    <>
       <div style={{paddingBottom:"20px"}}> 
              <div style={{ display:"flex", justifyContent:"space-between", color:"#b5b3ad" }}>
                    <h6 >{languages}</h6>
                    <h6 >{completed}%</h6>
                </div>

                <div className="ProgressRoot">
                    <div className="ProgressIndicator"
                        style={{ transform: `translateX(-${100 - completed}%)`}}
                    >
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProgressBar
