import { useState } from 'react';
import { StyleSheet, FlatList, Image, Pressable, ImageURISource } from 'react-native';

type TeamShieldListProps = {
  onSelect: (item: ImageURISource) => void;
  onCloseModal: () => void;
}

const TeamShieldList = ({ onSelect, onCloseModal }: TeamShieldListProps) => {  
  const [shield] = useState<ImageURISource[]>([
    require('../../assets/images/borussia.png'),
    require('../../assets/images/chelsea.png'),
    require('../../assets/images/city.png'),
    require('../../assets/images/machester-united.png'),
    require('../../assets/images/psg.png'),
  ]);

  return (
    <FlatList
      horizontal
      data={shield}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

export default TeamShieldList;
