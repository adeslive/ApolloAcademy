import React, { useRef, useEffect, useState } from "react";
import DailyIframe from "@daily-co/daily-js";
import { Box } from "@chakra-ui/react";

const CALL_OPTIONS = {
 iframeStyle: {
   width: "100%",
   height: "100%",
   border: "1px solid #e6eaef",
   borderRadius: "6px 6px 0 0",
 },
 showLeaveButton: true,
 showFullscreenButton: true,
 url : ''
 //   showLocalVideo: false,
 //   showParticipantsBar: false,
};

const DEFAULT_HEIGHT = 400;

const WebinarCall = () => {
 const videoRef = useRef(null);
 const [height, setHeight] = useState(DEFAULT_HEIGHT);
 const [callframe, setCallframe] = useState(null);

 useEffect(() => {
   if (!videoRef || !videoRef?.current || callframe) return;
   CALL_OPTIONS.url = "https://apolloacademy.daily.co/OaO19WLAVqW8H9fBnQNr";

   const newCallframe = DailyIframe.createFrame(
     videoRef.current,
     CALL_OPTIONS
   );

   newCallframe.join().then(() => {
     setHeight((videoRef?.current?.clientWidth || 500) * 0.75);
     setCallframe(newCallframe);
   });
 }, [videoRef]);

 return (
   <Box h={'100%'}>
     <Box height={height} margin='auto' maxW={'1000px'} h={'100%'}>
       <Box ref={videoRef} w={'100%'} h={'100%'} />
     </Box>
   </Box>
 );
};

export default WebinarCall;