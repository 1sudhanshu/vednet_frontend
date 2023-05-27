
const ProgressShowcase = () => {
  return (
    <div className="progress-showcase">
      <div className="progress lg-progress-bar">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "70%" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default ProgressShowcase;
