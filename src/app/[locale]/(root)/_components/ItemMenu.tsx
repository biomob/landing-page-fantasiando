"Use Client";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-8">
      <span className="text-black font-bold">{name}</span>
    </button>
  );
}
