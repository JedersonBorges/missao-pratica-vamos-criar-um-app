import React from 'react';
import { VirtualizedList, Text, View } from 'react-native';
import PizzaTranslator from './pizzaTranslator';
import ScrollViewExample from './ScrollView';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';
import DisplayAnImage from './DisplayAnImage'; 
import Cat from './Cat';  
import Cafe from './Cafe';  
import CatApp from './CatApp';  

const App = () => {

  const data = [
    { key: 'Pizza Translator' },
    { key: 'ScrollView Example' },
    { key: 'FlatList Basics' },
    { key: 'SectionList Basics' },
    { key: 'Display An Image' }, 
    { key: 'Cat' },  
    { key: 'Cafe' },  
    { key: 'CatApp' },  
  ];

  return (
    <VirtualizedList
      data={data}
      renderItem={({ item }) => {
        switch (item.key) {
          case 'Pizza Translator':
            return <PizzaTranslator />;
          case 'ScrollView Example':
            return <ScrollViewExample />;
          case 'FlatList Basics':
            return <FlatListBasics />;
          case 'SectionList Basics':
            return <SectionListBasics />;
          case 'Display An Image': 
            return <DisplayAnImage />;
          case 'Cat': 
            return <Cat />;
          case 'Cafe':  
            return <Cafe />;
          case 'CatApp': 
            return <CatApp />;
          default:
            return null;
        }
      }}
      keyExtractor={(item) => item.key}
      getItemCount={() => data.length} 
      getItem={(data, index) => data[index]} 
    />
  );
};

export default App;
