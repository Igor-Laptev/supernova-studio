import { pricingPlans } from "../../data/home";
import { ArrowIcon } from "../ui/ArrowIcon";
import { SectionLabel } from "../ui/SectionLabel";

export function PricingSection() {
  return (
    <section className="pricing section" id="pricing">
      <div className="shell">
        <SectionLabel number="04">Стоимость</SectionLabel>
        <div className="split">
          <h2>
            Выберите
            <br />
            <em>масштаб запуска</em>
          </h2>
          <p>
            Пакеты помогают понять порядок инвестиций. Финальная оценка — после
            брифа.
          </p>
        </div>
        <div className="plans">
          {pricingPlans.map((plan, index) => (
            <article className={plan.featured ? "hot" : ""} key={plan.name}>
              {plan.featured && <small>Популярный</small>}
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{plan.name}</h3>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <footer>
                <strong>от {plan.price}</strong>
                <a href="#contact" aria-label={`Обсудить тариф ${plan.name}`}>
                  <ArrowIcon />
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
