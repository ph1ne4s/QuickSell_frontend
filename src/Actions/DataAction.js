import axios from "axios";

const data_req = "data_req";
const data_suc = "data_suc";
const data_fail = "data_fail";
const sel_req = "sel_req";
const sel_suc = "sel_suc";
const sel_fail = "sel_fail";
export const fetchAllData = () => async (dispatch) => {
  try {
    dispatch({ type: data_req });
    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment/"
    );
    dispatch({ type: data_suc, payload: data });
  } catch (error) {
    dispatch({ type: data_fail });
  }
};
export const selectData =
  (group, allTickets, orderValue) => async (dispatch) => {
    try {
      dispatch({ type: sel_req });
      let user = false;
      let mySet = new Set();
      let arr = [],
        selectedData = [];
      if (group === "status") {
        allTickets.forEach((element) => {
          mySet.add(element.status);
        });
        arr = [...mySet];
        arr.forEach((element, index) => {
          let arr = allTickets.filter((fElement) => {
            return element === fElement.status;
          });
          selectedData.push({
            [index]: {
              title: element,
              value: arr,
            },
          });
        });
      } else if (group === "user") {
        user = true;
        allTickets?.allUser?.forEach((element, index) => {
          arr = allTickets?.allTickets?.filter((Felement) => {
            return element.id === Felement.userId;
          });
          selectedData.push({
            [index]: {
              title: element.name,
              value: arr,
            },
          });
        });
      } else {
        let prior_list = ["No priority", "Urgent", "High", "Medium", "Low"];
        prior_list.forEach((element, index) => {
          arr = allTickets.filter((fElement) => {
            return index === fElement.priority;
          });

          selectedData.push({
            [index]: {
              title: element,
              value: arr,
            },
          });
        });
      }
      if (orderValue === "title") {
        selectedData.forEach((element, index) => {
          element[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }
      if (orderValue === "priority") {
        selectedData.forEach((element, index) => {
          element[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }
      dispatch({ type: sel_suc, payload: { selectedData, user } });
    } catch (error) {
      dispatch({ type: sel_fail, payload: error.message });
    }
  };
