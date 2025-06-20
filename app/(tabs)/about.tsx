import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          This project was made to learn React Native, authentication with
          Firebase, and a bit of TypeScript.
        </Text>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc00",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  box: {
    backgroundColor: "#00ffff",
    borderWidth: 3,
    borderColor: "#ff0000",
    borderRadius: 2,
    padding: 20,
    margin: 10,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#0000ff",
    fontWeight: "bold",
    letterSpacing: 1,
    textDecorationLine: "underline",
  },
});

export default About;
