declare module "*.module.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.png";
declare module "*.svg";
