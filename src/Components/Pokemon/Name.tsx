type Props = {
  name: string;
  //   backgroundColor: string;
};

const Name = (props: Props) => {
  return (
    <h1
      className="font-bold capitalize text-4xl w-fit px-3 py-1  rounded-md"
      //   style={{
      //     backgroundColor: props.backgroundColor,
      //       }}
    >
      {props.name}
    </h1>
  );
};

export default Name;
