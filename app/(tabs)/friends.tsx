import { ThemedView } from "@/components/ThemedView";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const fakeFriends = [
  {
    name: "John Doe",
    job: "Software Engineer",
    img: "https://placekitten.com/60/60",
  },
  {
    name: "Jane Smith",
    job: "Product Manager",
    img: "https://placekitten.com/61/61",
  },
  {
    name: "Bob Johnson",
    job: "UX Designer",
    img: "https://placekitten.com/62/62",
  },
  {
    name: "Alice Brown",
    job: "QA Tester",
    img: "https://placekitten.com/63/63",
  },
  {
    name: "Charlie Black",
    job: "DevOps",
    img: "https://placekitten.com/64/64",
  },
];

const Friends = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.header}>FRIENDS</Text>
      <ScrollView style={styles.scroll}>
        {fakeFriends.map((f, i) => (
          <View key={i} style={styles.friendRow}>
            <Image source={{ uri: f.img }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{f.name}</Text>
              <Text style={styles.job}>{f.job}</Text>
            </View>
            <Text style={styles.addBtn}>+</Text>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc00",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff00cc",
    alignSelf: "center",
    marginBottom: 10,
    letterSpacing: 2,
    textDecorationLine: "underline",
  },
  scroll: {
    flex: 1,
  },
  friendRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00ffff",
    marginVertical: 7,
    padding: 7,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#ff0000",
    justifyContent: "space-between",
    minHeight: 70,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 0,
    marginRight: 12,
    borderWidth: 3,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#0000ff",
  },
  job: {
    fontSize: 13,
    color: "#ff0000",
  },
  addBtn: {
    fontSize: 32,
    color: "#00ff00",
    fontWeight: "900",
    marginLeft: 10,
    marginRight: 5,
  },
});

export default Friends;
