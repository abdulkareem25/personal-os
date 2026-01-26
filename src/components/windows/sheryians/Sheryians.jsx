import './sheryians.scss';
import MacWindow from '../../macwindow/MacWindow';

const Sheryians = () => {
  return (
    <MacWindow name="sheryians" title="Sheryians" logo="/doc-icons/sheryians.svg">
      <div className="sheryians">
        <h1>Welcome to Sheryians</h1>
        <p>Learn Web Development, DSA & Real Projects</p>

        <div className="course-grid">
          <div className="course">Web Development</div>
          <div className="course">DSA in JavaScript</div>
          <div className="course">React Mastery</div>
          <div className="course">Backend Bootcamp</div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Sheryians;
