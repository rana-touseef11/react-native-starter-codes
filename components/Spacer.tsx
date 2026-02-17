import { DimensionValue, View } from "react-native";
import { themeConfig } from "./theme/theme-config";

interface Props {
  width?: DimensionValue;
  height?: DimensionValue;
}
const Spacer = ({ width = '100%', height = themeConfig.size.xl }: Props) => {
  return (<View style={{ width, height }} />);
}

export default Spacer;