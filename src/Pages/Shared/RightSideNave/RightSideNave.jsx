import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNave = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full text-blue-600">
          <FaGoogle></FaGoogle>
          GOOGLE
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          GITHUB
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a
          href=""
          className="p-4 flex items-center text-lg border rounded-t-lg"
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a href="" className="p-4 flex items-center text-lg border-x">
          <FaTwitter className="mr-2"></FaTwitter>
          Twitter
        </a>
        <a
          href=""
          className="p-4 flex items-center text-lg border rounded-b-lg"
        >
          <FaInstagram className="mr-2"></FaInstagram>
          Instagram
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNave;
