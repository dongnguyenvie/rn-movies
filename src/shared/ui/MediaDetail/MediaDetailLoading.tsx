import { colors } from '@styles/Colors';
import CenterView from '@ui/CenterView';
import React, { FC, memo } from 'react';
import { Text } from 'react-native-elements';
import Spinner from 'react-native-spinkit';

const MediaDetailLoading: FC = memo(() => {
  return (
    <CenterView>
      <Spinner isVisible={ true } type={ 'ChasingDots' } size={ 24 } color={ colors.primary }/>
      <Text>Loading detail...</Text>
    </CenterView>
  );
});

export default MediaDetailLoading;
