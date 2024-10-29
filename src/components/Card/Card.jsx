import React from "react";
import "./Card.css";

const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const isUser = localStorage.getItem("group") === "user"; // Check if grouped by user

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        {!isUser && ( 
          <div
            className="imageContainer relative"
            style={{ width: "30px", height: "30px" }}
          >
            <img
              style={{ width: "95%", height: "95%", borderRadius: "50%" }}
              src={`${process.env.PUBLIC_URL}/man1.jpg`} 
              alt="UserImage"
            />
            <div className="showStatus"></div>
          </div>
        )}
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus && (
          <>
            {status === "Backlog" ? (
              <img
                src="Backlog.svg" 
                alt="Backlog"
                style={{ width: "14px", height: "14px" }}
              />
            ) : status === "Todo" ? (
              <img
                src="To-do.svg" 
                alt="Todo"
                style={{ width: "14px", height: "14px" }}
              />
            ) : status === "In progress" ? (
              <img
                src="in-progress.svg" 
                alt="In Progress"
                style={{ width: "14px", height: "14px" }}
              />
            ) : status === "Done" ? (
              <img
                src="Done.svg" 
                alt="Done"
                style={{ width: "14px", height: "14px" }}
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/not_available.svg`} 
                alt="Not Available"
                style={{ width: "14px", height: "14px" }}
              />
            )}
          </>
        )}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 ? (
              <img
                src="low.svg"
                alt="Low Priority"
                style={{ width: "24px", height: "24px" }}
              />
            ) : priority === 2 ? (
              <img
                src="med.svg" 
                alt="Medium Priority"
                style={{ width: "24px", height: "24px" }}
              />
            ) : priority === 3 ? (
              <img
                src="high.svg" 
                alt="High Priority"
                style={{ width: "24px", height: "24px" }}
              />
            ) : priority === 4 ? (
              <img
                src={`${process.env.PUBLIC_URL}/urgent_grey.svg`} 
                alt="Urgent"
                style={{ width: "24px", height: "24px" }}
              />
            ) : (
              <img
                src="No-priority.svg" 
                alt="no prio"
                style={{ width: "24px", height: "24px" }}
              />
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
