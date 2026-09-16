import { ArrowRightIcon as ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { CheckCircleIcon as CheckCircle } from '@phosphor-icons/react/dist/ssr/CheckCircle';
import { ClockIcon as Clock } from '@phosphor-icons/react/dist/ssr/Clock';
import { CubeIcon as Cube } from '@phosphor-icons/react/dist/ssr/Cube';
import { MapPinIcon as MapPin } from '@phosphor-icons/react/dist/ssr/MapPin';
import { RulerIcon as Ruler } from '@phosphor-icons/react/dist/ssr/Ruler';
import { ShieldCheckIcon as ShieldCheck } from '@phosphor-icons/react/dist/ssr/ShieldCheck';
import { SnowflakeIcon as Snowflake } from '@phosphor-icons/react/dist/ssr/Snowflake';
import { TruckIcon as Truck } from '@phosphor-icons/react/dist/ssr/Truck';
import { WarehouseIcon as Warehouse } from '@phosphor-icons/react/dist/ssr/Warehouse';
import { WhatsappLogoIcon as WhatsappLogo } from '@phosphor-icons/react/dist/ssr/WhatsappLogo';
import { WrenchIcon as Wrench } from '@phosphor-icons/react/dist/ssr/Wrench';
import Image from 'next/image';

import { Reveal } from '@/components/reveal';
import { ThemeToggle } from '@/components/theme-toggle';

const whatsappUrl =
  'https://wa.me/5511915082569?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20de%20container.';

const products = [
  {
    name: '20GP',
    kind: 'Carga seca',
    image: '/assets/catalog/20gp-vermelho.webp',
    alt: 'Container 20GP vermelho visto pela traseira',
    description:
      'Formato compacto para estoque, apoio de obra e projetos com espaço controlado.',
  },
  {
    name: '40GP',
    kind: 'Carga seca',
    image: '/assets/catalog/40gp-verde.webp',
    alt: 'Container 40GP verde visto pela traseira',
    description:
      'Mais área interna para operações que precisam de capacidade sem altura extra.',
  },
  {
    name: '40HC',
    kind: 'High Cube',
    image: '/assets/catalog/40hc-verde.webp',
    alt: 'Container 40HC verde com portas fechadas',
    description:
      'Altura interna ampliada para armazenagem, transformação e projetos especiais.',
  },
  {
    name: '40HC interno',
    kind: 'Vista interna',
    image: '/assets/catalog/40hc-interior.webp',
    alt: 'Interior amplo de um container 40HC',
    description:
      'Veja o espaço real antes de decidir. Compartilhamos fotos e condições da unidade.',
  },
  {
    name: '40 Reefer',
    kind: 'Refrigerado',
    image: '/assets/catalog/40-reefer.webp',
    alt: 'Container 40 Reefer branco com unidade de refrigeração',
    description:
      'Solução para operações que dependem de temperatura controlada e isolamento.',
  },
  {
    name: '20GP em lote',
    kind: 'Disponibilidade',
    image: '/assets/catalog/20gp-pilha.webp',
    alt: 'Conjunto de containers 20GP empilhados em pátio',
    description:
      'Consulte lotes e unidades disponíveis para compras comerciais e projetos maiores.',
  },
];

const testimonials = [
  {
    quote:
      'Recebi fotos, medidas e as condições da unidade antes da decisão. O atendimento foi objetivo do começo ao fim.',
    role: 'Cliente de container 20GP',
  },
  {
    quote:
      'A conversa pelo WhatsApp facilitou a comparação dos modelos e deixou claro o que estava disponível.',
    role: 'Comprador para armazenagem',
  },
  {
    quote:
      'Encontramos uma opção adequada para o projeto sem perder tempo com informações genéricas.',
    role: 'Cliente de projeto comercial',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="B.A Containers - início"
          >
            <Image
              src="/assets/brand/ba-containers-logo.png"
              width="246"
              height="126"
              sizes="144px"
              alt="B.A Containers"
            />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#catalogo">Catálogo</a>
            <a href="#solucoes">Soluções</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <a
              className="header-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Pedir orçamento
              <ArrowRight aria-hidden="true" weight="bold" />
            </a>
            <details className="mobile-menu">
              <summary>Menu</summary>
              <nav aria-label="Navegação para celular">
                <a href="#catalogo">Catálogo</a>
                <a href="#solucoes">Soluções</a>
                <a href="#sobre">Sobre nós</a>
                <a href="#depoimentos">Depoimentos</a>
                <a href="#contato">Contato</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Venda de containers em várias regiões</p>
            <h1>Container certo. Projeto em movimento.</h1>
            <p className="hero-text">
              Containers secos e refrigerados, fotos reais e orçamento direto
              pelo WhatsApp.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsappLogo aria-hidden="true" weight="fill" />
                Pedir orçamento
              </a>
              <a className="button button-secondary" href="#catalogo">
                Ver catálogo
              </a>
            </div>
          </div>

          <div className="hero-media">
            <Image
              src="/assets/stock/hero-port.webp"
              width="1800"
              height="1200"
              fetchPriority="high"
              sizes="(max-width: 820px) 100vw, 56vw"
              alt="Vista aérea de um terminal com containers organizados"
            />
            <div className="hero-stat" aria-label="Tipos disponíveis">
              <strong>20GP, 40GP, 40HC e Reefer</strong>
              <span>Consulte a disponibilidade atual</span>
            </div>
          </div>
        </section>

        <section
          className="trust-strip"
          aria-label="Diferenciais do atendimento"
        >
          <div className="trust-item">
            <CheckCircle aria-hidden="true" weight="bold" />
            <span>Fotos reais das unidades</span>
          </div>
          <div className="trust-item">
            <Clock aria-hidden="true" weight="bold" />
            <span>Atendimento direto</span>
          </div>
          <div className="trust-item">
            <Cube aria-hidden="true" weight="bold" />
            <span>Modelos secos e Reefer</span>
          </div>
          <div className="trust-item">
            <Truck aria-hidden="true" weight="bold" />
            <span>Disponibilidade sob consulta</span>
          </div>
        </section>

        <section className="section catalog-section" id="catalogo">
          <Reveal className="section-heading">
            <h2>Escolha pelo uso, não só pelo tamanho.</h2>
            <p>
              Compare os modelos mais procurados e peça as fotos atualizadas da
              unidade disponível.
            </p>
          </Reveal>

          <div className="catalog-grid">
            {products.map((product, index) => (
              <Reveal
                className={`product-card product-card-${index + 1}`}
                delay={(index % 3) * 0.06}
                key={product.name}
              >
                <div className="product-image">
                  <Image
                    src={product.image}
                    width="900"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 820px) 100vw, (max-width: 1200px) 50vw, 55vw"
                    alt={product.alt}
                  />
                </div>
                <div className="product-copy">
                  <div>
                    <span>{product.kind}</span>
                    <h3>{product.name}</h3>
                  </div>
                  <p>{product.description}</p>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Pedir orçamento
                    <ArrowRight aria-hidden="true" weight="bold" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="section selector-section"
          aria-labelledby="guia-title"
        >
          <Reveal className="selector-intro">
            <Ruler aria-hidden="true" weight="duotone" />
            <h2 id="guia-title">Qual modelo combina com a sua operação?</h2>
            <p>
              O ponto de partida é simples: finalidade, espaço disponível e
              condição necessária.
            </p>
          </Reveal>

          <div className="selector-list">
            <Reveal className="selector-row">
              <strong>20GP</strong>
              <span>
                Estoque compacto, apoio de obra e projetos em áreas menores.
              </span>
              <Cube aria-hidden="true" weight="light" />
            </Reveal>
            <Reveal className="selector-row" delay={0.06}>
              <strong>40GP</strong>
              <span>
                Maior capacidade interna para armazenagem e uso comercial.
              </span>
              <Warehouse aria-hidden="true" weight="light" />
            </Reveal>
            <Reveal className="selector-row" delay={0.12}>
              <strong>40HC</strong>
              <span>
                Mais altura para transformação, equipamentos e projetos
                especiais.
              </span>
              <Wrench aria-hidden="true" weight="light" />
            </Reveal>
            <Reveal className="selector-row" delay={0.18}>
              <strong>Reefer</strong>
              <span>
                Isolamento e refrigeração para operações com controle térmico.
              </span>
              <Snowflake aria-hidden="true" weight="light" />
            </Reveal>
          </div>
        </section>

        <section className="section solutions-section" id="solucoes">
          <Reveal className="solutions-image">
            <Image
              src="/assets/stock/about-port.webp"
              width="1600"
              height="1067"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 820px) 100vw, 58vw"
              alt="Navios e guindastes movimentando containers em um porto"
            />
          </Reveal>
          <div className="solutions-copy">
            <Reveal>
              <h2>Uma estrutura. Muitos caminhos.</h2>
              <p>
                Do armazenamento imediato à transformação arquitetônica, o
                modelo deve acompanhar o uso real.
              </p>
            </Reveal>
            <Reveal className="solution-block" delay={0.06}>
              <Warehouse aria-hidden="true" weight="duotone" />
              <div>
                <h3>Estoque e apoio operacional</h3>
                <p>
                  Proteja materiais, ferramentas e equipamentos com uma
                  estrutura robusta.
                </p>
              </div>
            </Reveal>
            <Reveal className="solution-block" delay={0.12}>
              <Wrench aria-hidden="true" weight="duotone" />
              <div>
                <h3>Projetos e transformação</h3>
                <p>
                  Base para escritórios, lojas, alojamentos e soluções sob
                  medida.
                </p>
              </div>
            </Reveal>
            <Reveal className="solution-block" delay={0.18}>
              <Snowflake aria-hidden="true" weight="duotone" />
              <div>
                <h3>Operações refrigeradas</h3>
                <p>
                  Containers Reefer para necessidades de isolamento e
                  temperatura controlada.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <Reveal className="about-statement">
            <h2>Negociação clara começa com informação real.</h2>
            <p>
              A B.A Containers conecta cada cliente à opção adequada com
              atendimento direto, imagens das unidades e disponibilidade
              confirmada antes da compra.
            </p>
          </Reveal>
          <Reveal className="about-values">
            <div>
              <ShieldCheck aria-hidden="true" weight="duotone" />
              <h3>Transparência</h3>
              <p>
                Condição, modelo e disponibilidade apresentados antes da
                decisão.
              </p>
            </div>
            <div>
              <WhatsappLogo aria-hidden="true" weight="duotone" />
              <h3>Proximidade</h3>
              <p>Conversa direta pelo canal que você já usa todos os dias.</p>
            </div>
            <div>
              <Truck aria-hidden="true" weight="duotone" />
              <h3>Praticidade</h3>
              <p>
                Um processo simples, da escolha do modelo ao alinhamento da
                entrega.
              </p>
            </div>
          </Reveal>
        </section>

        <section
          className="section process-section"
          aria-labelledby="process-title"
        >
          <Reveal>
            <h2 id="process-title">Do pedido à entrega.</h2>
          </Reveal>
          <div className="process-track">
            <Reveal className="process-item">
              <h3>Conte seu uso</h3>
              <p>Explique a finalidade, a cidade e o prazo desejado.</p>
            </Reveal>
            <Reveal className="process-item" delay={0.06}>
              <h3>Compare as opções</h3>
              <p>Receba modelos disponíveis, fotos e condições comerciais.</p>
            </Reveal>
            <Reveal className="process-item" delay={0.12}>
              <h3>Confirme a unidade</h3>
              <p>Valide o container escolhido e os detalhes da negociação.</p>
            </Reveal>
            <Reveal className="process-item" delay={0.18}>
              <h3>Alinhe a entrega</h3>
              <p>Combine a logística conforme o local e a operação.</p>
            </Reveal>
          </div>
        </section>

        <section className="section testimonials-section" id="depoimentos">
          <Reveal className="section-heading">
            <h2>Depoimentos de quem buscava agilidade.</h2>
            <p>
              Relatos de clientes atendidos na escolha de containers para
              diferentes finalidades.
            </p>
          </Reveal>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Reveal
                className={index === 0 ? 'testimonial featured' : 'testimonial'}
                delay={index * 0.07}
                key={testimonial.role}
              >
                <blockquote>“{testimonial.quote}”</blockquote>
                <p>{testimonial.role}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <Reveal className="faq-title">
            <h2 id="faq-title">Perguntas frequentes.</h2>
            <p>
              As respostas ajudam na primeira decisão. A disponibilidade é
              sempre confirmada no atendimento.
            </p>
          </Reveal>
          <Reveal className="faq-list">
            <details>
              <summary>Quais modelos estão disponíveis?</summary>
              <p>
                Trabalhamos com opções 20GP, 40GP, 40HC e 40 Reefer, conforme
                disponibilidade.
              </p>
            </details>
            <details>
              <summary>Posso receber fotos antes de comprar?</summary>
              <p>
                Sim. Enviamos imagens das unidades para você avaliar o modelo e
                a condição disponível.
              </p>
            </details>
            <details>
              <summary>Vocês atendem fora de São Paulo?</summary>
              <p>
                O atendimento considera várias regiões. Informe sua cidade para
                verificarmos a melhor opção.
              </p>
            </details>
            <details>
              <summary>Como funciona a entrega?</summary>
              <p>
                A logística é alinhada caso a caso conforme local, acesso e tipo
                de container escolhido.
              </p>
            </details>
          </Reveal>
        </section>

        <section className="location-section" id="contato">
          <div className="map-wrap">
            <iframe
              title="Mapa da área de atendimento em São Paulo"
              src="https://www.google.com/maps?q=S%C3%A3o%20Paulo%2C%20SP&z=8&output=embed"
              width="800"
              height="560"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Reveal className="contact-panel">
            <MapPin aria-hidden="true" weight="duotone" />
            <h2>Atendimento em várias regiões.</h2>
            <p>
              Informe sua cidade e o modelo desejado. Confirmamos a
              disponibilidade e alinhamos a logística.
            </p>
            <a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappLogo aria-hidden="true" weight="fill" />
              Pedir orçamento
            </a>
            <div className="contact-detail">
              <span>WhatsApp comercial</span>
              <a href="tel:+5511915082569">(11) 91508-2569</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            src="/assets/brand/ba-containers-logo.png"
            width="246"
            height="126"
            loading="lazy"
            sizes="150px"
            alt="B.A Containers"
          />
          <p>Containers para armazenagem, operação e novos projetos.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <a href="#catalogo">Catálogo</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="footer-meta">
          <span>© 2026 B.A Containers</span>
          <span>Fotos de apoio: Unsplash</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Pedir orçamento pelo WhatsApp"
      >
        <WhatsappLogo aria-hidden="true" weight="fill" />
      </a>
    </>
  );
}
