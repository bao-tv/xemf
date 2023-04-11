import React from 'react'

function SeatSelect() {
  return (
    <>
         <h3 className='text-center text-light mt-5'>DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div className="seatStatus">
            <div className="seatDone"></div>
            <span>Ghế đã đặt</span>
        </div>
        <div className="seatStatus mt-3">
            <div className="seatSelecting">
            </div>
            <span>Ghế đang chọn</span>
        </div>
        <div className="seatStatus mt-3">
            <div className="seatEmpty">
            </div>
            <span>Ghế chưa đặt</span>
        </div>
        <table className="table table-bordered mt-4 text-light">
            <thead>
                <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col">Hủy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A1</td>
                    <td>75.000</td>
                    <td>
                        <button type="button" className="btn btn-danger">x</button>
                    </td>
                </tr>
               
                <tr>
                    <td>Tổng</td>
                    <td colSpan="2">1000</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default SeatSelect