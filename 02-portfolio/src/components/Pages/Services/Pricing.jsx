import React from 'react'

function Pricing() {
  return (
    <>
       <div className='Price'>
          <h4>Pricing</h4>
          <div className="pricing">
            <div>
              <h3 className='number'>0$</h3>
              <p style={{fontWeight:"bold"}}>Free</p>
              <hr />
              <p disabled> 
                Premium Icons
                <br />
                Quality Logo
                <br />
                Stock Images
                <br />
                Free Support
                <br />
              </p>
              <button >Purchase</button>
            </div>
            {/* 2nd */}
            <div>
              <span>Popular</span>
            <h3 className='number'>30$</h3>
              <p style={{fontWeight:"bold"}}>Free</p>
              <hr />
              <p>
                Premium Icons
                <br />
                Quality Logo
                <br />
                Stock Images
                <br />
                Free Support
                <br />
              </p>
              <button>Purchase</button>
            </div>
            {/* 3rd */}
            <div>
            <h3 className='number'>50$</h3>
              <p style={{fontWeight:"bold"}}>Free</p>
              <hr />
              <p>
                Premium Icons
                <br />
                Quality Logo
                <br />
                Stock Images
                <br />
                Free Support
                <br />
              </p>
              <button>Purchase</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Pricing
