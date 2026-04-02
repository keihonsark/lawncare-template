import { Link } from 'react-router-dom'
import { Scissors, TreePine, Droplets, Leaf, Wrench, ClipboardCheck } from 'lucide-react'
import config from '../config'
import './Services.css'

const { services: svcContent } = config.content

const services = [
  { img: '/09_hedge_trimming.png', Icon: Scissors, title: 'Pruning', desc: 'Careful shaping and trimming of shrubs, hedges, and ornamental plants to keep your landscape looking clean and healthy year-round.', link: '/services/pruning' },
  { img: '/07_tree_service.png', Icon: TreePine, title: 'Tree Trimming', desc: 'Safe, professional trimming for trees of all sizes. We remove dead branches, improve structure, and keep your property looking its best.', link: '/services/tree-services' },
  { img: '/08_lawn_maintenance.png', Icon: Leaf, title: 'Lawn Maintenance', desc: 'Weekly and bi-weekly mowing, edging, trimming, and blowing. We keep your lawn sharp so you never have to worry about it.', link: '/services/lawn-maintenance' },
  { img: '/04_yard_cleanup.png', Icon: Wrench, title: 'Yard Clean Up', desc: 'Full yard clean-ups for overgrown, neglected, or seasonal mess. We haul debris, clear weeds, and leave your property spotless.', link: '/services/yard-clean-up' },
  { img: '/06_sprinkler_system.png', Icon: Droplets, title: 'Irrigation Systems', desc: 'Complete sprinkler and drip system installation, repair, and maintenance. We keep your landscape properly watered year-round.', link: '/services/irrigation-systems' },
  { img: '/mulch.png', Icon: ClipboardCheck, title: 'Mulch & River Rock', desc: 'Professional mulch and river rock installation to boost curb appeal, retain moisture, and reduce weeds in your garden beds.', link: '/services/mulch-river-rock' },
]

export default function Services() {
  return (
    <section id="services" className="services fade-up">
      <div className="container">
        <p className="services__eyebrow">{svcContent.eyebrow}</p>
        <h2 className="services__heading sh__heading">{svcContent.headline.replace('Services', '').trim()} <span className="sh__outline">Services</span></h2>
        <div className="sh__line" />
        <p className="services__sub">
          {svcContent.subheadline}
        </p>
        <div className="services__grid">
          {services.map((s) => {
            const card = (
              <>
                <div className="svc-card__img">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="svc-card__body">
                  <span className="svc-card__icon"><s.Icon size={24} color="#1A3D2B" strokeWidth={1.5} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  {s.link && (
                    <span className="svc-card__link">Learn More →</span>
                  )}
                </div>
              </>
            )
            return s.link ? (
              <Link to={s.link} key={s.title} className="svc-card stagger-child">
                {card}
              </Link>
            ) : (
              <div key={s.title} className="svc-card stagger-child">
                {card}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
