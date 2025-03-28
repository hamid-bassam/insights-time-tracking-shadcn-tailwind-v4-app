import { activityBadgeClasses } from '../data/map';
import { ActivityType } from '../types/activity';
import { Badge } from './ui/badge';

export type BadgeTagProps = {
  type: ActivityType;
};

export const BadgeTag = (props: BadgeTagProps) => {

  const className = activityBadgeClasses[props.type];
  console.log(className)
  return <Badge className={`${className} text-white px-2 py-1 rounded-full text-xs`}>{props.type}</Badge>;
};