import * as RN from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation'
import { Button, Text } from 'react-native-paper'
import { useCallback, useMemo, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { BottomSheetView } from '@gorhom/bottom-sheet'

export function HomeScreen({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const sheetRef = useRef<BottomSheet>(null)
  const [isOpen, setIsOpen] = useState(true)

  const snapPoints = useMemo(() => ['25%', '50%'], [])

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index)
    sheetRef.current?.expand()
    setIsOpen(true)
  }, [])

  return (
    <RN.View style={{ flexGrow: 1 }}>
      <Text>Home Screen</Text>
      <Button style={{ marginTop: 30 }} onPress={() => handleSnapPress(0)}>
        Show
      </Button>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView>
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </RN.View>
  )
}
