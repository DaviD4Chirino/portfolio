import "./sass/IndexLink.sass";
import Link from "next/link";

interface IndexLinkProps {
  href: string;
  desc: string;
  icon?: JSX.Element;
}
export default function LinkIndex({ href, desc, icon }: IndexLinkProps) {
  return (
    <Link role="button" href={href} className="link-unset module index-link">
      <div className="icon ">{icon}</div>
      <h3 className="desc">{desc}</h3>
    </Link>
  );
}
