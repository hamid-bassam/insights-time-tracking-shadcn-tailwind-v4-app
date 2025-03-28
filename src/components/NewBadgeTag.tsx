import { ActivityType } from '../types/activity';
import { Badge } from './ui/badge';

export const activityBadgeClasses: Record<ActivityType, { label: string; className: string }> = {
  productive: { label: "Productive", className: "bg-green-500 text-white px-2 py-1 rounded-full text-xs" },
  ressource: { label: "Resource", className: "bg-blue-500 text-white px-2 py-1 rounded-full text-xs" },
  passive: { label: "Passive", className: "bg-red-500 text-white px-2 py-1 rounded-full text-xs" },
  blocks: { label: "Blocks", className: "bg-yellow-500 text-black px-2 py-1 rounded-full text-xs" },
  neutral: { label: "Neutral", className: "bg-purple-500 text-white px-2 py-1 rounded-full text-xs" }
};

export type BadgeTagProps = {
  type: ActivityType;
};

export const NewBadgeTag = ({ type }: BadgeTagProps) => {
  const badge = activityBadgeClasses[type] || { label: "Unknown", className: "bg-gray-500 text-white px-2 py-1 rounded-full text-xs" };

  return <Badge className={badge.className}>{badge.label}</Badge>;
};
