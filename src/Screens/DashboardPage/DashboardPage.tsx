import React from "react";

import {
    ScrollView,
    Text,
    StyleSheet,
} from "react-native";

import {
    Button,
    Input,
} from "../../Components/Atoms";

import ProductList from "../../Components/Organims/ProductList/ProductList";

import {
    DashboardTemplate,
} from "../../Components/Templates";

import {
    useNavigation,
} from "@react-navigation/native";
import { SearchBar } from "../../Components/Molecules";
import { DashboardHeader } from "../../Components/Organims";

const DashboardPage = () => {

    const navigation = useNavigation<any>();

    const goToRegisterProduct = () => {
        navigation.navigate("RegisterProduct");
    };

    return (

        <DashboardTemplate>

            <DashboardHeader
             onNewProduct={goToRegisterProduct}/>

            <SearchBar />

            <Text style={styles.sectionTitle}>
                RECENT PRODUCTS
            </Text>

            <ProductList />

        </DashboardTemplate>

    );
};

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
    },

    subtitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
    },

    sectionTitle: {
        marginTop: 20,
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "bold",
    },

});

export default DashboardPage;