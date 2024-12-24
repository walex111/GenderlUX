import "../global.css";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-200">
      <Text className="text-xl uppercase text-red-500">Hello John</Text>
    </SafeAreaView>
  );
}
