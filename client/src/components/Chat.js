// src/components/Chat.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleMessageSend = () => {
        // Implement message sending logic
        if (message.trim() !== '') {
            setChatHistory([...chatHistory, { sender: 'User', message }]);
            setMessage('');
            // Simulate response from customer support
            setTimeout(() => {
                setChatHistory([...chatHistory, { sender: 'Support', message: 'How can I assist you?' }]);
            }, 1000);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {chatHistory.map((chat, index) => (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: chat.sender === 'User' ? 'flex-end' : 'flex-start', margin: 5 }}>
                        <View style={{ backgroundColor: chat.sender === 'User' ? '#ccc' : '#007bff', borderRadius: 5, padding: 10 }}>
                            <Text style={{ color: chat.sender === 'User' ? '#000' : '#fff' }}>{chat.message}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5 }}
                    placeholder="Type your message..."
                    value={
                    message}
                    onChangeText={setMessage}
                />
                <Button title="Send" onPress={handleMessageSend} />
            </View>
        </View>
    );
};

export default Chat;

