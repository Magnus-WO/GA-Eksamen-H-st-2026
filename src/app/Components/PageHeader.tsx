export type PageHeaderProps = {
  title: string;
  subtitle: string | undefined | null;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="pageHeader">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
