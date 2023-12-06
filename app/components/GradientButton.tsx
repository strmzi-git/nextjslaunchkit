interface GradientButtonProps {
  content: string;
  props?: string;
  functionality?: () => {};
}

const GradientButton = function ({
  content,
  props,
  functionality,
}: GradientButtonProps) {
  return (
    <div className="relative group w-[140px] h-[50px]">
      <button
        onClick={functionality && functionality}
        className=" top-0 left-0 absolute transform duration-100 transition group-hover:translate-x-[-2.5px] group-hover:translate-y-[-2.5px] p-[2px] z-50 text-primary px-4 py-3 bg-accentDark group border border-greyDark "
      >
        <p className="relative z-50 text-primary">{content}</p>
      </button>
      <div className="w-[100%] h-[100%] absolute top-0 group-hover:transform group-hover:translate-y-[2.5px] duration-100 transition left-0 bg-accentDark opacity-60 z-0 group-hover:translate-x-[2.5px]"></div>
    </div>
  );
};

export default GradientButton;