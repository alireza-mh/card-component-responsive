declare module '*.less';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg';
declare module '*.png';
declare module '*.css';

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}
