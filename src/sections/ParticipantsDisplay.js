// import React, { useState } from "react";

// import {
//   ParticipantTile,
//   ParticipantLoop,
//   useParticipants,
// } from "@livekit/components-react";
// import "@livekit/components-styles";
// // import '@fortawesome/fontawesome-free/css/all.min.css';
// import "../assets/styles/banner.scss";

// function ParticipantsDisplay() {
//   const participants = useParticipants();
//   const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
//   console.log(participants);
//   const agentInfo = participants.filter(
//     (participant) =>
//       participant.identity !== "human_user" && participant.identity !== ""
//   );
//   console.log(">>> agent data:", agentInfo);
//   return (
//     <ParticipantLoop participants={participants}>
//       <h1>xxx</h1>
//     </ParticipantLoop>
//   );
// }

// export default ParticipantsDisplay;
