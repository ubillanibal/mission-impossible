import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { View } from "react-native";
import LoginForm from "../components/LoginForm";
import { auth } from "../firebase/firebase-config";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  if (!loaded) {
    return null;
  }

  if (!user) {
    // Show login form until authenticated
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <LoginForm />
        <StatusBar style="auto" />
      </View>
    );
  }

  // Main app after login
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
