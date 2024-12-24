import React from "react";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops" }} />
      <View className="flex-1 items-center justify-center p-20">
        <Text>This screen doesn't exist</Text>
        <Link href="/" className="mt-14 py-14">
          <Text>Go back to home!</Text>
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
