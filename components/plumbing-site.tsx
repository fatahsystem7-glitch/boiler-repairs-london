"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Wrench,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Droplets,
  Flame,
  Waves,
  Bath,
  MapPin,
  Check,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";
import "./plumbing.css";

const services = [
  {
    icon: Droplets,
    number: "01",
    title: "Emergency leaks",
    text: "Burst pipe? Unexpected leak? We’ll stop the water and get things back to normal. Fast.",
    price: "From £85",
    unit: "/ hour",
    tag: "24/7 RESPONSE",
  },
  {
    icon: Flame,
    number: "02",
    title: "Boiler repair & service",
    text: "Hot water, restored. Gas Safe diagnostics, reliable repairs and annual servicing.",
    price: "£95",
    unit: "fixed rate",
    tag: "GAS SAFE ENGINEERS",
  },
  {
    icon: Waves,
    number: "03",
    title: "Drain unblocking",
    text: "Keep things flowing with high-pressure water jetting and CCTV drainage surveys.",
    price: "From £75",
    unit: "",
    tag: "NO MESS. NO STRESS.",
  },
  {
    icon: Bath,
    number: "04",
    title: "Bathroom refits",
    text: "From a fresh new suite to a complete wet room. Thoughtfully fitted, beautifully finished.",
    price: "Let’s talk",
    unit: "custom quote",
    tag: "BUILT AROUND YOU",
  },
];
const reviews = [
  {
    name: "Sarah M.",
    area: "Kensington",
    initial: "S",
    text: "A burst kitchen pipe at 2am is everyone’s nightmare. They were at my door in under 25 minutes. Calm, professional and had it sorted in no time.",
  },
  {
    name: "David L.",
    area: "Islington",
    initial: "D",
    text: "Our boiler stopped in the middle of winter. They found the ignition fault straight away and fixed it for the quoted £95. No surprises. Highly recommend.",
  },
  {
    name: "James P.",
    area: "Clapham",
    initial: "J",
    text: "Cleared a stubborn garden drain that others couldn’t fix. Arrived on time, explained everything and left the place spotless. Proper professionals.",
  },
];
export function PlumbingSite() {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState("Emergency leaks");
  const dialog = useRef<HTMLDialogElement>(null);
  const book = (value = "Emergency leaks") => {
    setService(value);
    dialog.current?.showModal();
  };
  return (
    <div className="plumbing" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="pl-header">
        <div className="pl-container header-inner">
          <a
            href="#top"
            className="pl-logo"
            aria-label="London Plumbing Co. home"
          >
            <span className="logo-icon">
              <Wrench size={25} />
            </span>
            <span>
              LONDON
              <span className="logo-bottom">
                PLUMBING CO<span className="orange">.</span>
              </span>
            </span>
          </a>
          <nav
            className={menu ? "pl-nav is-open" : "pl-nav"}
            aria-label="Main navigation"
          >
            {[
              ["Services", "services"],
              ["About us", "about"],
              ["Areas covered", "areas"],
              ["Reviews", "reviews"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href="tel:+442079460912">
              <Phone size={15} />
              020 7946 0912
            </a>
            <button className="pl-button small" onClick={() => book()}>
              Book online <ArrowUpRight size={16} />
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenu(!menu)}
              aria-label="Toggle navigation"
              aria-expanded={menu}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="pl-hero pl-container">
          <div className="hero-copy">
            <div className="live-badge">
              <span />
              24/7 EMERGENCY PLUMBERS <b>•</b> LONDON
            </div>
            <h1>
              Plumbing problems.
              <br />
              Sorted.<span className="orange"> Properly.</span>
            </h1>
            <p>
              Your local plumbers, ready when life springs a leak.
              <br className="desktop-break" /> Expert hands. Honest prices. No
              runaround.
            </p>
            <div className="hero-actions">
              <a className="pl-button" href="tel:+442079460912">
                <Phone size={18} />
                020 7946 0912
                <ArrowUpRight size={19} />
              </a>
              <button className="pl-button secondary" onClick={() => book()}>
                Book an engineer
                <ArrowRight size={17} />
              </button>
            </div>
            <div className="hero-assurance">
              <CheckCircle2 size={14} />
              No call-out fee <span /> Clear, upfront pricing <span /> Here 24/7
            </div>
            <div className="hero-social">
              <div className="avatar-stack">
                <span>JM</span>
                <span>AS</span>
                <span>RK</span>
                <span>LT</span>
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <p>Good people. Great plumbing.</p>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85"
              alt="Experienced engineer working on site"
              fetchPriority="high"
            />
            <div className="photo-shade" />
            <span className="photo-label">
              <span />
              REAL ENGINEERS. REAL PEACE OF MIND.
            </span>
            <div className="arrival-card">
              <div className="arrival-icon">
                <Clock3 size={25} />
              </div>
              <div>
                <strong>On our way. Not on hold.</strong>
                <p>At your door in as little as 30 minutes.</p>
              </div>
              <ArrowUpRight size={21} />
            </div>
            <div className="photo-corner">
              LONDON’S LOCAL
              <br />
              SINCE 2012 ↗
            </div>
          </div>
        </section>
        <section
          className="pl-container trust-row"
          aria-label="Our credentials"
        >
          <div>
            <span className="google-letter">G</span>
            <span>
              <strong>
                5.0 Google rating <span className="mini-stars">★★★★★</span>
              </strong>
              <small>Trusted by your neighbours</small>
            </span>
          </div>
          <div>
            <ShieldCheck />
            <span>
              <strong>Gas Safe registered</strong>
              <small>Qualified & certified · #559482</small>
            </span>
          </div>
          <div>
            <Clock3 />
            <span>
              <strong>30-minute arrival</strong>
              <small>Local engineers. Less waiting.</small>
            </span>
          </div>
          <div>
            <BadgeCheck />
            <span>
              <strong>£0 call-out fees</strong>
              <small>You only pay for the work</small>
            </span>
          </div>
        </section>
        <section id="services" className="services-section">
          <div className="pl-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">THE RIGHT PEOPLE FOR THE JOB</span>
                <h2>
                  Big emergency. Small fix.
                  <br />
                  We’ve got you covered.
                </h2>
              </div>
              <p>
                From a dripping tap to a cold shower.
                <br />
                One trusted team. Whatever you need.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, ...s }) => (
                <article className="service-card" key={s.number}>
                  <div className="service-card-top">
                    <Icon size={29} />
                    <span>{s.number}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="service-price">
                    <strong>{s.price}</strong>
                    <span>{s.unit}</span>
                  </div>
                  <button
                    onClick={() => book(s.title)}
                    aria-label={`Book ${s.title}`}
                  >
                    <span>{s.tag}</span>
                    <ArrowUpRight size={21} />
                  </button>
                </article>
              ))}
            </div>
            <div className="pricing-note">
              <ShieldCheck size={14} /> No hidden extras. We agree the price
              before we pick up a tool.
            </div>
          </div>
        </section>
        <section id="about" className="pl-container about-section">
          <div className="about-photo">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=85"
              alt="Our experienced engineering team at work"
            />
            <div className="years-card">
              <strong>
                14<span>+</span>
              </strong>
              <span>
                YEARS OF DOING
                <br />
                THE RIGHT THING
              </span>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">LOCAL ROOTS. HIGH STANDARDS.</span>
            <h2>
              Not just plumbers.
              <br />
              Your neighbours.
            </h2>
            <p>
              We’re a family-owned London business, keeping homes warm and water
              flowing since 2012. No faceless call centres. Just experienced
              local engineers who care about getting it right.
            </p>
            <p>
              We treat your home like our own. That means turning up when we say
              we will, explaining the job in plain English, and leaving
              everything as clean as we found it.
            </p>
            <div className="about-checks">
              {[
                "£5M public liability insurance",
                "Boot covers on. Floors protected.",
                "Transparent quotes. No nasty surprises.",
              ].map((t) => (
                <div key={t}>
                  <Check size={15} />
                  {t}
                </div>
              ))}
            </div>
            <a href="tel:+442079460912" className="text-link">
              Meet your local plumbing team <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section id="areas" className="coverage-section">
          <div className="pl-container">
            <div className="coverage-top">
              <div>
                <span className="eyebrow">YOUR BOROUGH. OUR BACKYARD.</span>
                <h2>Across London. Around the clock.</h2>
              </div>
              <span className="coverage-status">
                <span /> Engineers on the road now
              </span>
            </div>
            <div className="boroughs">
              {[
                "Central London",
                "West London",
                "North London",
                "South East London",
                "Croydon",
                "Richmond",
              ].map((a) => (
                <span key={a}>
                  <MapPin size={15} />
                  {a}
                </span>
              ))}
            </div>
            <p>
              Not sure if we cover your postcode?{" "}
              <a href="tel:+442079460912">
                Give us a ring <ArrowUpRight size={13} />
              </a>
            </p>
          </div>
        </section>
        <section id="reviews" className="pl-container review-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DON’T JUST TAKE OUR WORD FOR IT</span>
              <h2>London homes. Happy customers.</h2>
            </div>
            <div className="review-rating">
              <span className="google-letter">G</span>
              <div>
                <strong>
                  Excellent <span className="stars">★★★★★</span>
                </strong>
                <p>5.0 out of 5 on Google</p>
              </div>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((r) => (
              <article className="review-card" key={r.name}>
                <div className="review-top">
                  <span className="stars">★★★★★</span>
                  <BadgeCheck size={17} />
                </div>
                <blockquote>“{r.text}”</blockquote>
                <div className="review-person">
                  <span className="review-avatar">{r.initial}</span>
                  <div>
                    <strong>{r.name}</strong>
                    <small>{r.area}</small>
                  </div>
                  <span className="verified">Verified customer</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="pl-container">
          <div className="final-cta">
            <div>
              <span className="eyebrow">ONE LESS THING TO WORRY ABOUT</span>
              <h2>Let’s get it sorted.</h2>
              <p>Emergency or everyday. We’re just a call away.</p>
            </div>
            <a className="pl-button" href="tel:+442079460912">
              <Phone size={19} />
              020 7946 0912
              <ArrowUpRight size={21} />
            </a>
          </div>
        </section>
      </main>
      <footer className="pl-container pl-footer">
        <a href="#top" className="pl-logo">
          <Wrench className="orange" size={25} />
          <span>
            LONDON
            <span className="logo-bottom">
              PLUMBING CO<span className="orange">.</span>
            </span>
          </span>
        </a>
        <p>Good, honest plumbing. All across London.</p>
        <span>© {new Date().getFullYear()} London Plumbing Co.</span>
        <a href="tel:+442079460912">
          Here for you. 24/7. <ArrowUpRight size={14} />
        </a>
      </footer>
      <dialog
        ref={dialog}
        className="booking-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close booking"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <span className="eyebrow">LET’S GET IT SORTED</span>
        <h2>Book your local engineer.</h2>
        <p>
          Choose a service, then call our team to confirm your appointment and
          price. Online scheduling is not available yet.
        </p>
        <label htmlFor="booking-service">What can we help with?</label>
        <select
          id="booking-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
        <a className="pl-button" href="tel:+442079460912">
          <Phone size={18} />
          Call to book · 020 7946 0912
        </a>
        <small>For an active leak or emergency, please call immediately.</small>
      </dialog>
    </div>
  );
}
