import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zela, Breeath of Freesh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Zela, Breeath of Freesh Air1', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Zela, Breeath of Freesh Air2', rating: 2, body: 'lorem ipsum', key: '3' },
    ]);
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }
    return(
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
