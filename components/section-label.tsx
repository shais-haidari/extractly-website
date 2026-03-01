export default function SectionLabel({
  label,
  heading,
}: {
  label: string;
  heading: string;
}) {
  return (
    <div className="text-center">
      <p className="text-accent text-sm font-medium tracking-widest uppercase">
        {label}
      </p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
        {heading}
      </h2>
    </div>
  );
}
