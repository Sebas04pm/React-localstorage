import '../btn.css'
export const TaskRow = ({ task, toggleTask }) => (
  <tr key={task.name}>
    <td className="d-flex justify-content-between td-task">
      {task.name}
      <div className='div-checkEdit'>
        <button className="edit-btn">
          Edit
        </button>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </div>
    </td>
  </tr>
);
