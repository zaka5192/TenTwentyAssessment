import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './header.styles';
import Icon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const Header: React.FC = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.avatarView}>
        <Image
          style={styles.avatarStyle}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/5350/aede/f3110485be869387363665aa7b3c33bc?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPJBKfuqpcuTp0wlJxltuXMS-mVxjVsGlw30UtKX4IwZpzQ-LwEymPX7723Phyp4nAqu48TF660yzewogPql~bz3DFtw8iMAvM7k44xR~zoOuygq6Kegw0tiFQqZqOOCm4XknkgH5Rhzfy~JUUrHcOfzVcTagRUPLYWiEexBDFpDnYvd12u87P0vpHgHCQ12SZ6dwye6ioyrHc6QMTlvjjDIp7J~7y-zUZxZgfSndUTwbe50448RaqfxZZPqjgHqgRU44f34Nl1eeZVPdFDT5tCZSAoUUXWvCgCGTx8V094-HjbGNXXCYm7Oj-m03oZAQdii0KpMhKPWBvrJfonJlA__',
          }}
        />
        <View style={styles.badgeView}>
          <MIcon name="verified" size={15} color="#38D36C" />
        </View>
      </View>
      <View style={styles.nameView}>
        <Text style={styles.greetingsText}>Welcome back!</Text>
        <Text style={styles.nameText}>Marry Doe</Text>
      </View>
      <View style={styles.iconView}>
        <Icon name="bell" size={24} color="#ffffff" />
      </View>
    </View>
  );
};

export default Header;
