import { useAppDispatch } from "../store/redux/hooks";
import { timersSliceActions } from "../store/redux/store-redux";
import { parseISO, format, compareAsc } from "date-fns";
import { useState } from "react";

function FirebaseGetRequest() {
  const [czasKoncowyTimera, setCKT] = useState("");
  const dispatch = useAppDispatch();

  const ustawReduxowyTimerHandler = (podaneData) => {
    dispatch(timersSliceActions.ustawReduxowyTimer({ payload: podaneData }));
  };
  const getDataFromFirebaseHandler = async () => {
    const response = await fetch(
      "https://kurewski-asystent-default-rtdb.europe-west1.firebasedatabase.app/Timers.json"
    );
    if (!response.ok) {
      throw new Error("Cuś pierdolło");
    }
    console.log("get przyleciał");

    const dataFromResponse = await response.json();

    const daneZGetRequesta = [];

    for (const key in dataFromResponse) {
      daneZGetRequesta.push(dataFromResponse[key]);
    }

    console.log(daneZGetRequesta);

    setCKT(daneZGetRequesta);

    // - TRAP - dizała, tylko console log jest szybszy niz setState, stad [przy 2gim clicku zobaczysz efekt? Czy skąd?]
  };

  return (
    <div>
      <button onClick={getDataFromFirebaseHandler}>
        {" "}
        Pokaż kiedy skończy się timer
      </button>

      <div> Timer jest o {czasKoncowyTimera}</div>

      {/* <button>fetch data</button> */}
    </div>
  );
}

export default FirebaseGetRequest;
