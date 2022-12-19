function Poster({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="flex flex-col gap-1 max-w-md">
      <img alt={alt} src={src} />
      {caption && <figcaption className="text-sm">{caption}</figcaption>}
    </figure>
  );
}
export default Poster;
