import { Text, View, FlatList, ListRenderItem, TextInput, TextInputComponent, TextComponent } from 'react-native';
import { Card, cards } from '@/api/data.mock';
import { CardComponent } from '@/components/molecules/cardComponent/cardComponent.molecule';
import { ButtonComponent } from '@/components/atoms/button/button.atom';
import { useState } from 'react';

export default function Index() {
  //** CALLBACK **//
  const onPressCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter >= 9) {
        setDisabled((prevState) => (prevState = false));
      }

      return prevCounter + 1;
    });
  };

  const onPressReset = () => {
    setCounter((prevCounter) => {
      if (prevCounter >= 10) {
        setDisabled((prevState) => (prevState = true));
        return 0;
      }
      return prevCounter;
    });
    setClicked((prevState) => (prevState = true));
  };

  const [counter, setCounter] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [disable, setDisabled] = useState(true);

  //** UI **//
  const renderItem: ListRenderItem<Card> = ({ item, index }) => {
    return (
      <CardComponent
        key={index}
        title={item.title}
        subTitle={item.subTitle}
        backgroundColor={item.backgroundColor}
        image={item.image}
      />
    );
  };
  const ItemSeparatorComponent = () => <View style={{ height: 16 }} />;
  const ListHeaderComponent = () => {
    return (
      <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>
        Le card di oggi:{' '}
      </Text>
    );
  };
  const ListFooterComponent = () => {
    return (
      <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>
        Fine della lista
      </Text>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>
        Nessuna card da mostrare
      </Text>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* <FlatList
      style={{ flex: 1 }}
      bounces={false}
      data={cards}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
    /> */}
      <Text style={{ fontSize: 24, paddingVertical: 32, textAlign: 'center' }}>
        Count: {counter}
      </Text>
      <Text style={{ fontSize: 24, paddingVertical: 32, textAlign: 'center' }}>
        Il pulsante {clicked ? '' : 'non '}e stato cliccato
      </Text>
      <ButtonComponent title="add + 1" onPress={onPressCounter} style={{ marginBottom: 20 }} />
      <ButtonComponent
        title="reset"
        onPress={onPressReset}
        //disabled={disable}
        titleStyle={{ color: 'white' }}
        style={{ backgroundColor: disable ? 'gray' : 'red' }}
      />
      <TextInput placeholder='' />
    </View>
  );
}
