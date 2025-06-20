import { ThemedView } from "@/components/ThemedView";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase/firebase-config";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const mode = isLogin ? "Login" : "Registration";
    console.log(`${mode} Form submitted with:`, {
      email,
      password,
      confirmPassword,
    });

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch {
      setError("Wrong password or email. Please try again.");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>wElCoM£ 2 SoMe-ApP!!!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#0000ff"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#0000ff"
        value={password}
        onChangeText={setPassword}
      />

      {!isLogin && (
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor="#0000ff"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      )}

      {error ? (
        <Text style={{ color: "#ff0000", marginTop: 4 }}>{error}</Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{isLogin ? "LOGIN" : "REGISTER"}</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={{ color: "#000" }}>
          {isLogin
            ? "Do you want to create an account?"
            : "Do you already have an account?"}
        </Text>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text
            style={{
              color: "#ff00ff",
              marginLeft: 6,
              textDecorationLine: "underline",
            }}
          >
            {isLogin ? "Create Account" : "Log in"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>© 2025 SoMe-App. All rights reserved.</Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc00",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 40,
  },
  title: {
    fontSize: 36,
    color: "#00ff00",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "right",
    textDecorationLine: "underline",
  },
  input: {
    width: 120,
    height: 30,
    backgroundColor: "#ff0000",
    color: "#0000ff",
    marginVertical: 2,
    borderWidth: 3,
    borderColor: "#00ffff",
    paddingLeft: 5,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#ff00ff",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
  footer: {
    marginTop: 60,
    color: "#ff00ff",
    fontSize: 10,
    alignSelf: "flex-start",
    fontStyle: "italic",
  },
  carouselContainer: {
    marginTop: 5,
    width: "100%",
    height: 80,
    backgroundColor: "#00ffff",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default LoginForm;
