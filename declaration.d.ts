declare module '*.less';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.png';
declare module '*.css';
declare const __DEV__: boolean;
declare const __GTM__: string;

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}
