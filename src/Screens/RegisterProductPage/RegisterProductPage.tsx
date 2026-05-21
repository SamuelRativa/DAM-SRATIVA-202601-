import React from "react";

import {
    ScrollView,
    Text,
    StyleSheet,
} from "react-native";

import {
    Input,
    Button,
    LinkText,
} from "../../Components/Atoms";

import {
    useNavigation,
} from "@react-navigation/native";
import { RegisterProductTemplate } from "../../Components/Templates";

const RegisterProductPage = () => {

    const navigation = useNavigation<any>();

    const goBack = () => {
        navigation.navigate("Dashboard");
    };

    return (

        <RegisterProductTemplate>

            <Text style={styles.title}>
                REGISTER PRODUCT
            </Text>

            <Input placeholder="Product name" />

            <Input placeholder="SKU" />

            <Input placeholder="Stock" />

            <Input placeholder="Purchase price" />

            <Input placeholder="Sale price" />

            <Input
                placeholder="Description"
                multiline
            />

            <Button
                title="CREATE PRODUCT"
                onSubmit={() => {}}
            />

            <LinkText
                title="Back to catalog"
                onPress={goBack}
            />

        </RegisterProductTemplate>

    );
};

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#FFF",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },

});

export default RegisterProductPage;