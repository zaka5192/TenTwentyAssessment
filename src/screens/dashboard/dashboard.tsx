import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {FeatureList, Header, ScreenWrapper} from '../../components';
import Icon from 'react-native-vector-icons/Feather';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import {T_DASHBOARD_ROUTE_PARAMS} from './dashboard.types';
import {styles} from './dashboard.styles';
import {images} from '../../assets/images';

const Dashboard: React.FC<T_DASHBOARD_ROUTE_PARAMS> = () => {
  const renderPortfolioCard = () => {
    return (
      <View style={styles.portfolioView}>
        <View style={styles.valueView}>
          <View style={styles.valueTextView}>
            <Text style={styles.portfolioText}>
              Portfolio Value
              {'   '}
              <SIcon name="question" size={14} color="#787381" />
            </Text>
            <Text style={styles.portfolioValueText}>
              1,100,000
              <Text style={styles.portfolioValueTextAlt}>{'.00 SAR    '}</Text>
              <Icon name="eye-off" size={18} color="#787381" />
            </Text>
          </View>
          <View style={styles.detailIconView}>
            <Icon name="chevron-right" size={28} color={'#000000'} />
          </View>
        </View>
        <View style={styles.chartView}>
          <Image style={styles.chartView} source={images.Chart} />
        </View>
        <View style={styles.infoView}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>OS/Loans</Text>
            <Text style={styles.infoValue}>60 Loans</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>OS/Principle</Text>
            <Text style={styles.infoValue}>1,000,000 SAR</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Exp. Profit</Text>
            <Text style={styles.infoValue}>100,000 SAR</Text>
          </View>
        </View>
        <View style={styles.separatorView} />
        <View style={styles.balanceView}>
          <View style={styles.iconWalletView}>
            <View style={styles.walletIcon}>
              <SIcon name="wallet" size={28} color={'#2C8BFD'} />
            </View>
          </View>
          <View style={styles.balanceValueView}>
            <Text style={styles.infoLabel}>Wallet Balance</Text>
            <Text style={styles.infoValue}>1,540,680.12 SAR</Text>
          </View>
          <View style={styles.addIconView}>
            <Icon name="plus" size={20} color={'#000000'} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.flexOne}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyles}
          style={styles.scrollView}>
          {renderPortfolioCard()}
          <Text style={styles.listLabelText}>Explore Lendo Features!</Text>
          <FeatureList />
          <Text style={styles.listLabelText}>Top Funds in Focus</Text>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Dashboard;
