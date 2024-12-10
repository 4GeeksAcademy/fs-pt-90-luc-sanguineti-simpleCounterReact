import React from "react";


//create your first component
const SecondsCounter = (props) => {
	return (
<div class="w-100 p-5 bg-black fs-1 fw-bold text-white text-center" style={{letterSpacing:"1rem"}}>
<i class="fa-solid fa-clock"></i> {props.segundos}
</div>
    )
}

export default SecondsCounter;