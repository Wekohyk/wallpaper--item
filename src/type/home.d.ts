export type Status = 'new' | 'hot' | 'normal' | 'vip';

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
}
