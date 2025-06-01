import type { HeaderItem } from "../types/Header";

interface HeaderProps {
  data: HeaderItem;
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="text-center space-y-1 mb-6">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <h2 className="text-xl text-gray-700">{data.title}</h2>
      <div className="flex justify-center gap-4 text-sm mt-2">
        <a href={`tel:${data.contact.phone}`} className="hover:underline">
          {data.contact.phone}
        </a>
        <a href={`mailto:${data.contact.email}`} className="hover:underline">
          {data.contact.email}
        </a>
        <a
          href={data.contact.linkedin}
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={data.contact.github}
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
