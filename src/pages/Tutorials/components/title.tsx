interface Children {
  children: React.ReactNode;
}

export const Title = ({ children }: Children) => {
  return (
    <div className="tutorials-title flex flex-col p-2 w-full justify-center z-0">
      <div className="w-full">
        <h1 className="text-blue-500 font-bold p-2 rounded-full text-center text-lg">
          Tutorial
        </h1>
      </div>
      {children}
    </div>
  );
};

export default Title;
