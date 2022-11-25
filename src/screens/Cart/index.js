import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./style";
import OrdersCard from "../../components/OrdersCard";
import { useSelector } from "react-redux";
const Orders = ({ navigation }) => {
  const data = useSelector((state) => state.counter.orders);
  console.log("orders: " + data.title);
  return (
    <View style={styles.container}>
      <View style={styles.container_search}>
        <View style={styles.container_header} flexDirection="row">
          <View style={styles.container_header_text}>
            <Text style={styles.header_text_name}>Good morning Victoria</Text>
            <Text style={styles.header_text}>Let's find your drink</Text>
          </View>
          <View style={styles.container_header_input}>
            <Text>image</Text>
          </View>
        </View>
        <TextInput
          style={styles.text_input}
          placeholder="Search for drinks"
        ></TextInput>
      </View>
      <View style={styles.orders_items}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <OrdersCard title={item.title} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          position: "relative",
        }}
      >
        <TouchableOpacity
          style={styles.pay_button}
          onPress={() => navigation.navigate("PaymentDone")}
        >
          <Text style={styles.payment_Text}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Orders;
