// Import jellyTriangle only in a browser environment
if (typeof window !== 'undefined') {
  const { jellyTriangle } = require('ldrs');
  jellyTriangle.register();
}
type preloaderProps = {
  className: string;
  preloaderColor: string;
  preloaderSize: string
}

export default function Preloader({className, preloaderColor, preloaderSize}:preloaderProps) {
  return (
    <div className={className}>
      <l-jelly-triangle size={preloaderSize} speed="1.75" color={preloaderColor}></l-jelly-triangle>
    </div>
  );
}

// "#ff3333"
