import 'vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
declare module 'vue' {
  export interface GlobalComponents {
    //
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
