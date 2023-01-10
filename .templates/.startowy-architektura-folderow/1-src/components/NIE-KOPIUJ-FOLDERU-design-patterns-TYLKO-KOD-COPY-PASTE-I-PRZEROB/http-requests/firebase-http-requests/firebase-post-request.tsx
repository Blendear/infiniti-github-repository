//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import { useState } from "react";

const FirebasePostRequest = (props) => {
  const addObjectToDatabase = async () => {
    console.log("elo");
    const response = await fetch(
      "https://kurewski-asystent-default-rtdb.europe-west1.firebasedatabase.app/Timers.json",
      {
        method: "PATCH",
        body: JSON.stringify({
          dataPOSTnieta: props.podanaDataZakonczeniaTimera,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const wyslaneData = await response.json();
    console.log(wyslaneData);
  };
  return <button onClick={addObjectToDatabase}> POST data</button>;
};

export default FirebasePostRequest;
