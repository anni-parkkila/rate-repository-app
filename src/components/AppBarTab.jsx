import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ title, navigateTo }) => {
  return (
    <Link to={navigateTo}>
      <Text color="lightGray" fontSize="appBar">
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;
