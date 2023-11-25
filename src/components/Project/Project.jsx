import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  return (
    <div>
      <p className="text-black">Selected ID: {id}</p>
    </div>
  );
};

export default Project;
