import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTodo, toggleTodo } from "./plannerSlice";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const YES = "yes";
export const NO = "no";

const Planner = () => {
  const planner = useSelector((state) => state.plannerReducer.planner);
  const dispatch = useDispatch();

  const inputTask = useRef();
  const [selectedDay, setSelectedDay] = useState("");

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputTask.current.value;
    const day = e.target.day.value;

    dispatch(
      addTask({
        id: uuidv4(),
        value,
        completed: "no",
        day,
      })
    );
    inputTask.current.value = "";
    e.target.day.value = "";
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const filterTasks = (day) => {
    setSelectedDay(day);
  };
  const filteredPlanner = selectedDay ? planner.filter((task) => task.day === selectedDay) : planner;

  return (
    <div>
      <h3>My Planner</h3>
      <form onSubmit={handleSubmit}>
        <input ref={inputTask} placeholder="Enter your task" required />
        <select name="day" required>
          <option value="">Select a day</option>
          {weekdays.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>

      <div style={{ marginTop: "20px" }}>
        <h4>Sort by Day:</h4>
        <button onClick={() => filterTasks("")}>All</button>
        {weekdays.map((day) => (
          <button key={day} onClick={() => filterTasks(day)}>
            {day}
          </button>
        ))}
      </div>

      <div>
        {filteredPlanner.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              border: "solid 1px black",
              margin: "20px",
              alignItems: "center",
              padding: "0 20px",
              borderRadius: "10px",
            }}
          >
            <p>Completed: {item.completed}</p>
            <p>Day: {item.day} </p>
            <p>Task: {item.value}</p>
            <div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>{" "}
              <button onClick={() => handleToggle(item.id)}>Complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;