import React from 'react'

import getDate from "../../../utils/getDate";

const StockContent = () => {
  return (
    <div className='px-4 py-lg-4'>
        <div className="title mb-5 mt-5 mt-lg-0">
            <h1>Stock</h1>
            <small className="text-muted">{getDate()}</small>
        </div>
    </div>
  )
}

export default StockContent;