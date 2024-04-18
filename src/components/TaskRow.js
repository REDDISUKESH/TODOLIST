export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr style={{ borderBottom: "1px solid #ccc" }}>
      <td style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{task.name}</span>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task);
          }}
          style={{ marginLeft: "10px" }}
        />
      </td>
    </tr>
  );
};
