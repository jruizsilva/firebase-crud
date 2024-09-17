import * as RN from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation'
import { Button, Modal, Portal, Text } from 'react-native-paper'
import { useState } from 'react'

export function HomeScreen({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => {
    setVisible(false)
  }
  return (
    <RN.View style={{ flexGrow: 1, backgroundColor: '#333' }}>
      <Text>Home Screen</Text>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </RN.View>
  )
}
