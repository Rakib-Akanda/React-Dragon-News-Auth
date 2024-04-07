import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-2">
      <img className="mx-auto lg:mt-3" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">
        {
          moment().format("dddd, MMMM D, YYYY ") // "Sunday, February 14th 2010, 3:25:50 pm"
        }
      </p>
    </div>
  );
};

export default Header;
