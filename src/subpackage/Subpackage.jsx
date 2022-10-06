import { SubPackageRoot } from "subpackage";
import { useParams } from "react-router-dom";

const Subpackage = () => {
  const params = useParams();

  return <SubPackageRoot />;
};

export { Subpackage };
