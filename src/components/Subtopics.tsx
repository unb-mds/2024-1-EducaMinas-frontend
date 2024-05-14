export default function Subtopics(props: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 w-[90%] border-t-2">
      <h2 className="font-[700] text-[1.4em] pt-5">{props.title}</h2>
      <p className="font-[600]">{props.text}</p>
    </div>
  );
}
