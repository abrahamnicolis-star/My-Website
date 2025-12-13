import type { User } from './types';

export const user: User = {
  id: 'u1',
  name: 'Alex Doe',
  avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  points: 1250,
};

export const leaderboardUsers: User[] = [
  { id: 'u2', name: 'Budi Santoso', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', points: 3400 },
  { id: 'u3', name: 'Citra Lestari', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704f', points: 3150 },
  { id: 'u4', name: 'Dewi Anggraini', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705a', points: 2900 },
  { id: 'u5', name: 'Eko Prasetyo', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705b', points: 2500 },
  { id: 'u1', name: 'Alex Doe', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', points: 1250 },
];
