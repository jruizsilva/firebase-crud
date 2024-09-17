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
    <RN.View style={{ flexGrow: 1 }}>
      <Text>Home Screen</Text>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: '#fff',
            padding: 20,
            height: '50%',
            width: '95%',
            borderRadius: 8,
            marginHorizontal: 'auto',
          }}
        >
          <Text style={{ color: '#000' }}>
            Example Modal. Click outside this area to dismiss.
          </Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </RN.View>
  )
}
