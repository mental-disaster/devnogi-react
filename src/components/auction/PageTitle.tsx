interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>;
}
