import Image from "next/image";

export type BannerImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export default function BannerImage({
  src,
  alt,
  width = 1920,
  height = 443,
  className,
  priority = false,
}: BannerImageProps) {
  return (
    <div className="relative w-full h-28 md:h-72 lg:h-80 2xl:h-96 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className || ""}`}
        width={width}
        height={height}
        priority={priority}
      />
    </div>
  );
}
