'use client';
export default function Subtopics(props: { title: string; text: string }) {
  return (
    <div className=" w-full text-center items-center flex flex-col gap-2 my-3 primary-gray border-t-2">
      <h2 className="font-[700] text-[1.4em] pt-5 ">{props.title}</h2>
      <h3 className="text-[1.1em] font-[600] text-center text-justify min-w-[340px]">{props.text}</h3>
    </div>
  );
}
