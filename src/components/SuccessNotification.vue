<script setup>
import { h } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { ElNotification, ElMessage } from 'element-plus'

const props = defineProps({
  message: {
    type: String,
    default: 'Успешно',
  },
  duration: {
    type: Number,
    default: 30000,
  }
})

const openDesktopNotification = () => {
  ElNotification({
    duration: props.duration,
    message: h('p', { class: 'success-notification' }, props.message),
    icon: h('img', {
      class: 'success-notification__icon',
      src: './src/assets/iconOk.svg',
      width: 20,
      height: 20,
    }),
    position: 'bottom-left',
    showClose: false,
  })
}

const openMobileNotification = () => {
  ElMessage({
    duration: props.duration,
    message: h('p', { class: 'success-notification' }, props.message),
    icon: h('img', {
      class: 'success-notification__icon',
      src: './src/assets/iconOk.svg',
      width: 13.33,
      height: 13.33,
    }),
  })
}

const isMobileScreen = useMediaQuery('(max-width: 767px)')
const open = () => {
  if (isMobileScreen.value === true) {
    openMobileNotification();
    return;
  }
  openDesktopNotification();
}

defineExpose({
  open,
})
</script>

<style langs="scss" scoped>
:global(.el-notification) {
  box-shadow: 0px 0px 16px 0px rgba(176, 197, 222, 0.5);
}

:global(.success-notification__icon) {
  margin: 0 4px;
}
</style>