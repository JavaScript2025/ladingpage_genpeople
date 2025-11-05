import {
  MagnifyingGlassIcon,
  ChartLineIcon,
  ChartPieIcon,
  FolderSimpleUserIcon,
  FileMagnifyingGlassIcon,
  type IconProps,
} from "@phosphor-icons/react";

export const IconMap = {
  MagnifyingGlassIcon: MagnifyingGlassIcon,
  ChartLineIcon: ChartLineIcon,
  ChartPieIcon: ChartPieIcon,
  FolderSimpleUserIcon: FolderSimpleUserIcon,
  FileMagnifyingGlassIcon: FileMagnifyingGlassIcon,
};

export type IconName = keyof typeof IconMap;

interface DynamicIconProps extends IconProps {
  name: IconName;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...rest }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) return null;

  return <IconComponent {...rest} />;
};
