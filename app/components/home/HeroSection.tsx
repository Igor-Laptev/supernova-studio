import { navigation } from "../../data/home";
import { ArrowIcon } from "../ui/ArrowIcon";
import { Logo } from "../ui/Logo";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <header className="header shell">
        <Logo href="#top" />
        <nav aria-label="Основная навигация">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact">Связаться ↗</a>
      </header>

      <div className="heroGrid shell">
        <div>
          <p className="eyebrow">— Агентство маркетинга и брендинга</p>
          <h1>
            Ваш проект —<br />
            новая звезда
            <br />
            <em>во вселенной</em>
          </h1>
          <p className="lead">
            Создаём брендинг, сайты и рекламу
            <br />
            для девелопмента и недвижимости
          </p>
          <a className="cta" href="#contact">
            Обсудить проект <ArrowIcon />
          </a>
        </div>
        <div className="cosmos" aria-hidden="true">
          <i />
          <b />
        </div>
      </div>

      <div className="meta shell">
        <span className="spark" aria-hidden="true">
          ✦
        </span>
        <span>12 лет опыта</span>
        <b aria-hidden="true">•</b>
        <span>80+ реализованных проектов</span>
        <a href="#about">Листайте вниз ↓</a>
      </div>
    </section>
  );
}
