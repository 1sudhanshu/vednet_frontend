const GridOptionstbody = () => {
  let number = [540, 720, 960, 1140];
  let Texts = [".col-sm-", ".col-md-", ".col-lg-", ".col-xl-"];
  return (
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">
          Grid behavior
        </th>
        <td>Horizontal at all times</td>
        <td colSpan={4}>Collapsed to start, horizontal above breakpoints</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          Max container width
        </th>
        <td>None (auto)</td>
        {number.map((data, index) => (
          <td className="digits" key={index}>
            {data}px
          </td>
        ))}
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          Class prefix
        </th>
        <td>
          <code>.col-</code>
        </td>
        {Texts.map((text, data) => (
          <td key={data}>
            <code>{text}</code>
          </td>
        ))}
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          # of columns
        </th>
        <td colSpan={5}>12</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          Gutter width
        </th>
        <td colSpan={5}>30px (15px on each side of a column)</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          Nestable
        </th>
        <td colSpan={5}>Yes</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          Offsets
        </th>
        <td colSpan={5}>Yes</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          Column ordering
        </th>
        <td colSpan={5}>Yes</td>
      </tr>
    </tbody>
  );
};

export default GridOptionstbody;
