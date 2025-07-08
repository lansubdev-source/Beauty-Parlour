interface Props { title:string; }
export default function SectionHeading({title}:Props){
  return <h2 className="text-4xl md:text-5xl font-serif text-center text-brand mb-8">{title}</h2>;
}
