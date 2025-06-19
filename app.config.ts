import "dotenv/config";
import { ConfigContext, ExpoConfig } from "expo/config";

export interface CustomExpoConfig extends Partial<ExpoConfig> {
  extra: {
    firebaseApiKey: string | undefined;
    firebaseAuthDomain: string | undefined;
    firebaseProjectId: string | undefined;
    firebaseStorageBucket: string | undefined;
    firebaseMessagingSenderId: string | undefined;
    firebaseAppId: string | undefined;
    firebaseMeasurementId: string | undefined;
  };
}

export default ({ config }: ConfigContext): CustomExpoConfig => ({
  ...config,
  extra: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },
});
