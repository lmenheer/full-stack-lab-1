import { departments } from "../../data/departments";

const DepartmentList = () => {
  return (
    <div id="departments-employees">
      {Object.entries(departments).map(([department, employees]) => (
        <div className="department-container" key={department}>
          <h4>{department}</h4>
          <ul>
            {employees.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;