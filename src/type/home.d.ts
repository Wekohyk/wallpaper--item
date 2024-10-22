export type Status = 'new' | 'hot' | 'normal' | 'vip';

export type UseApp = {
  img: string;
  name: string;
  accountNumber: string;
};

export interface Wallpaper {
  id: number;
  image: string;
  title: string;
  value: string;
  avatarImg: string;
  avatarName: string;
  usePeople: string;
  status: Status;
  showPosition: 'left' | 'right';
  imageList: string[];
  useApp?: UseApp[];
}
