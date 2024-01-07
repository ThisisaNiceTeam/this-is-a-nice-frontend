import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface User {
  nickname: string | null;
  accessToken?: string;
  refreshToken?: string;
  naverAccessToken?: string | null;
  isMember: boolean;
}

export const userState = atom<User>({
  key: 'user',
  default: {
    nickname: 'no name',
    isMember: false,
  },
  effects_UNSTABLE: [persistAtom],
});
