import { useEffect, useRef } from 'react'
import {
  Globe, Zap, LayoutGrid, HelpCircle, AlertCircle, FileX, Repeat2,
  Megaphone, Users, Palette, ShieldOff, Layers, BookOpen, MessageSquare,
  Bell, Handshake, Music2, ShoppingBag, GraduationCap, PencilRuler,
  Clock, MessageCircleQuestion, Info, UserCircle2, Lock, ShieldCheck,
  Tag, Image, Shield, Sparkles, Search, ShieldAlert, UserX, Compass,
  Calendar, Mail, Send
} from 'lucide-react'

// ─── Hook ────────────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav>
      <a className="logo-nav" href="#">
        <span className="logo-texto">In<span className="acento">FACE</span></span>
      </a>
      <ul className="enlaces-nav">
        <li><a href="#problema">Problema</a></li>
        <li><a href="#modulos">Módulos</a></li>
        <li><a href="#bosquejo">Mascota</a></li>
        <li><a href="#ia">IA</a></li>
        <li><a href="#equipo">Equipo</a></li>
      </ul>
      <button className="btn-nav" onClick={() => scrollTo('equipo')}>Contacto</button>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="distintivo-hero">
          <div className="punto-distintivo" />
          Proyecto de Título · FACE UBB
        </div>
        <h1>La comunidad que la FACE <em>necesitaba</em></h1>
        <span className="nombre-grande">
          <span className="in-parte">In</span>
          <span className="face-parte">FACE</span>
        </span>
        <div className="juego-grid">
          <div className="juego-card">
            <div className="juego-card-titulo"><Globe size={13} /> Internet FACE</div>
            <div className="juego-card-contenido">
              La plataforma <strong>en línea</strong> de la Facultad de Ciencias Empresariales. Todo lo que necesitas, accesible desde donde estés.
            </div>
          </div>
          <div className="juego-card">
            <div className="juego-card-titulo"><Zap size={13} /> In your face</div>
            <div className="juego-card-contenido">
              <strong>Directo al grano.</strong> Sin canales dispersos ni información perdida. La comunidad FACE, justo donde la necesitas.
            </div>
          </div>
        </div>
        <p className="sub-hero">
          Apuntes, foros, proyectos, arte y marketplace para los estudiantes de la FACE UBB, en una sola plataforma.
        </p>
        <div className="acciones-hero">
          <button className="btn-primario" onClick={() => scrollTo('modulos')}>
            <LayoutGrid size={15} /> Ver módulos
          </button>
          <button className="btn-secundario" onClick={() => scrollTo('problema')}>
            <HelpCircle size={15} /> ¿Por qué InFACE?
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Estadísticas ─────────────────────────────────────────────────────────────
const statsData = [
  { num: '5', label: 'Carreras de la FACE' },
  { num: '6', label: 'Módulos funcionales' },
  { num: '3', label: 'Componentes de IA' },
  { num: '1', label: 'Plataforma unificada' },
]

function Estadisticas() {
  const ref = useReveal()
  return (
    <div className="estadisticas revelar" ref={ref}>
      <div className="contenedor-estadisticas">
        {statsData.map((s) => (
          <div className="item-estadistica" key={s.label}>
            <div className="numero-estadistica">{s.num}</div>
            <div className="etiqueta-estadistica">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Problema ─────────────────────────────────────────────────────────────────
const problemasData = [
  { icon: FileX, titulo: 'Apuntes que desaparecen', desc: 'Los archivos en WhatsApp expiran y se pierden en Discord.' },
  { icon: Repeat2, titulo: 'Dudas que se repiten', desc: 'Las mismas preguntas aparecen cada semestre porque nadie encuentra las respuestas anteriores.' },
  { icon: Megaphone, titulo: 'Anuncios que no llegan', desc: 'El CEE publica en múltiples canales. No todos ven todo.' },
  { icon: Users, titulo: 'Equipos solo entre amigos', desc: 'El talento de otras carreras queda invisible.' },
  { icon: Palette, titulo: 'Arte sin espacio propio', desc: 'Los artistas compiten con memes y publicidad sin herramientas especializadas.' },
  { icon: ShieldOff, titulo: 'Marketplace sin confianza', desc: 'Ventas abiertas al público general, sin verificación universitaria.' },
]

function SeccionProblema() {
  const ref = useReveal()
  return (
    <section className="seccion revelar" id="problema" ref={ref}>
      <p className="etiqueta-seccion"><AlertCircle size={13} /> El problema</p>
      <h2 className="titulo-seccion">Todo está en todas partes,<br />y en ninguna</h2>
      <p className="subtitulo-seccion">
        Los estudiantes de la FACE gestionan sus necesidades a través de canales informales dispersos. Nada queda, nada se encuentra.
      </p>
      <div className="cuadricula-problemas">
        {problemasData.map((p) => (
          <div className="tarjeta-problema" key={p.titulo}>
            <div className="icono-problema"><p.icon size={18} /></div>
            <h3>{p.titulo}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Módulos ──────────────────────────────────────────────────────────────────
const modulosData = [
  { num: 'Módulo 01', color: 'var(--rosa)', icon: BookOpen, iconBg: 'var(--rosa-palido)', iconColor: 'var(--rosa)', titulo: 'Repositorio de Apuntes', desc: 'Centraliza materiales por carrera y ramo. Búsqueda semántica incluida.', tipo: 'carrera' },
  { num: 'Módulo 02', color: 'var(--ambar)', icon: MessageSquare, iconBg: 'rgba(245,166,35,0.1)', iconColor: 'var(--ambar)', titulo: 'Foro por Ramos', desc: 'Discusiones organizadas por asignatura, con votación de respuestas.', tipo: 'carrera' },
  { num: 'Módulo 03', color: '#4a9edd', icon: Bell, iconBg: 'rgba(74,158,221,0.12)', iconColor: '#4a9edd', titulo: 'Anuncios Importantes', desc: 'Solo el CEE y tutores pueden publicar. Información oficial y segmentada.', tipo: 'carrera' },
  { num: 'Módulo 04', color: '#9b59b6', icon: Handshake, iconBg: 'rgba(155,89,182,0.12)', iconColor: '#9b59b6', titulo: 'Match de Proyectos', desc: 'Recomienda perfiles compatibles según habilidades e intereses.', tipo: 'universal' },
  { num: 'Módulo 05', color: 'var(--rosa)', icon: Music2, iconBg: 'var(--rosa-palido)', iconColor: 'var(--rosa)', titulo: 'Módulo Cultural', desc: 'Reproductor de audio, galería de imágenes, obras por capítulos.', tipo: 'universal' },
  { num: 'Módulo 06', color: 'var(--verde-azul)', icon: ShoppingBag, iconBg: 'rgba(78,205,196,0.1)', iconColor: 'var(--verde-azul)', titulo: 'Marketplace', desc: 'Compra y vende entre estudiantes verificados con correo institucional.', tipo: 'universal' },
]

function SeccionModulos() {
  const ref = useReveal()
  return (
    <div className="fondo-modulos" id="modulos" ref={ref}>
      <div className="contenedor-modulos">
        <p className="etiqueta-seccion centrado"><Layers size={13} /> La solución</p>
        <h2 className="titulo-seccion centrado">Seis módulos, una comunidad</h2>
        <p className="subtitulo-seccion centrado">Cada módulo resuelve uno de los problemas identificados en los procesos actuales de la FACE.</p>
        <div className="cuadricula-modulos">
          {modulosData.map((m) => (
            <div className="tarjeta-modulo" key={m.titulo}>
              <div className="franja-modulo" style={{ background: m.color }} />
              <div className="numero-modulo">{m.num}</div>
              <div className="icono-modulo" style={{ background: m.iconBg, color: m.iconColor }}>
                <m.icon size={20} />
              </div>
              <h3>{m.titulo}</h3>
              <p>{m.desc}</p>
              {m.tipo === 'carrera'
                ? <span className="etiqueta-modulo etiqueta-carrera"><GraduationCap size={9} /> Por carrera</span>
                : <span className="etiqueta-modulo etiqueta-universal"><Globe size={9} /> Universal</span>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Mascota ──────────────────────────────────────────────────────────────────
function SeccionMascota() {
  const ref = useReveal()
  // Intenta importar la imagen; si no existe, muestra un placeholder
  let bosquejoSrc = null
  try { bosquejoSrc = new URL('./assets/bosquejo.jpg', import.meta.url).href } catch (_) { }

  return (
    <section className="seccion-bosquejo revelar" id="bosquejo" ref={ref}>
      <p className="etiqueta-seccion"><PencilRuler size={13} /> Identidad del proyecto</p>
      <h2 className="titulo-seccion">Nuestra mascota</h2>
      <p className="subtitulo-seccion">Estamos trabajando en el diseño de la mascota oficial de InFACE. Aún no tiene nombre, pero ya tiene personalidad.</p>
      <div className="cuadricula-bosquejo">
        <div className="bloque-imagen">
          {bosquejoSrc
            ? <img className="imagen-bosquejo" src={bosquejoSrc} alt="Bocetos de la mascota InFACE" />
            : (
              <div className="imagen-bosquejo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '.8rem', background: 'var(--superficie)', color: 'var(--texto3)' }}>
                <PencilRuler size={32} style={{ opacity: 0.4 }} />
                <span style={{ fontSize: '.8rem' }}>Boceto en desarrollo</span>
              </div>
            )
          }
          <div className="pie-imagen">
            <Info size={13} style={{ color: 'var(--rosa)' }} />
            Bocetos del proceso de diseño — Artista: Diego Aguilera
          </div>
        </div>
        <div className="lista-caracteristicas">
          <div style={{ background: 'var(--superficie)', border: '1px solid var(--borde2)', borderRadius: 'var(--radio-lg)', padding: '1rem 1.1rem', display: 'flex', alignItems: 'center', gap: '.7rem' }}>
            <Clock size={16} style={{ color: 'var(--rosa)', flexShrink: 0 }} />
            <span style={{ fontSize: '.82rem', color: 'var(--texto2)' }}>Nombre y diseño definitivo aún por definir — en desarrollo activo.</span>
          </div>
          <div className="caracteristica">
            <div className="icono-caracteristica"><Layers size={16} /></div>
            <div><h4>Múltiples variantes exploradas</h4><p>Distintas poses, accesorios y estilos hasta encontrar el diseño que represente a la comunidad.</p></div>
          </div>
          <div className="caracteristica">
            <div className="icono-caracteristica"><Palette size={16} /></div>
            <div><h4>Coherencia visual</h4><p>La paleta de colores de la mascota será coherente con la identidad de InFACE.</p></div>
          </div>
          <div className="caracteristica">
            <div className="icono-caracteristica"><MessageCircleQuestion size={16} /></div>
            <div><h4>Nombre por definir</h4><p>Todavía no tiene nombre oficial. Eso también forma parte del proceso en curso.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Perfiles ─────────────────────────────────────────────────────────────────
function SeccionPerfiles() {
  const ref = useReveal()
  return (
    <section className="seccion-perfil revelar" ref={ref}>
      <p className="etiqueta-seccion"><UserCircle2 size={13} /> Perfiles</p>
      <h2 className="titulo-seccion">Tu identidad, completa</h2>
      <p className="subtitulo-seccion">Un perfil que une tus facetas académica, artística, emprendedora y comercial.</p>
      <div className="cuadricula-perfil">
        <div className="tarjeta-perfil-demo">
          <div className="cabecera-perfil" />
          <div className="cuerpo-perfil">
            <div className="nombre-perfil">Valentina Martínez</div>
            <span className="rol-perfil"><Shield size={9} /> Estudiante IECI</span>
            <p style={{ fontSize: '.8rem', color: 'var(--texto2)' }}>Ing. Ejecución Computación · 3er año</p>
            <div className="etiquetas-perfil">
              {['Python', 'React', 'UX Design'].map(t => <span className="etiqueta-perfil" key={t}>{t}</span>)}
            </div>
            <div className="estadisticas-perfil">
              {[['12', 'Apuntes'], ['38', 'Respuestas'], ['3', 'Proyectos']].map(([n, l]) => (
                <div className="dato-estadistica" key={l}>
                  <div className="numero-dato">{n}</div>
                  <div>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.5rem', fontWeight: 900, color: 'var(--texto)', marginBottom: '.8rem' }}>
            Una cuenta, todas tus facetas
          </h3>
          <div className="lista-caracteristicas-perfil">
            <div className="item-caracteristica">
              <div className="icono-item"><Lock size={14} /></div>
              <div><h4>Acceso exclusivo FACE</h4><p>Registro solo con <code>@alumnos.ubiobio.cl</code>.</p></div>
            </div>
            <div className="item-caracteristica">
              <div className="icono-item"><ShieldCheck size={14} /></div>
              <div><h4>Sistema de roles</h4><p>Estudiante, Tutor, CEE o Superadmin.</p></div>
            </div>
            <div className="item-caracteristica">
              <div className="icono-item"><Tag size={14} /></div>
              <div><h4>Etiquetas de habilidades</h4><p>Para que el match de proyectos te encuentre.</p></div>
            </div>
            <div className="item-caracteristica">
              <div className="icono-item"><Image size={14} /></div>
              <div><h4>Avatar por defecto</h4><p>La mascota oficial será el avatar predeterminado de todos los estudiantes.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── IA ───────────────────────────────────────────────────────────────────────
const iaFeatures = [
  { icon: Search, titulo: 'Búsqueda semántica', desc: 'Encuentra apuntes y respuestas por significado.' },
  { icon: ShieldAlert, titulo: 'Moderación automática', desc: 'Detecta y filtra contenido inapropiado en tiempo real.' },
  { icon: Tag, titulo: 'Recomendación por etiquetas', desc: 'Sugiere compañeros según habilidades del perfil.' },
  { icon: UserX, titulo: 'Filtro de nombres', desc: 'Detecta nombres ofensivos al momento del registro.' },
]

const resultadosIA = [
  { texto: 'Apunte: Estructuras dinámicas — IECI 2024', puntaje: '98%' },
  { texto: 'Código: linked_list.c — Alg. y Estructuras', puntaje: '91%' },
  { texto: 'Guía: Punteros y memoria dinámica', puntaje: '84%' },
]

function SeccionIA() {
  const ref = useReveal()
  return (
    <div className="fondo-ia revelar" id="ia" ref={ref}>
      <div className="contenedor-ia">
        <p className="etiqueta-seccion"><Sparkles size={13} /> Inteligencia artificial</p>
        <h2 className="titulo-seccion">IA integrada desde el diseño</h2>
        <p className="subtitulo-seccion">No como complemento, sino parte central de la arquitectura desde el primer día.</p>
        <div className="cuadricula-ia">
          <div>
            <div className="demo-busqueda">
              <div style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--texto3)', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: '.6rem' }}>
                Búsqueda semántica · Repositorio
              </div>
              <div className="filtro-busqueda">
                <Search size={14} style={{ color: 'var(--rosa)' }} />
                <span>"listas enlazadas en C con punteros"</span>
              </div>
              <div className="resultados-busqueda">
                {resultadosIA.map((r) => (
                  <div className="resultado-item" key={r.texto}>
                    <span>{r.texto}</span>
                    <span className="puntaje-resultado">{r.puntaje}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ color: 'var(--texto3)', fontSize: '.8rem', marginTop: '.55rem' }}>
              Encuentra contenido describiendo lo que necesitas, no solo palabras exactas.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
            {iaFeatures.map((f) => (
              <div key={f.titulo} style={{ display: 'flex', gap: '.85rem', alignItems: 'flex-start' }}>
                <div className="icono-ia"><f.icon size={16} /></div>
                <div>
                  <h4 style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--texto)', marginBottom: '.1rem' }}>{f.titulo}</h4>
                  <p style={{ color: 'var(--texto2)', fontSize: '.8rem' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Pasos ────────────────────────────────────────────────────────────────────
const pasosData = [
  { num: '01', titulo: 'Registro con correo institucional', desc: <>Solo cuentas <code>@alumnos.ubiobio.cl</code>. Tu identidad es verificada desde el primer momento.</> },
  { num: '02', titulo: 'Perfil integral', desc: 'Un solo perfil que une tus facetas académica, artística, emprendedora y comercial.' },
  { num: '03', titulo: 'Explora los módulos', desc: 'Repositorio, foro, marketplace y módulo cultural desde una sola interfaz.' },
  { num: '04', titulo: 'Colabora con toda la FACE', desc: 'El match conecta estudiantes de las 5 carreras sin depender del azar.' },
]

function SeccionPasos() {
  const ref = useReveal()
  return (
    <div className="contenedor-pasos revelar" ref={ref}>
      <p className="etiqueta-seccion" style={{ justifyContent: 'center' }}><Compass size={13} /> Acceso</p>
      <h2 className="titulo-seccion centrado">¿Cómo funciona?</h2>
      <p className="subtitulo-seccion centrado">Diseñado exclusivamente para la comunidad FACE. Sin registros públicos.</p>
      <div className="pasos">
        {pasosData.map((p) => (
          <div className="paso" key={p.num}>
            <div className="numero-paso">{p.num}</div>
            <div><h3>{p.titulo}</h3><p>{p.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Cronograma ───────────────────────────────────────────────────────────────
const etapasData = [
  { fecha: 'Abr–May 2026', etapa: 'Análisis', desc: 'Literatura, entrevistas y requerimientos.' },
  { fecha: 'May–Jun 2026', etapa: 'Diseño', desc: 'Arquitectura, modelo de datos y mockups.' },
  { fecha: 'Jun–Sep 2026', etapa: 'Implementación', desc: 'Desarrollo de los seis módulos.' },
  { fecha: 'Sep–Oct 2026', etapa: 'Integración IA', desc: 'Búsqueda semántica y moderación.' },
  { fecha: 'Oct–Nov 2026', etapa: 'Pruebas', desc: 'Usabilidad con usuarios reales.' },
]

function SeccionCronograma() {
  const ref = useReveal()
  return (
    <div className="fondo-cronograma revelar" ref={ref}>
      <div className="contenedor-cronograma">
        <p className="etiqueta-seccion centrado"><Calendar size={13} /> Cronograma</p>
        <h2 className="titulo-seccion centrado">Plan de trabajo 2026</h2>
        <div className="cronograma">
          {etapasData.map((e) => (
            <div className="item-cronograma" key={e.etapa}>
              <div className="punto-cronograma" />
              <div className="fecha">{e.fecha}</div>
              <div className="etapa">{e.etapa}</div>
              <div className="desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Equipo ───────────────────────────────────────────────────────────────────
function SeccionEquipo() {
  const ref = useReveal()
  return (
    <section className="seccion-equipo revelar" id="equipo" ref={ref}>
      <p className="etiqueta-seccion"><Users size={13} /> El equipo</p>
      <h2 className="titulo-seccion">Quiénes somos</h2>
      <p className="subtitulo-seccion">Estudiantes de IECI que conocen el problema de primera mano, porque lo vivimos.</p>
      <div className="cuadricula-autores">
        <div className="tarjeta-autor">
          <div className="avatar-autor">VM</div>
          <h3>Valentina Martínez Hitschfeld</h3>
          <p>Ing. Ejecución Computación e Informática · FACE UBB</p>
          <a className="correo-autor" href="mailto:valentina.martinez2302@alumnos.ubiobio.cl">
            <Mail size={12} /> valentina.martinez2302@alumnos.ubiobio.cl
          </a>
        </div>
        <div className="tarjeta-autor">
          <div className="avatar-autor">SA</div>
          <h3>Silvana Araya Retamal</h3>
          <p>Ing. Ejecución Computación e Informática · FACE UBB</p>
          <a className="correo-autor" href="mailto:silvana.araya2301@alumnos.ubiobio.cl">
            <Mail size={12} /> silvana.araya2301@alumnos.ubiobio.cl
          </a>
        </div>
      </div>
      <div className="tarjeta-guia">
        <div className="avatar-guia">AS</div>
        <div>
          <h3>Prof. Alejandra Segura Navarrete</h3>
          <p>Profesora Guía · Departamento de Sistemas de Información · FACE UBB</p>
          <a className="correo-autor" href="mailto:asegura@ubiobio.cl">
            <Mail size={12} /> asegura@ubiobio.cl
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function SeccionCTA() {
  const ref = useReveal()
  return (
    <section className="seccion-cta revelar" ref={ref}>
      <h2>Una sola plataforma para toda la <em style={{ fontStyle: 'normal', color: 'var(--rosa)' }}>FACE</em></h2>
      <p style={{ color: 'var(--texto2)', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
        Repositorio, foros, anuncios, proyectos, arte y marketplace. Integrados, verificados, para ti.
      </p>
      <button className="btn-primario" onClick={() => scrollTo('equipo')}>
        <Send size={15} /> Contactar al equipo
      </button>
      <br />
      <div className="distintivo-ubb">
        <GraduationCap size={13} /> Universidad del Bío-Bío · Proyecto de Título 2026
      </div>
    </section>
  )
}

// ─── App (raíz) ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Estadisticas />
      <SeccionProblema />
      <SeccionModulos />
      <SeccionMascota />
      <SeccionPerfiles />
      <SeccionIA />
      <SeccionPasos />
      <SeccionCronograma />
      <SeccionEquipo />
      <SeccionCTA />
      <footer>
        <div className="logo-footer">In<span className="acento">FACE</span></div>
        <p>Plataforma web de comunidad integral · FACE UBB · 2026</p>
        <p>V. Martínez &amp; S. Araya</p>
      </footer>
    </>
  )
}