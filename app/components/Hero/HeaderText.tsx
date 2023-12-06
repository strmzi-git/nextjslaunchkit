interface HeaderTextProps {
  content: string;
}
const HeaderText = function ({ content }: HeaderTextProps) {
  return (
    <div className="animate-moveInFromBelow2 opacity-0 duration-300 transition text-secondary relative z-40 text-4xl md:text-5xl xl:text-6xl md:leading-[65px] xl:leading-[75px] leading-[45px] max-w-[1000px] font-bold mb-8 text-center">
      {content}
    </div>
  );
};

export default HeaderText;
