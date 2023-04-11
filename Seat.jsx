import React from 'react';
import data from './danhSachGhe.json'

function Seat() {
    // const data = data;
    // console.log(data);
  return (
    <div className='w-75 m-auto mt-5'>
        {data.map((obj) => {
            // console.log(obj.hang);
            console.log(obj);
            if(obj.hang === '#') {
                return (
                    <div key={obj.hang} className='d-flex justify-content-between align-items-center mt-3'>
                        <div className='text-warning fs-4 opacity-0'>{obj.hang}</div>
                            {(obj.danhSachGhe).map((seat, index) => {
                                // console.log(seat.gia);
                                return (
                                    <span key={seat.soGhe} className='text-warning fs-4'>{index}</span>
                                )
                            })}
                    </div>
                )
            } else {
                return (
                    <div key={obj.hang}  className='d-flex justify-content-between align-items-center mt-2'>
                        <div className='text-warning pe-3 fs-4'>{obj.hang}</div>
                            {(obj.danhSachGhe).map((seat, index) => {
                                // console.log(seat.daDat);
                                return (
                                    <button 
                                        key={seat.soGhe} 
                                        style={{backgroundColor: seat.daDat ? '#ffa008' : ''}} 
                                        type="button" 
                                        className="btn btn-light btn-outline-success seatNum text-black"
                                        disabled={seat.daDat}
                                    >{index}</button>
                                )
                            })}
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Seat