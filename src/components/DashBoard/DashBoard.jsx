import React from "react";
import { useSelector } from "react-redux";
import "./DashBoard.css";
import Card from "../Card/Card";

const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);

  return (
    selectedData && (
      <div className="dashContainer" style={{ display: "flex", justifyContent: "space-around" }}>
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div key={index} className="dashCardContainer" style={{ width: `${cardWidthPercentage}%` }}>
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div className="imageContainer relative" style={{ width: "10px", height: "15px", display: "inline-block" }}></div>
                  ) : isStatus ? (
                    <div className="cardTitle" style={{ width: "15px", height: "15px", display: "inline-block", fontWeight: 200 }}>
                      {element[index].title === "Backlog" ? (
                        <img src="./Backlog.svg" alt="Backlog" style={{ width: "13px", height: "13px" }} />
                      ) : element[index].title === "Todo" ? (
                        <img src="To-do.svg" alt="Todo" style={{ width: "13px", height: "13px" }} />
                      ) : element[index].title === "In progress" ? (
                        <img src="in-progress.svg" alt="In Progress" style={{ width: "13px", height: "13px" }} />
                      ) : element[index].title === "Done" ? (
                        <img src="Done.svg" alt="Done" style={{ width: "13px", height: "13px" }} />
                      ) : (
                        <img src="Cancelled.svg" alt="Cancel" style={{ width: "13px", height: "13px" }} />
                      )}
                    </div>
                  ) : isPriority ? (
                    <div className="tags color-grey" style={{ width: "35px", height: "30px", display: "inline-block" }}>
                      {element[index].title === "Low" ? (
                        <img src="low.svg" alt="Low Priority" style={{ width: "24px", height: "16px" }} />
                      ) : element[index].title === "Medium" ? (
                        <img src="med.svg" alt="Medium Priority" style={{ width: "24px", height: "16px" }} />
                      ) : element[index].title === "High" ? (
                        <img src="high.svg" alt="High Priority" style={{ width: "24px", height: "16px" }} />
                      ) : element[index].title === "Urgent" ? (
                        <img src="/urgent_color.svg" alt="Urgent" style={{ width: "24px", height: "16px" }} />
                      ) : element[index].title === "No priority" ? (
                        <img src="No-priority.svg" alt="No Priority" style={{ width: "24px", height: "16px" }} />
                      ) : (
                        <p></p>
                      )}
                    </div>
                  ) : (
                    <img src="./down.svg" alt="Codeigniter" style={{ width: "24px", height: "24px" }} />
                  )}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <img src="./add.svg" alt="Add" style={{ width: "24px", height: "24px" }} />
                  <img src="./3dot.svg" alt="3dot" style={{ width: "24px", height: "24px" }} />
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      key={element.id} 
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "90px", wordSpacing: "4px" }}>
                <div className="cardTitle" style={{ width: "13px", height: "13px", display: "inline-block", fontWeight: 200 }}>
                  <img src="./Done.svg" alt="Done" style={{ width: "13px", height: "13px", color: "blue" }} />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Done</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <img src="./add.svg" alt="Add" style={{ width: "24px", height: "24px" }} />
                <img src="./3dot.svg" alt="3dot" style={{ width: "24px", height: "24px" }} />
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "60px", wordSpacing: "4px" }}>
                <div className="cardTitle" style={{ width: "9px", height: "9px", display: "inline-block", fontWeight: 200 }}>
                  <img src="Cancelled.svg" alt="Canceled" style={{ width: "9px", height: "9px", color: "grey" }} />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Canceled</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <img src="./add.svg" alt="Add" style={{ width: "24px", height: "24px" }} />
                <img src="./3dot.svg" alt="3dot" style={{ width: "24px", height: "24px" }} />
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default DashBoard;
