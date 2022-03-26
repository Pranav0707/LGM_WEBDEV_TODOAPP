import React from "react";

function TODOlist(props) {
  return (
    <div className="container" style={{paddingBottom:'9px',paddingLeft:'10px'}}>
    {props.index}
      <div className="row">
        <div className="col-md-6">
            <h6>{props.task}</h6>
        </div>
        <div className="col-md-6">
            <button className="button btn btn-sm btn-danger" onClick={()=>{
                props.onselect(props.id)
            }}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TODOlist;
