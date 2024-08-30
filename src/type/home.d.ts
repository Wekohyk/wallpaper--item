export type Status = 'new' | 'hot' | 'normal';

export interface Wallpaper {
  image: string;
  title: string;
  value: string;
  avatarImg: string;
  avatarName: string;
  usePeople: string;
  status: Status;
}
