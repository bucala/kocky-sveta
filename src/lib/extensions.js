export const PLAYER_COLORS = ['#d4b86a', '#60a5fa', '#86efac', '#fb923c', '#c084fc', '#f87171'];

export const DEFAULT_EXTENSIONS = {
  confetti: false,
  coloredAvatars: false,
  leaderCrown: false,
  progressBar: false,
  milestoneFlash: false,
  animatedScore: false,
  dramaticWinner: false,
  turnNotification: false,
};

export const MILESTONE_VALUES = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

export function hapticFeedback(pattern = [20]) {
  try { navigator.vibrate?.(pattern); } catch {}
}

export function getInitials(name = '') {
  return name.trim().slice(0, 2).toUpperCase() || '?';
}
