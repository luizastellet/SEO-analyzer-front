import { DataIcon, ErrorIcon, WarningIcon, InfoIcon } from '../components/Icons'


export const handleColorInformation = type => {
  switch (type) {
    case "error":
      return "rgba(255, 138, 138, 0.2)";
    case "warning":
      return "rgba(231, 237, 62, 0.2)";
    case "info":
      return "rgba(49, 163, 49, 0.2)";
    default:
      return "rgba(3, 148, 252, 0.2)";
  }
};

export const handleIconInformation = type => {
  switch (type) {
    case "error":
      return <ErrorIcon />;
    case "warning":
      return <WarningIcon />;
    case "info":
      return <InfoIcon />;
    default:
      return <DataIcon />;
  }
};