import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "red" | "white";
};

/** --- CEZPEM LOGO --- **/
const cezpemLogoSizes = {
  small: { width: 55, height: 54 },
  medium: { width: 72, height: 70 },
  large: { width: 128, height: 125 },
};

const cezpemTextSizes = {
  small: { width: 154, height: 30 },
  medium: { width: 162, height: 31 },
  large: { width: 192, height: 37 },
};

export function CezpemLogo({ className = "", size = "medium" }: LogoProps) {
  const { width, height } = cezpemLogoSizes[size];

  return (
    <div className={`flex items-center justify-center rounded ${className}`}>
      <Image
        src="/Logo-CeZPEM.svg"
        alt="" 
        aria-hidden="true"
        width={width}
        height={height}
      />
    </div>
  );
}

export function CezpemText({
  className = "",
  size = "medium",
  variant = "red",
}: LogoProps) {
  const { width, height } = cezpemTextSizes[size];

  if (variant === "white") {
    return (
      <div className={`flex items-center justify-center rounded ${className}`}>
        <Image
          src="/logo-CeZPEM-branco.svg"
          alt="" 
          aria-hidden="true"
          width={width}
          height={height}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center rounded ${className}`}>
      <Image
        src="/logo-CeZPEM-vermelho.svg"
        alt="" 
        aria-hidden="true"
        width={width}
        height={height}
      />
    </div>
  );
}

export function CezpemLogoText({
  className = "",
  size = "medium",
  variant,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <CezpemLogo size={size} />
      <CezpemText variant={variant} size={size} />
    </div>
  );
}

/** --- SOBERANA LOGO --- **/
const soberanaLogoSizes = {
  small: { width: 50, height: 50 },
  medium: { width: 72, height: 70 }, // Mantendo o tamanho original
  large: { width: 100, height: 100 },
};

const soberanaTextSizes = {
  small: { width: 140, height: 28 },
  medium: { width: 162, height: 31 }, // Mantendo o tamanho original
  large: { width: 180, height: 35 },
};

export function LogoSoberana({ className = "", size = "medium" }: LogoProps) {
  const { width, height } = soberanaLogoSizes[size];

  return (
    <div className={`flex items-center justify-center rounded ${className}`}>
      <Image
        src="/Logo-Soberana.svg"
        alt="" 
        aria-hidden="true"
        width={width}
        height={height}
      />
    </div>
  );
}

export function LogoSoberanaText({
  className = "",
  size = "medium",
}: LogoProps) {
  const { width, height } = soberanaTextSizes[size];

  return (
    <div className={`flex items-center justify-center rounded ${className}`}>
      <Image
        src="/Texto-Soberana.svg"
        alt="" 
        aria-hidden="true"
        width={width}
        height={height}
      />
    </div>
  );
}

export function SoberanaLogoText({
  className = "",
  size = "medium",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoSoberana size={size} />
      <LogoSoberanaText size={size} />
    </div>
  );
}
