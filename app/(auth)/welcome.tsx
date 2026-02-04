// import { Text } from "react-native";
import { ThemedSafeAreaView } from "@/components/theme";
import { Button, Text } from "react-native-paper";

const WelcomeScreen = () => {
  return (<ThemedSafeAreaView>
    <Text>Welcome</Text>
    <Button mode="contained-tonal">Save</Button>
  </ThemedSafeAreaView>);
}

export default WelcomeScreen;