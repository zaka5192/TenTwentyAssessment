import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './fundsList.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const FundsList: React.FC = () => {
  const features = [
    {id: 1, label: 'Auto Invest', icon: 'rocket'},
    {id: 2, label: 'Referal', icon: 'gift'},
    {id: 3, label: 'Deal Room', icon: 'money'},
    {id: 4, label: 'Loyalty', icon: 'diamond'},
    {id: 5, label: 'Upgrade', icon: 'hand-o-up'},
    {id: 6, label: 'Streak', icon: 'fire'},
  ];

  const renderFeatureCard = (card: any) => {
    const {item, index} = card;
    return (
      <View style={styles.cardView}>
        <View style={styles.iconContainer}>
          <Icon name={item.icon} size={20} color={'#2C8BFD'} />
        </View>
        <Text style={styles.labelText}>{item.label}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={features}
      horizontal={true}
      renderItem={renderFeatureCard}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FundsList;
