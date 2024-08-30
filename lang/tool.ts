import { computed } from 'vue';
import i18n from './index';
import { Dayjs } from 'dayjs';

export function getLocale(lang?: string): Languages {
  // lang = lang || tw.language || widget.language;
  if (lang?.includes('ja')) {
    return 'jp';
  }
  if (lang?.includes('en')) {
    return 'en';
  }
  return 'zh';
}
//响应式的值，需要实时变化用这个
export function getI18nLocale() {
  return i18n.global.locale;
}
export const lang = computed(() => getI18nLocale().value);
export const isZh = computed(() => lang.value === 'zh');
// 在此处补充语言环境判断逻辑
export function formatStrByArea<T>(stdin: Glyi18n<T>) {
  return stdin[lang.value] || stdin.zh;
}
export function formatTimeByArea(time: Dayjs): DateTime {
  const result = {
    time: '',
    date: '',
    day: '',
  };
  result.time = time.format('HH:mm');
  result.day = time.format('dddd');

  switch (lang.value) {
    case 'zh':
    case 'jp':
      result.date = time.format('M月D日');
      break;
    default:
      result.date = time.format('MMMM, D');
  }
  return result;
}
export const joinDateStr = (time: DateTime) => {
  if (lang.value === 'en') {
    return `${time.day}, ${time.date}`;
  }
  return `${time.date} ${time.day}`;
};
