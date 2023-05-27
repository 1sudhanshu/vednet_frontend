import { ProjectStatusDatas } from "../../../../Data/DashBoard/Enterprise/ProjectStatus";

const ProjectStatusTableBody = () => {
  return (
    <tbody>
      {ProjectStatusDatas.map((data, index) => (
        <tr key={index}>
          <td>{data.Task}</td>
          <td>
            <div className={`badge ${data.StatusClass}`}>{data.Status}</div>
          </td>
          <td>
            <span>{data.Deadline}</span>
          </td>
          <td>
            <div className="progress-showcase">
              <div className="progress sm-progress-bar">
                <div
                  className={`progress-bar ${data.progressClass}`}
                  role="progressbar"
                  style={{ width: data.Progress }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProjectStatusTableBody;
