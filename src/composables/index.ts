import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
