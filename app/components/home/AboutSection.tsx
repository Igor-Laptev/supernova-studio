import { metrics } from "../../data/home";
import { SectionLabel } from "../ui/SectionLabel";

export function AboutSection() {
  return (
    <section className="about shell section" id="about">
      <SectionLabel number="01">О нас</SectionLabel>
      <div className="aboutMain">
        <p>
          Supernova — явление, в ходе которого звезда увеличивает светимость в
          сотни миллионов раз.
        </p>
        <h2>
          Мы делаем так, чтобы
          <br />
          ваш проект <em>увидели.</em>
        </h2>
        <div className="columns">
          <p>
            Специализируемся на маркетинге и брендинге проектов в сфере
            девелопмента и недвижимости.
          </p>
          <p>
            Создаём узнаваемый образ, сайты, рекламу и контент, помогаем
            выделиться среди конкурентов.
          </p>
        </div>
      </div>
      <div className="metrics">
        {metrics.map((metric) => (
          <div key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
