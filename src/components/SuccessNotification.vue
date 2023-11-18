<script setup>
import { h } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { ElNotification, ElMessage } from 'element-plus'
import iconOk from "@/assets/iconOk.svg"

const props = defineProps({
  message: {
    type: String,
    default: 'Успешно',
  },
  duration: {
    type: Number,
    default: 30000000,
  }
})

const openDesktopNotification = () => {
  ElNotification({
    duration: props.duration,
    message: h('p', null, props.message),
    icon: h('img', {
      src: iconOk,
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
    message: h('p', null, props.message),
    icon: h('img', {
      src: iconOk,
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
  width: auto;
  box-shadow: 0px 0px 16px 0px rgba(176, 197, 222, 0.5);
  margin: 0;
  padding: 15.2px 12px 15.2px 6px;
}

:global(.el-notification__group) {
  margin: 0;
  margin-left: 4px;
}

:global(.el-notification__content) {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(84, 84, 84, 1);

}

:global(--el-notification-icon-size) {
  width: 20px;
  height: 20px;
}

:global(.el-notification.left) {
  left: 32px;
  bottom: 48px !important;
}

:global(.el-message) {
  top: 64px !important;
  margin: 0;
  padding: 12px 16px;
  border-radius: 40px;
  background: rgba(84, 84, 84, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;

}

:global(.el-message__icon) {
  margin-right: 5px;
}
</style>
