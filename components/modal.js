import React from 'react'



const Modal = (props) => (
  <div className="modal-container">
  <div className="modal-box">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          sada
        </div>
        <div className="col-md-6">
        dew
        </div>
      </div>
      <div className="row">
        <button className="btn btn-danger" onClick={props.dropModal}>Close</button>
      </div>
    </div>
  </div>
  </div>
)

export default Modal
