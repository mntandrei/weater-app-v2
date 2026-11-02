import {Sun, Moon, CloudSun, CloudMoon, Cloud, CloudRain, CloudLightning, CloudSnow, CloudFog} from "lucide-react";

type WeatherIconProps = {
  code?: string;
  size?: number;
  className?: string;
};

export default function WeatherIcon({code = "03d",size = 24,className = ""}: WeatherIconProps) {
  const condition = code.slice(0, 2);
  const isNight = code.endsWith("n");

  let Icon = Cloud;
  let color = "text-slate-400";

  if (condition === "01") {
    Icon = isNight ? Moon : Sun;
    color = "text-amber-400";
  } else if (condition === "02") {
    Icon = isNight ? CloudMoon : CloudSun;
    color = "text-amber-400";
  } else if (condition === "09" || condition === "10") {
    Icon = CloudRain;
    color = "text-blue-500";
  } else if (condition === "11") {
    Icon = CloudLightning;
    color = "text-violet-500";
  } else if (condition === "13") {
    Icon = CloudSnow;
    color = "text-sky-400";
  } else if (condition === "50") {
    Icon = CloudFog;
    color = "text-slate-400";
  }

  return (
    <Icon
      size={size}
      aria-hidden="true"
      className={`${color} ${className}`}/>
  );
}
