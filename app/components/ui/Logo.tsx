type LogoProps = {
  href?: string;
};

export function Logo({ href = "/" }: LogoProps) {
  return (
    <a className="logo" href={href} aria-label="Supernova — на главную">
      Supernova
      <i aria-hidden="true">✦</i>
    </a>
  );
}
