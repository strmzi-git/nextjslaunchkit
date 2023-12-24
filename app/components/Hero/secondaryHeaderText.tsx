interface SecondaryHeaderTextProps {
  content?: string;
}

const SecondaryHeaderText = function ({ content }: SecondaryHeaderTextProps) {
  return (
    <div className="text-greyMedium  relative z-40 max-w-[300px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[800px] ">
      <p className="text-xs md:text-sm  leading-[20px] md:leading-[27.5px]">
        {content}
      </p>
    </div>
  );
};

export default SecondaryHeaderText;
