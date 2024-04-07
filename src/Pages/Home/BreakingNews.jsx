import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-4 mt-7">
      <button className="btn btn-secondary">Breaking</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to={'/'} className="mr-12">
          I can be a React component, multiple React components......
        </Link>
        <Link to={'/'} className="mr-12">
          I can be a React component, multiple React components......
        </Link>
        <Link to={'/'} className="mr-12">
          I can be a React component, multiple React components......
        </Link>
        <Link to={'/'} className="mr-12">
          I can be a React component, multiple React components......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
