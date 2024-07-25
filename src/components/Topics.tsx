'useClient';
export default function Topics(props: { title: string; text: string }) {
  return (
    <div className=" w-full text-center items-center flex flex-col gap-2 my-3 primary-gray">
      <h1 className="font-extrabold text-[1.5em] whitespace-nowrap">{props.title}</h1>
      <h3 className="text-[1.1em] font-[600] text-center w-full w-[90vw] ml-5 pb-2">{props.text}</h3>
    </div>
  );
}
