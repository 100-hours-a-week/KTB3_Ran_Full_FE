import { useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add-student": {
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    }
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id,
        ),
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((s) => {
          if (s.id === action.payload.id)
            return {
              ...s,
              isHere: !s.isHere,
            };
          return s;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => dispatch({ type: "mark-student", payload: { id } })}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete-student", payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};
export function Test() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}
