// src/screens/OrderConfirmationScreen.js

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { sendEmailNotification, sendSMSNotification } from '../services/notificationService';

const OrderConfirmationScreen = ({ route }) => {
    const { order } = route.params;

    useEffect(() => {
        sendNotifications(order);
    }, [order]);

    const sendNotifications = (order) => {
        const { email, phoneNumber } = order.user;
        const message = `Your order with ID ${order._id} has been confirmed. Thank you for shopping with us!`;

        sendEmailNotification(email, 'Order Confirmation', message);
        sendSMSNotification(phoneNumber, message);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Order Confirmation</Text>
            {/* Display order details */}
        </View>
    );
};

export default OrderConfirmationScreen;

