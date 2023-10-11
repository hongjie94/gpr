import Image from "next/image";
import { useTheme } from "next-themes";
import { Avatar, AvatarImage } from "@/components/ui/avatar";


interface ImageSwitcherProps {
  data: {
    name: string;
    lightImage: string;
    darkImage: string;
  };
  width: number;
  height: number;
  style: string;
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  data,
  width,
  height,
  style,
}) => {
  const theme = useTheme();

  return (
    <Image
      width={width}
      height={height}
      className={style}
      priority={true}
      src={theme.resolvedTheme === "dark" ? data.lightImage : data.darkImage}
      alt={`image-${data.name}`}
    />
  );
};

const IconSwitcher: React.FC<ImageSwitcherProps> = ({ data }) => {
  const theme = useTheme();

  return (
    <Avatar>
      <AvatarImage
        src={theme.resolvedTheme === "dark" ? data.lightImage : data.darkImage}
      />
    </Avatar>
  );
};

export { ImageSwitcher, IconSwitcher };
