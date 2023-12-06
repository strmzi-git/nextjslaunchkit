interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  props?: string;
  showOverflow?: boolean;
}

const Container = function ({
  children,
  props,
  showOverflow,
}: ContainerProps): JSX.Element {
  return (
    <div className={`px-4 ${!showOverflow && "overflow-hidden"}  ${props}`}>
      {children}
    </div>
  );
};

export default Container;
