import React, { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const videoConstraints = {
    width : 250  ,
    height : 400,
    facingMode : "user"
}
const WebcamCapture = () => {
   const webcamRef = useRef(null);
   const capture = useCallback(() => {

   },[webcamRef])
    return (
    <div className='WebcamCapture'>
       <Webcam 
         audio = {false} 
         height={videoConstraints.height}
         ref={webcamRef}
         screenshotFormat='image/jpeg'
         width={videoConstraints.width}
         videoConstraints = {videoConstraints}
       />
       <RadioButtonCheckedIcon className='webcamCapture_Button' 
        onClick= {capture}
       />
    </div>
  )
}

export default WebcamCapture