//Weather.js
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ffe53b", "#ff2525"]
    },
    Rain: {
        gradient: ["#00C6FB", "#005BEA"],
        iconName: "weather-rainy"
    },
    Thunderstorm: {
        gradient: ["#00ECBC", "#007ADF"],
        iconName: "weather-lightning"
    },
    Clouds: {
        gradient: ["#D7D2CC", "#304352"],
        iconName: "weather-cloudy"
    },
    Snow: {
        gradient: ["#7DE2FC", "#B9B6E5"],
        iconName: "weather-snowy"
    },
    Drizzle: {
        gradient: ["#89F7FE", "#66A6FF"],
        iconName: "weather-hail"
    },
    Haze: {
        gradient: ["#89F7FE", "#66A6FF"],
        iconName: "weather-hail"
    },
    Mist: {
        gradient: ["#D7D2CC", "#304352"],
        iconName: "weather-fog"
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}</Text>
                <Text style={styles.condition}>{condition}</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Tunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: "white"
    },
    condition: {
        fontSize: 20,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})