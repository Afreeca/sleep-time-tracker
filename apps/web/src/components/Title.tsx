export default function Title({ text }: { text: string }) {
  return (
    <div className="text-black  w-full mt-10 mb-2">
      <h1 className="text-lg md:text-3xl font-medium">{text}</h1>
    </div>
  );
}
