import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './contentStyles'
const placeholderContent = [
  {
    id: 1,
    title: 'placeholderTitle',
    contents: 'placeholderContents',
  },
  {
    id: 2,
    title: 'placeholderTitle-1',
    contents: 'placeholderContents-1',
  },
  {
    id: 3,
    title: 'placeholderTitle-2',
    contents: 'placeholderContents-2',
  },
  {
    id: 4,
    title: 'placeholderTitle-3',
    contents: 'placeholderContents-3',
  },
  {
    id: 5,
    title: 'placeholderTitle-4',
    contents: 'placeholderContents-4',
  },
  {
    id: 6,
    title: 'placeholderTitle-5',
    contents: 'placeholderContents-5',
  },
  {
    id: 7,
    title: 'placeholderTitle-6',
    contents: 'placeholderContents-6',
  },
]

export const ContentScreen = ({navigation}) => {
  return (
    placeholderContent.map((post) => {
      return (
        <View key={post.id} style={styles.contentContainer}>
          <Text style={styles.headerText}>{post.title}</Text>
          <Text style={styles.baseText}>{post.contents}</Text>
            </View>
      )
    })
  )
};
