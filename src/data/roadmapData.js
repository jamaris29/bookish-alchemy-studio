export const roadmapContent = [
  {
    weekId: 'bonus-escudo',
    isFree: false,
    isBonus: true,
    title: {
      es: '🎁 Bono Especial: El Escudo del Autor (Valorado en $29)',
      en: '🎁 Special Bonus: The Author\'s Shield (Valued at $29)'
    },
    subtitle: {
      es: '¿Vas a publicar con una editorial o en coedición? No lances a ciegas.',
      en: 'Are you publishing with a traditional publisher or co-publishing? Don\'t launch blindly.'
    },
    tasks: [
      {
        id: 'bonus-escudo-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: 'Qué exigir exactamente en tu contrato',
          en: 'What to demand exactly in your contract'
        },
        description: {
          es: 'Descubre las cláusulas críticas: fechas de publicación, quién paga los marcapáginas y portadas, derechos de autor en formato digital vs. físico, y cláusulas de rescisión.',
          en: 'Discover critical clauses: publication dates, who pays for bookmarks and covers, digital vs physical copyrights, and termination clauses.'
        }
      },
      {
        id: 'bonus-escudo-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: 'La Sinergia del Lanzamiento — cómo se divide el esfuerzo de ventas',
          en: 'The Launch Synergy — how sales effort is divided'
        },
        description: {
          es: 'Existe el mito de que firmar un contrato significa que la editorial hará todo el marketing por ti. La realidad es muy diferente. Aprende cómo se divide realmente el esfuerzo de ventas entre tú y la editorial.',
          en: 'There\'s a myth that signing a contract means the publisher will do all the marketing for you. The reality is very different. Learn how sales effort is really divided between you and the publisher.'
        }
      },
      {
        id: 'bonus-escudo-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: 'Tu checklist de supervivencia editorial',
          en: 'Your editorial survival checklist'
        },
        description: {
          es: 'Si autopublicas 100% por tu cuenta, esta guía también te revelará secretos de la industria tradicional que puedes aplicar a tu negocio independiente.',
          en: 'If you self-publish 100%, this guide will also reveal secrets of the traditional industry that you can apply to your independent business.'
        }
      }
    ]
  },
  {

    weekId: 10,
    isFree: true,
    title: { es: '⏳ Semana 10: Los cimientos', en: '⏳ Week 10: The Foundations' },
    subtitle: {
      es: 'Esta semana es puramente estratégica. Antes de hacer ruido, hay que preparar la casa para recibir a las visitas.',
      en: 'This week is purely strategic. Before making noise, you need to prepare the house for visitors.'
    },
    tasks: [
      {
        id: 'w10-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Definir la psicografía del lector',
          en: '[Everyone] Define reader psychographics'
        },
        description: {
          es: 'Por qué: No le vendes "a todo el mundo", le vendes a un lector con gustos específicos.\n\nPaso a paso: Abre un documento y describe a tu lector ideal. ¿Qué otros libros lee? ¿Busca escapar de la rutina con un romance oscuro o quiere resolver un misterio en un thriller? Define qué emociones le va a provocar tu libro.',
          en: 'Why: You don\'t sell to "everyone", you sell to a reader with specific tastes.\n\nStep by step: Open a document and describe your ideal reader. What other books do they read? Are they looking to escape routine with a dark romance or solve a mystery in a thriller? Define what emotions your book will provoke.'
        },
        upsell: {
          id: 'prompt-gemini',
          type: 'tool',
          title: { es: '✨ Herramienta Gratuita', en: '✨ Free Tool' },
          text: {
            es: 'Usa nuestro Prompter Editorial (Bot Gemini Personalizado) gratis para generar tu psicografía de lector y tropos automáticamente.',
            en: 'Use our free Editorial Prompter (Custom Gemini Bot) to generate your reader psychographics and tropes automatically.'
          },
          price: 'Free',
          link: 'https://gemini.google.com/gem/d3e013f0a080'
        }
      },
      {
        id: 'w10-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Montar la base de operaciones (Landing Page)',
          en: '[Everyone] Set up your home base (Landing Page)'
        },
        description: {
          es: 'Por qué: Las redes sociales pueden fallar, pero tu lista de correos es tuya.\n\nPaso a paso: Usa herramientas como MailerLite. Crea una página de aterrizaje sencilla (Landing Page) donde ofrezcas un "imán de prospectos" gratis (ej. el primer capítulo de tu libro, un mapa de tu mundo fantástico o una escena extra) a cambio de que dejen su correo electrónico.\n\n✨ ¿Te abruma la parte técnica? En Bookish Alchemy AI Studio diseñamos Landing Pages estéticas y estratégicas que convierten visitantes en lectores obsesionados con tus historias. ¡No pelees con el código! Escríbenos a nuestro Instagram y lo hacemos por ti.',
          en: 'Why: Social media can fail, but your email list is yours.\n\nStep by step: Use tools like MailerLite. Create a simple landing page where you offer a free "lead magnet" (e.g., the first chapter of your book, a map of your fantasy world, or a bonus scene) in exchange for their email.\n\n✨ Overwhelmed by the tech? At Bookish Alchemy AI Studio we design aesthetic and strategic Landing Pages that convert visitors into readers obsessed with your stories. Don\'t fight the code! Write us on Instagram and we\'ll do it for you.'
        }
      },
      {
        id: 'w10-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Definir 3 a 5 tropos principales',
          en: '[Everyone] Define 3 to 5 main tropes'
        },
        description: {
          es: 'Por qué: Los lectores de hoy (especialmente en BookTok y Bookstagram) compran por tropos.\n\nPaso a paso: Haz una lista de los elementos clave de tu novela. Ejemplos: Enemies to Lovers, Falso Matrimonio, Magia Prohibida, Misterio en pueblo pequeño. Úsalos como tus pilares para todo el contenido visual.',
          en: 'Why: Today\'s readers (especially on BookTok and Bookstagram) buy by tropes.\n\nStep by step: Make a list of the key elements of your novel. Examples: Enemies to Lovers, Fake Marriage, Forbidden Magic, Small Town Mystery. Use them as your pillars for all visual content.'
        }
      },
      {
        id: 'w10-t4',
        formats: ['Físico', 'Ambos'],
        title: {
          es: '[Solo Físico] Pedir la Copia de Prueba (Proof Copy)',
          en: '[Physical Only] Order the Proof Copy'
        },
        description: {
          es: 'Por qué: Nunca imprimas mil libros sin ver cómo lucen los colores y los márgenes en papel.\n\nPaso a paso: Sube el PDF de tu manuscrito formateado y la portada a tu panel de Amazon KDP (como borrador). Ve a las opciones del libro y selecciona "Solicitar copia de prueba". Te enviarán un ejemplar físico con una banda de "No para la venta" para que revises errores.',
          en: 'Why: Never print a thousand books without seeing how colors and margins look on paper.\n\nStep by step: Upload the PDF of your formatted manuscript and cover to your Amazon KDP panel (as a draft). Go to the book options and select "Request proof copy". They\'ll send you a physical copy with a "Not for Sale" band so you can review errors.'
        }
      },
      {
        id: 'w10-t5',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Finalizar diseño de portada profesional',
          en: '[Everyone] Finalize professional cover design'
        },
        description: {
          es: 'Por qué: La portada es tu anuncio #1. Si no cumple con los códigos visuales de tu género, los lectores la ignoran.\n\nPaso a paso: Verifica que tu portada cumpla estos 3 criterios: 1) Es reconocible como su género en miniatura (thumbnail de Amazon). 2) La tipografía es legible a tamaño pequeño. 3) La paleta de colores compite con los bestsellers de tu categoría. Si no cumple, es hora de invertir en un diseñador profesional.',
          en: 'Why: Your cover is your #1 advertisement. If it doesn\'t meet the visual codes of your genre, readers will ignore it.\n\nStep by step: Verify your cover meets these 3 criteria: 1) It\'s recognizable as its genre in thumbnail size (Amazon thumbnail). 2) The typography is readable at small size. 3) The color palette competes with the bestsellers in your category. If it doesn\'t pass, it\'s time to invest in a professional designer.'
        }
      },
      {
        id: 'w10-t6',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Crear Lead Magnet de alta conversión',
          en: '[Everyone] Create a high-conversion Lead Magnet'
        },
        description: {
          es: 'Por qué: Un "imán de lectores" es lo que convierte un visitante curioso en un suscriptor que comprará tu libro.\n\nPaso a paso: Elige uno de estos formatos: una precuela exclusiva, una escena eliminada, una guía temática relacionada con tu libro, o el primer capítulo extendido. Créalo en PDF con diseño atractivo (usa Canva). Este será el incentivo para que dejen su correo electrónico en tu Landing Page.',
          en: 'Why: A "lead magnet" is what converts a curious visitor into a subscriber who will buy your book.\n\nStep by step: Choose one of these formats: an exclusive prequel, a deleted scene, a thematic guide related to your book, or an extended first chapter. Create it as a nicely designed PDF (use Canva). This will be the incentive for leaving their email on your Landing Page.'
        }
      }
    ]
  },
  {
    weekId: 9,
    isFree: true,
    title: { es: '⏳ Semana 9: Armando el escuadrón', en: '⏳ Week 9: Assembling the Squad' },
    subtitle: {
      es: 'Es hora de buscar a tus primeros defensores: los lectores que leerán gratis a cambio de una reseña honesta.',
      en: 'It\'s time to find your first defenders: readers who will read for free in exchange for an honest review.'
    },
    tasks: [
      {
        id: 'w9-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Lanzar formulario para reclutar al Equipo ARC',
          en: '[Everyone] Launch form to recruit ARC Team'
        },
        description: {
          es: 'Por qué: Necesitas reseñas en Amazon el Día 1 para que el algoritmo te tome en serio.\n\nPaso a paso: Crea un Google Forms. Pregunta el nombre, correo y enlaces a sus perfiles de Instagram/TikTok/Goodreads. Publica el enlace en tus redes invitando a tus seguidores a ser los primeros en leer tu novela a cambio de dejar una reseña en la semana de lanzamiento.',
          en: 'Why: You need reviews on Amazon on Day 1 for the algorithm to take you seriously.\n\nStep by step: Create a Google Form. Ask for name, email, and links to their Instagram/TikTok/Goodreads profiles. Post the link on your social media inviting your followers to be the first to read your novel in exchange for leaving a review during launch week.'
        }
      },
      {
        id: 'w9-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Publicar el primer teaser visual',
          en: '[Everyone] Publish the first visual teaser'
        },
        description: {
          es: 'Por qué: Calentar a la audiencia sin revelar demasiado genera anticipación.\n\nPaso a paso: Ve a Canva. Crea un video vertical (Reel/TikTok) o un carrusel usando imágenes estéticas que representen la vibra del libro (ej. lluvia, una daga, una taza de café). Agrega una frase intrigante de tu novela. Usa etiquetas específicas en minúsculas (ej. #booktok #romanceoscuro).',
          en: 'Why: Warming up the audience without revealing too much generates anticipation.\n\nStep by step: Go to Canva. Create a vertical video (Reel/TikTok) or a carousel using aesthetic images that represent the vibe of the book (e.g., rain, a dagger, a cup of coffee). Add an intriguing quote from your novel. Use specific lowercase hashtags (e.g., #booktok #darkromance).'
        },
        upsell: {
          id: 'alchemy-studio',
          type: 'service',
          title: { es: '¿Bloqueo creativo visual?', en: 'Creative visual block?' },
          text: {
            es: 'En Bookish Alchemy AI Studio creamos tus imágenes, teasers y portadas con IA de altísima calidad.',
            en: 'At Bookish Alchemy AI Studio we create your images, teasers, and covers with high-quality AI.'
          },
          price: 'Social',
          link: 'https://www.instagram.com/bookishalchemy.ai/'
        }
      },
      {
        id: 'w9-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Configurar el perfil de autor base',
          en: '[Everyone] Set up basic author profile'
        },
        description: {
          es: 'Por qué: Necesitas un espacio profesional donde los lectores vean tu biografía.\n\nPaso a paso: Entra a author.amazon.com y a Goodreads. Si eres autor nuevo, crea tu cuenta y sube una buena foto tuya y tu biografía. (Nota: Vincularás tu libro específico en unas semanas, cuando actives la preventa).',
          en: 'Why: You need a professional space where readers can see your biography.\n\nStep by step: Go to author.amazon.com and Goodreads. If you\'re a new author, create your account and upload a good photo and biography. (Note: You\'ll link your specific book in a few weeks, when you activate the preorder).'
        }
      }
    ]
  },
  {
    weekId: 8,
    isFree: false,
    title: { es: '⏳ Semana 8: El misterio vende', en: '⏳ Week 8: Mystery Sells' },
    subtitle: {
      es: 'Comienza el compromiso con tus lectores y preparamos la logística para los que van a imprimir.',
      en: 'Engagement with your readers begins and we prepare logistics for those going to print.'
    },
    tasks: [
      {
        id: 'w8-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Seleccionar Equipo ARC y enviar bienvenida',
          en: '[Everyone] Select ARC Team and send welcome'
        },
        description: {
          es: 'Por qué: Hay que establecer las reglas del juego de forma profesional.\n\nPaso a paso: Cierra el formulario. Elige a los candidatos que parezcan más comprometidos. Envíales un correo de bienvenida diciendo: "¡Felicidades! Estás en el equipo. Te enviaré el libro la próxima semana. Tu única misión será dejar una reseña en Amazon el [Fecha de lanzamiento]".',
          en: 'Why: You need to establish the rules of the game professionally.\n\nStep by step: Close the form. Choose the candidates who seem most committed. Send them a welcome email saying: "Congratulations! You\'re on the team. I\'ll send you the book next week. Your only mission will be to leave a review on Amazon on [Launch Date]".'
        },
        upsell: {
          id: 'pr-templates',
          type: 'resource',
          title: { es: 'Ahorra horas redactando', en: 'Save hours writing' },
          text: {
            es: 'Adquiere nuestro Pack de Plantillas de Email PR con guiones probados para contactar lectores y hacer seguimientos sin sonar molesto.',
            en: 'Get our PR Email Templates Pack with proven scripts to contact readers and follow up without sounding annoying.'
          },
          price: 'Incluido en Premium',
          link: '/recursos'
        }
      },
      {
        id: 'w8-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] El rompecabezas de la portada',
          en: '[Everyone] The cover puzzle'
        },
        description: {
          es: 'Por qué: Mantiene la atención de la audiencia activa antes de mostrar el arte final.\n\nPaso a paso: En tus redes sociales, sube fragmentos recortados de tu portada (un ojo, una parte del título, un símbolo). Pregúntale a tu audiencia de qué creen que trata o de qué color será.',
          en: 'Why: Keeps the audience\'s attention active before showing the final art.\n\nStep by step: On your social media, upload cropped fragments of your cover (an eye, part of the title, a symbol). Ask your audience what they think it\'s about or what color it will be.'
        }
      },
      {
        id: 'w8-t3',
        formats: ['Físico', 'Ambos'],
        title: {
          es: '[Solo Físico] Diseñar y encargar el "Swag"',
          en: '[Physical Only] Design and order Swag'
        },
        description: {
          es: 'Por qué: Los detalles físicos enamoran a los lectores y sirven de promoción.\n\nPaso a paso: Diseña en Canva marcapáginas, postales de los personajes o pegatinas (stickers) relacionadas con tu libro. Manda a imprimirlos en una imprenta local o servicios online con suficiente tiempo de antelación.',
          en: 'Why: Physical details make readers fall in love and serve as promotion.\n\nStep by step: Design bookmarks, character postcards, or stickers related to your book in Canva. Send them to a local printer or online services with enough lead time.'
        }
      },
      {
        id: 'w8-t4',
        formats: ['Físico', 'Ambos'],
        title: {
          es: '[Solo Físico] Agendar fecha para el evento presencial',
          en: '[Physical Only] Schedule date for in-person event'
        },
        description: {
          es: 'Por qué: Los lugares se reservan rápido.\n\nPaso a paso: Contacta a tu librería local, café literario o centro cultural. Fija la fecha (idealmente el mismo fin de semana de tu lanzamiento digital) y acuerda los detalles de espacio.',
          en: 'Why: Venues get booked fast.\n\nStep by step: Contact your local bookstore, literary café, or cultural center. Set the date (ideally the same weekend as your digital launch) and agree on space details.'
        }
      },
      {
        id: 'w8-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Crear sistema de seguimiento ARC',
          en: '[Everyone] Create ARC tracking system'
        },
        description: {
          es: 'Por qué: Sin un sistema organizado, perderás el control de quién tiene el manuscrito, quién ya leyó y quién aún no ha dejado su reseña.\n\nPaso a paso: Crea una hoja de cálculo (Google Sheets o Notion) con columnas: Nombre, Email, Fecha de envío, ¿Recibió el libro?, ¿Ya leyó?, ¿Dejó reseña?, Enlace a reseña. Personaliza la comunicación para fomentar el compromiso individual.',
          en: 'Why: Without an organized system, you\'ll lose track of who has the manuscript, who has read it, and who hasn\'t left their review yet.\n\nStep by step: Create a spreadsheet (Google Sheets or Notion) with columns: Name, Email, Send date, Received book?, Already read?, Left review?, Review link. Personalize communication to foster individual commitment.'
        }
      }
    ]
  },
  {
    weekId: 7,
    isFree: false,
    title: { es: '⏳ Semana 7: El golpe visual', en: '⏳ Week 7: The Visual Strike' },
    subtitle: {
      es: 'Esta es la semana de hacer ruido. Revelamos el rostro de tu historia al mundo.',
      en: 'This is the week to make noise. We reveal the face of your story to the world.'
    },
    tasks: [
      {
        id: 'w7-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] ¡Cover Reveal Day!', en: '[Everyone] Cover Reveal Day!' },
        description: {
          es: 'Por qué: Es el primer gran hito de marketing.\n\nPaso a paso: Sube un post o Reel revelando la portada completa. Pídele a tus amigos, a tu equipo ARC y a otros autores que lo compartan en sus historias exactamente el mismo día para inundar las redes.',
          en: 'Why: It\'s the first big marketing milestone.\n\nStep by step: Post a Reel revealing the full cover. Ask your friends, ARC team, and other authors to share it on their stories on the exact same day to flood social media.'
        }
      },
      {
        id: 'w7-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Activar la preventa (Pre-order)', en: '[Everyone] Activate preorder' },
        description: {
          es: 'Por qué: Empiezas a acumular ventas y le dices a Amazon que tu libro existe.\n\nPaso a paso: Entra a KDP, configura la fecha de lanzamiento y activa la preventa (Amazon te permite hacerlo hasta con un año de anticipación). Copia el enlace de compra y ponlo en tu biografía de redes sociales. ¡Ahora sí puedes enlazar el libro a tu Amazon Author Central!',
          en: 'Why: You start accumulating sales and tell Amazon your book exists.\n\nStep by step: Go to KDP, set the launch date and activate the preorder (Amazon allows you to do this up to a year in advance). Copy the purchase link and put it in your social media bio. Now you can link the book to your Amazon Author Central!'
        }
      },
      {
        id: 'w7-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Enviar manuscrito al Equipo ARC', en: '[Everyone] Send manuscript to ARC Team' },
        description: {
          es: 'Por qué: Tienen que tener tiempo suficiente para leerlo (de 4 a 6 semanas).\n\nPaso a paso: No envíes archivos sueltos por correo (se pueden piratear fácilmente). Utiliza plataformas seguras especializadas en envíos de copias avanzadas como BookFunnel o StoryOrigin. Estas herramientas generan un enlace seguro que permite a tus lectores enviar el libro directamente a su aplicación de Kindle o e-reader con un solo clic. Pega este enlace en un correo masivo y recuérdales sutilmente la fecha en la que deben publicar la reseña.',
          en: 'Why: They need enough time to read it (4 to 6 weeks).\n\nStep by step: Don\'t send loose files by email (they can be easily pirated). Use specialized secure platforms like BookFunnel or StoryOrigin. These tools generate a secure link that allows your readers to send the book directly to their Kindle or e-reader app with a single click. Paste this link in a mass email and subtly remind them of the review date.'
        }
      },
      {
        id: 'w7-t4',
        formats: ['Físico', 'Ambos'],
        title: { es: '[Solo Físico] Armar las "PR Boxes"', en: '[Physical Only] Assemble PR Boxes' },
        description: {
          es: 'Por qué: Las cajas de relaciones públicas generan videos de "Unboxing" muy virales.\n\nPaso a paso: Compra cajas bonitas. Mete una copia física de prueba de tu libro, el Swag que imprimiste (marcapáginas), y algún detalle temático (ej. una bolsita de té si tu personaje ama el té, o un labial rojo). Cierra todo con cuidado.',
          en: 'Why: PR boxes generate very viral "Unboxing" videos.\n\nStep by step: Buy nice boxes. Put a physical proof copy of your book, the swag you printed (bookmarks), and a themed detail (e.g., a tea bag if your character loves tea, or a red lipstick). Close everything carefully.'
        }
      }
    ]
  },
  {
    weekId: 6,
    isFree: false,
    title: { es: '⏳ Semana 6: Los protagonistas y la logística física', en: '⏳ Week 6: The Protagonists & Physical Logistics' },
    subtitle: {
      es: 'Hacemos que los lectores se enamoren de los personajes mientras aseguramos el inventario físico.',
      en: 'We make readers fall in love with the characters while securing physical inventory.'
    },
    tasks: [
      {
        id: 'w6-t0',
        formats: ['Físico', 'Ambos'],
        title: { es: '[Solo Físico] ¡ALERTA! Pedir Copias de Autor (Author Copies)', en: '[Physical Only] ALERT! Order Author Copies' },
        description: {
          es: 'Por qué: Amazon tarda muchísimo en imprimir y enviar los libros a precio de autor. Si no lo haces hoy, no tendrás libros para vender el día de tu evento.\n\nPaso a paso: En tu panel de KDP, junto a tu libro, selecciona "Pedir copias para el autor". Calcula cuántas vas a vender en tu evento presencial y haz el pedido a tu dirección.',
          en: 'Why: Amazon takes a very long time to print and ship books at author price. If you don\'t do this today, you won\'t have books to sell on event day.\n\nStep by step: In your KDP panel, next to your book, select "Order author copies". Calculate how many you\'ll sell at your in-person event and place the order to your address.'
        }
      },
      {
        id: 'w6-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Publicar Fichas de Personajes', en: '[Everyone] Publish Character Profiles' },
        description: {
          es: 'Por qué: A los lectores les encanta saber a quién van a leer (especialmente al interés amoroso).\n\nPaso a paso: Usa plantillas (como las de Bookish Alchemy) para subir el nombre, el rol, una frase icónica y sus "banderas rojas" o virtudes.',
          en: 'Why: Readers love knowing who they\'re going to read (especially the love interest).\n\nStep by step: Use templates (like Bookish Alchemy\'s) to upload their name, role, an iconic quote, and their "red flags" or virtues.'
        }
      },
      {
        id: 'w6-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Subir arte hiperrealista de los personajes', en: '[Everyone] Upload hyper-realistic character art' },
        description: {
          es: 'Por qué: Ponerles un rostro espectacular detiene el scroll en Instagram y TikTok.\n\nPaso a paso: Publica ilustraciones de alta calidad de tus protagonistas. (Si no tienes arte propio, en Bookish Alchemy AI Studio creamos retratos hiperrealistas de tus personajes para que domines en redes).',
          en: 'Why: Putting a spectacular face on them stops the scroll on Instagram and TikTok.\n\nStep by step: Post high-quality illustrations of your protagonists. (If you don\'t have your own art, at Bookish Alchemy AI Studio we create hyper-realistic portraits of your characters so you dominate on social media).'
        }
      },
      {
        id: 'w6-t3',
        formats: ['Físico', 'Ambos'],
        title: { es: '[Solo Físico] Enviar las PR Boxes por correo postal', en: '[Physical Only] Send PR Boxes by postal mail' },
        description: {
          es: 'Por qué: El correo puede retrasarse.\n\nPaso a paso: Ve a la oficina de correos y envía las cajas a los creadores de contenido clave (Bookstagrammers/Booktokers) con los que hayas contactado previamente.',
          en: 'Why: Mail can be delayed.\n\nStep by step: Go to the post office and send the boxes to key content creators (Bookstagrammers/Booktokers) you\'ve previously contacted.'
        }
      },
      {
        id: 'w6-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Contactar influencers con técnica "pila de elogios"',
          en: '[Everyone] Contact influencers with "praise stack" technique'
        },
        description: {
          es: 'Por qué: Los influencers literarios (BookTok, Bookstagram) son el canal de descubrimiento #1 para los lectores jóvenes.\n\nPaso a paso: Identifica 10-15 creadores de contenido de tu nicho. Escríbeles un DM aplicando la "pila de elogios": 1) Elogia algo específico de su contenido. 2) Explica por qué tu libro encaja con su audiencia. 3) Ofrece una colaboración creativa (no solo "¿puedes reseñar mi libro?"). Ejemplo: "Me encantó tu video sobre tropos de enemies-to-lovers. Mi novela tiene exactamente eso + un giro que nadie espera. ¿Te gustaría leerla antes que nadie?"',
          en: 'Why: Literary influencers (BookTok, Bookstagram) are the #1 discovery channel for young readers.\n\nStep by step: Identify 10-15 content creators in your niche. Send them a DM applying the "praise stack": 1) Praise something specific about their content. 2) Explain why your book fits their audience. 3) Offer a creative collaboration (not just "can you review my book?"). Example: "I loved your video about enemies-to-lovers tropes. My novel has exactly that + a twist nobody expects. Would you like to read it before anyone else?"'
        }
      }
    ]
  },
  {
    weekId: 5,
    isFree: false,
    title: { es: '⏳ Semana 5: Inmersión', en: '⏳ Week 5: Immersion' },
    subtitle: {
      es: 'Mantenemos el ritmo de la campaña interactuando con otros sentidos de la audiencia.',
      en: 'We keep the campaign rhythm going by engaging other senses of the audience.'
    },
    tasks: [
      {
        id: 'w5-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Crear y compartir la Playlist oficial', en: '[Everyone] Create and share the official Playlist' },
        description: {
          es: 'Por qué: La música conecta emocionalmente con los lectores y da pistas de la trama.\n\nPaso a paso: Abre Spotify, crea una lista pública con canciones que escuchaste al escribir o que encajen con la vibra. Hazle una portada bonita y comparte el enlace en tus redes y en tu boletín de correo.',
          en: 'Why: Music emotionally connects with readers and gives plot hints.\n\nStep by step: Open Spotify, create a public playlist with songs you listened to while writing or that fit the vibe. Make a nice cover for it and share the link on your social media and newsletter.'
        }
      },
      {
        id: 'w5-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Correo de seguimiento al Equipo ARC', en: '[Everyone] Follow-up email to ARC Team' },
        description: {
          es: 'Por qué: Hay que mantenerlos motivados sin presionarlos.\n\nPaso a paso: Envía un correo breve: "¡Hola equipo! Pasaba a saludar. Espero que estén disfrutando la lectura. Si ya tienen frases favoritas, no duden en compartirlas en sus redes y etiquetarme. Faltan 5 semanas para el lanzamiento".',
          en: 'Why: You need to keep them motivated without pressuring them.\n\nStep by step: Send a brief email: "Hi team! Just checking in. Hope you\'re enjoying the read. If you already have favorite quotes, don\'t hesitate to share them on your social media and tag me. 5 weeks until launch!".'
        }
      },
      {
        id: 'w5-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Anunciar un incentivo de preventa', en: '[Everyone] Announce a preorder incentive' },
        description: {
          es: 'Por qué: Necesitas empujar a los indecisos a comprar hoy y no esperar al lanzamiento.\n\nPaso a paso: Anuncia en redes: "Si reservas el libro hoy y me envías una captura de pantalla, te enviaré [un capítulo extra / una precuela digital / un arte exclusivo] por correo inmediatamente".',
          en: 'Why: You need to push the undecided to buy today and not wait for launch.\n\nStep by step: Announce on social media: "If you preorder the book today and send me a screenshot, I\'ll send you [an extra chapter / a digital prequel / exclusive art] by email immediately".'
        }
      }
    ]
  },
  {
    weekId: 4,
    isFree: false,
    title: { es: '⏳ Semana 4: Subiendo el volumen', en: '⏳ Week 4: Turning Up the Volume' },
    subtitle: {
      es: 'Entramos al último mes. La intensidad visual aumenta.',
      en: 'We enter the last month. Visual intensity increases.'
    },
    tasks: [
      {
        id: 'w4-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Lanzar el Book Trailer', en: '[Everyone] Launch the Book Trailer' },
        description: {
          es: 'Por qué: Un buen video dramático se puede volver viral fácilmente.\n\nPaso a paso: Sube un video en formato vertical (TikTok/Reels) editado con cortes rápidos, música de alta tensión y frases potentes del libro. Llama a la acción al final: "Resérvalo ya en el link de mi bio".',
          en: 'Why: A good dramatic video can easily go viral.\n\nStep by step: Upload a vertical video (TikTok/Reels) edited with quick cuts, high-tension music, and powerful quotes from the book. Call to action at the end: "Reserve it now in the link in my bio".'
        }
      },
      {
        id: 'w4-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Instrucciones finales al Equipo ARC', en: '[Everyone] Final instructions to ARC Team' },
        description: {
          es: 'Por qué: Hay que facilitarles el trabajo para que no se olviden de reseñar.\n\nPaso a paso: Envíales un correo con los enlaces directos a la página de Goodreads de tu libro y recuérdales que Amazon solo permite dejar reseñas a partir del día oficial de publicación (Semana 1).',
          en: 'Why: You need to make it easy for them so they don\'t forget to review.\n\nStep by step: Send them an email with direct links to your book\'s Goodreads page and remind them that Amazon only allows reviews starting on the official publication day (Week 1).'
        }
      },
      {
        id: 'w4-t3',
        formats: ['Físico', 'Ambos'],
        title: { es: '[Solo Físico] Publicar el afiche oficial de invitación al evento', en: '[Physical Only] Publish official event invitation poster' },
        description: {
          es: 'Por qué: Tu comunidad local necesita tiempo para agendar la fecha.\n\nPaso a paso: Diseña una invitación digital clara con Fecha, Hora, Lugar, y qué esperar (lectura, firma de libros, brindis). Publícala en tus redes y envíala por WhatsApp a tus allegados.',
          en: 'Why: Your local community needs time to schedule the date.\n\nStep by step: Design a clear digital invitation with Date, Time, Location, and what to expect (reading, book signing, toast). Post it on your social media and send it via WhatsApp to your close ones.'
        }
      },
      {
        id: 'w4-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: {
          es: '[Todos] Probar Amazon Ads con bajo presupuesto',
          en: '[Everyone] Test Amazon Ads with low budget'
        },
        description: {
          es: 'Por qué: Ejecutar campañas de prueba ANTES del lanzamiento te permite descubrir qué palabras clave generan más clics y afinar la descripción de tu libro basándote en datos reales.\n\nPaso a paso: Configura tu cuenta de Amazon Advertising. Crea 2-3 campañas Sponsored Products con presupuesto diario de $2-5 USD. Usa targeting automático primero para descubrir keywords. Deja correr 5-7 días y analiza: ¿Qué palabras clave generan clics? ¿Cuál es tu ACOS (costo de publicidad sobre ventas)?',
          en: 'Why: Running test campaigns BEFORE launch lets you discover which keywords generate more clicks and refine your book description based on real data.\n\nStep by step: Set up your Amazon Advertising account. Create 2-3 Sponsored Products campaigns with $2-5 USD daily budget. Use automatic targeting first to discover keywords. Let it run 5-7 days and analyze: Which keywords generate clicks? What\'s your ACOS (advertising cost of sales)?'
        }
      }
    ]
  },
  {
    weekId: 3,
    isFree: false,
    title: { es: '⏳ Semana 3: La prueba social', en: '⏳ Week 3: Social Proof' },
    subtitle: {
      es: 'Es el momento de demostrar que tu libro es bueno porque otras personas ya lo están diciendo.',
      en: 'It\'s time to prove your book is good because other people are already saying it.'
    },
    tasks: [
      {
        id: 'w3-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Publicar los primeros "Blurbs"', en: '[Everyone] Publish the first Blurbs' },
        description: {
          es: 'Por qué: La prueba social vende más que cualquier anuncio.\n\nPaso a paso: Pídele permiso a tus lectores ARC para usar sus reacciones. Diseña imágenes en Canva que destaquen frases como: "No pude soltarlo en toda la noche - @LectorActivo". Súbelas a todas tus plataformas.',
          en: 'Why: Social proof sells more than any ad.\n\nStep by step: Ask your ARC readers for permission to use their reactions. Design images in Canva featuring quotes like: "I couldn\'t put it down all night - @ActiveReader". Upload them to all your platforms.'
        }
      },
      {
        id: 'w3-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Francotirador de Categorías KDP', en: '[Everyone] KDP Category Sniper' },
        description: {
          es: 'Por qué: Competir en "Romance General" es imposible. Competir en "Fantasía Urbana Oscura para Jóvenes" te puede dar la etiqueta de Bestseller.\n\nPaso a paso: Amazon KDP te permite seleccionar exactamente 3 categorías. Investiga en la tienda cuáles nichos específicos encajan con tu libro y tienen menor competencia. Configúralas en tu panel de detalles del libro.',
          en: 'Why: Competing in "General Romance" is impossible. Competing in "Dark Urban Fantasy for Young Adults" can give you the Bestseller tag.\n\nStep by step: Amazon KDP lets you select exactly 3 categories. Research which specific niches fit your book and have less competition in the store. Set them up in your book details panel.'
        }
      },
      {
        id: 'w3-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Agendar colaboraciones', en: '[Everyone] Schedule collaborations' },
        description: {
          es: 'Por qué: Hay que robar un poco de audiencia de otros lugares afines.\n\nPaso a paso: Cierra entrevistas para esa semana o la próxima en podcasts literarios, haz directos (Lives) en Instagram con otros autores, o escribe artículos invitados en blogs.',
          en: 'Why: You need to steal a bit of audience from similar places.\n\nStep by step: Close interviews for this week or next on literary podcasts, do Instagram Lives with other authors, or write guest articles on blogs.'
        }
      }
    ]
  },
  {
    weekId: 2,
    isFree: false,
    title: { es: '⏳ Semana 2: El ensayo general', en: '⏳ Week 2: Dress Rehearsal' },
    subtitle: {
      es: 'Cerramos las tareas técnicas para que la semana que viene solo te dediques a celebrar y vender.',
      en: 'We close technical tasks so next week you only focus on celebrating and selling.'
    },
    tasks: [
      {
        id: 'w2-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Subir el archivo final a KDP y añadir el "Contenido A+"', en: '[Everyone] Upload final file to KDP and add "A+ Content"' },
        description: {
          es: 'Por qué: El archivo debe estar perfecto y el contenido A+ tarda días en ser aprobado por Amazon.\n\nPaso a paso: Sube la versión definitiva y corregida de tu manuscrito. Luego, ve a "Marketing" en KDP, selecciona "Contenido A+" y sube los banners que creaste (El trío de detalles, el póster de personajes, etc.) para que tu página de ventas luzca profesional.',
          en: 'Why: The file must be perfect and A+ content takes days to be approved by Amazon.\n\nStep by step: Upload the final, corrected version of your manuscript. Then, go to "Marketing" in KDP, select "A+ Content" and upload the banners you created (the detail trio, character poster, etc.) so your sales page looks professional.'
        },
        upsell: {
          id: 'aplus-templates',
          type: 'resource',
          title: { es: 'Plantillas A+ Imán de Ventas', en: 'A+ Sales Magnet Templates' },
          text: { es: 'Plantillas de Canva listas para usar. Crea tu Contenido A+ en minutos y mejora la conversión de tu página de Amazon.', en: 'Ready-to-use Canva templates. Create your A+ Content in minutes.' },
          price: 'Incluido en Premium',
          link: 'https://drive.google.com/drive/folders/1nBA34T9U0McOGDnJfWyS-jgYUZgg53Aq?usp=drive_link'
        }
      },
      {
        id: 'w2-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Programar contenido en redes sociales', en: '[Everyone] Schedule social media content' },
        description: {
          es: 'Por qué: La semana de lanzamiento estarás demasiado abrumado respondiendo mensajes como para pensar en qué publicar.\n\nPaso a paso: Usa herramientas de programación (o los borradores de Instagram/TikTok) para dejar listos los videos y posts de los próximos 7 días.',
          en: 'Why: Launch week you\'ll be too overwhelmed answering messages to think about what to post.\n\nStep by step: Use scheduling tools (or Instagram/TikTok drafts) to have the videos and posts for the next 7 days ready to go.'
        }
      },
      {
        id: 'w2-t3',
        formats: ['Físico', 'Ambos'],
        title: { es: '[Solo Físico] Preparar kit de firmas', en: '[Physical Only] Prepare signing kit' },
        description: {
          es: 'Por qué: Para el evento presencial no te puede faltar nada operativo.\n\nPaso a paso: Empaca en un bolso: bolígrafos permanentes (Sharpies que no manchen), post-its (para preguntar el nombre a quien le firmas), una terminal de pago (si cobras con tarjeta), cambio en efectivo y botellas de agua.',
          en: 'Why: For the in-person event you can\'t be missing any operational items.\n\nStep by step: Pack in a bag: permanent markers (Sharpies that don\'t smudge), post-its (to ask the name of who you\'re signing for), a payment terminal (if you charge by card), cash change, and water bottles.'
        }
      },
      {
        id: 'w2-t4',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Ejecutar Lanzamiento Suave (Soft Launch)', en: '[Everyone] Execute Soft Launch' },
        description: {
          es: 'Por qué: Un lanzamiento suave te permite detectar errores antes de que miles de personas los vean.\n\nPaso a paso: Publica tu libro de manera discreta (sin hacer promoción masiva todavía). Verifica que: la portada se ve bien en todos los dispositivos, los enlaces de compra funcionan, la descripción no tiene errores, y el "Look Inside" de Amazon muestra las páginas correctas.',
          en: 'Why: A soft launch lets you detect errors before thousands of people see them.\n\nStep by step: Publish your book quietly (without massive promotion yet). Verify that: the cover looks good on all devices, purchase links work, the description has no errors, and Amazon\'s "Look Inside" shows the correct pages.'
        }
      },
      {
        id: 'w2-t5',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Limpiar dudas del lector en descripción Amazon', en: '[Everyone] Clear reader doubts in Amazon description' },
        description: {
          es: 'Por qué: Cada duda sin resolver es una barrera de compra.\n\nPaso a paso: Actualiza la descripción de tu libro para resolver objeciones comunes: "¿Es para principiantes?", "¿Es parte de una saga?", "¿Tiene contenido fuerte?". Agrega una sección de "Para quién es este libro" y "Para quién NO es". Esto alimenta también a la IA de Amazon (Rufus) con palabras clave adicionales.',
          en: 'Why: Every unresolved doubt is a purchase barrier.\n\nStep by step: Update your book description to resolve common objections: "Is it for beginners?", "Is it part of a series?", "Does it have strong content?". Add a "Who this book is for" and "Who it\'s NOT for" section. This also feeds Amazon\'s AI (Rufus) with additional keywords.'
        }
      },
      {
        id: 'w2-t6',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Coordinar Street Team para contenido de lanzamiento', en: '[Everyone] Coordinate Street Team for launch content' },
        description: {
          es: 'Por qué: Tus promotores más activos necesitan tener el contenido listo ANTES del día del lanzamiento.\n\nPaso a paso: Confirma con tus promotores que tienen listo: 1) Su reseña escrita (aunque aún no la publiquen). 2) Al menos 2-3 posts/stories/reels para compartir durante la semana de lanzamiento. 3) Los enlaces correctos de compra. Envíales un "kit de lanzamiento" con imágenes, quotes del libro y hashtags sugeridos.',
          en: 'Why: Your most active promoters need to have their content ready BEFORE launch day.\n\nStep by step: Confirm with your promoters that they have ready: 1) Their written review (even if they don\'t publish it yet). 2) At least 2-3 posts/stories/reels to share during launch week. 3) The correct purchase links. Send them a "launch kit" with images, book quotes, and suggested hashtags.'
        }
      }
    ]
  },
  {
    weekId: 1,
    isFree: false,
    title: { es: '⏳ Semana 1: La locura del lanzamiento', en: '⏳ Week 1: Launch Madness' },
    subtitle: {
      es: 'Se acabó la espera. Es momento de gritarlo a los cuatro vientos.',
      en: 'The wait is over. It\'s time to shout it from the rooftops.'
    },
    tasks: [
      {
        id: 'w1-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] ¡Release Day! Correo masivo a la lista', en: '[Everyone] Release Day! Mass email to the list' },
        description: {
          es: 'Por qué: Es el empujón inicial más fuerte para el algoritmo de Amazon.\n\nPaso a paso: A primera hora de la mañana, envía un correo a toda tu lista (la que construiste desde la Semana 10) celebrando que el libro ya nació. Incluye un botón enorme y claro con el enlace directo para comprar en Amazon.',
          en: 'Why: It\'s the strongest initial push for the Amazon algorithm.\n\nStep by step: First thing in the morning, send an email to your entire list (the one you built from Week 10) celebrating that the book is born. Include a huge, clear button with the direct Amazon purchase link.'
        }
      },
      {
        id: 'w1-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Estrategia de anuncios y visibilidad', en: '[Everyone] Ads and visibility strategy' },
        description: {
          es: 'Por qué: Mantener la inercia de ventas después del primer día.\n\nPaso a paso: Si tienes presupuesto, enciende campañas de Amazon Ads orientadas a libros de autores similares al tuyo. Contrata promociones de pago en boletines literarios reconocidos (promo stacking) escalonados durante la semana.',
          en: 'Why: Maintain sales momentum after the first day.\n\nStep by step: If you have a budget, turn on Amazon Ads campaigns targeting books by similar authors. Hire paid promotions in recognized literary newsletters (promo stacking) staggered throughout the week.'
        }
      },
      {
        id: 'w1-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Recordatorio final al Equipo ARC', en: '[Everyone] Final reminder to ARC Team' },
        description: {
          es: 'Por qué: Necesitas que suban las reseñas HOY.\n\nPaso a paso: Envía un correo: "¡El libro está vivo! Por favor, ve ahora mismo a este enlace de Amazon y copia la reseña que ya tenías escrita. ¡Gracias infinitas!"',
          en: 'Why: You need them to upload the reviews TODAY.\n\nStep by step: Send an email: "The book is alive! Please go right now to this Amazon link and paste the review you already had written. Infinite thanks!"'
        }
      },
      {
        id: 'w1-t4',
        formats: ['Físico', 'Ambos'],
        title: { es: '[Solo Físico] Evento presencial de presentación', en: '[Physical Only] In-person launch event' },
        description: {
          es: 'Por qué: Celebrar con tu comunidad física.\n\nPaso a paso: ¡Disfruta tu momento! Pero antes de empezar, delégale tu celular a un amigo o familiar con una misión estricta: tomar fotos y grabar clips cortos de ti firmando libros y hablando. Ese material te servirá como contenido para redes durante meses.',
          en: 'Why: Celebrate with your physical community.\n\nStep by step: Enjoy your moment! But before starting, delegate your phone to a friend or family member with a strict mission: take photos and record short clips of you signing books and speaking. That material will serve as social media content for months.'
        }
      }
    ]
  },
  {
    weekId: 0,
    isFree: false,
    title: { es: '🚀 Semana 0: Después del lanzamiento', en: '🚀 Week 0: Post-Launch' },
    subtitle: {
      es: 'El lanzamiento no termina el Día 1. Aquí es donde separas un libro olvidado de un bestseller sostenido.',
      en: 'The launch doesn\'t end on Day 1. This is where you separate a forgotten book from a sustained bestseller.'
    },
    tasks: [
      {
        id: 'w0-t1',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Analizar métricas de la primera semana', en: '[Everyone] Analyze first week metrics' },
        description: {
          es: 'Por qué: Los datos de la primera semana te dicen exactamente qué funcionó y qué no.\n\nPaso a paso: Revisa: 1) Ventas totales y ranking por día. 2) Número de reseñas recibidas vs. esperadas. 3) Rendimiento de Amazon Ads (ACOS, clics, impresiones). 4) Tasa de apertura y clics de tus emails. 5) Métricas de redes sociales (alcance, engagement, seguidores nuevos). Crea un documento con estos datos — los necesitarás para tu próximo libro.',
          en: 'Why: First week data tells you exactly what worked and what didn\'t.\n\nStep by step: Review: 1) Total sales and ranking per day. 2) Number of reviews received vs. expected. 3) Amazon Ads performance (ACOS, clicks, impressions). 4) Email open and click rates. 5) Social media metrics (reach, engagement, new followers). Create a document with this data — you\'ll need it for your next book.'
        }
      },
      {
        id: 'w0-t2',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Optimizar campañas de Amazon Ads', en: '[Everyone] Optimize Amazon Ads campaigns' },
        description: {
          es: 'Por qué: Después de 7+ días, tienes datos suficientes para matar lo que no funciona y escalar lo que sí.\n\nPaso a paso: Revisa tus campañas de Sponsored Products. Pausa keywords con más de 10 clics y 0 ventas. Aumenta el presupuesto en keywords con buen ACOS (<40%). Crea nuevas campañas manuales con las keywords ganadoras del targeting automático.',
          en: 'Why: After 7+ days, you have enough data to kill what doesn\'t work and scale what does.\n\nStep by step: Review your Sponsored Products campaigns. Pause keywords with more than 10 clicks and 0 sales. Increase budget on keywords with good ACOS (<40%). Create new manual campaigns with winning keywords from automatic targeting.'
        }
      },
      {
        id: 'w0-t3',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Enviar email de agradecimiento + pedir reseñas', en: '[Everyone] Send thank you email + request reviews' },
        description: {
          es: 'Por qué: Los compradores de la primera semana son tu mejor fuente de reseñas orgánicas.\n\nPaso a paso: Envía un correo personal a tu lista segmentando a quienes compraron. Agradece genuinamente su apoyo. Incluye un enlace directo a la página de reseñas de Amazon y un recordatorio amable: "Si el libro te gustó, una reseña de 2 frases ayuda más de lo que imaginas. Si no te gustó, escríbeme a mí directamente — quiero mejorar."',
          en: 'Why: First week buyers are your best source of organic reviews.\n\nStep by step: Send a personal email to your list segmenting those who bought. Genuinely thank them for their support. Include a direct link to the Amazon review page and a gentle reminder: "If you liked the book, a 2-sentence review helps more than you imagine. If you didn\'t like it, write to me directly — I want to improve."'
        }
      },
      {
        id: 'w0-t4',
        formats: ['Digital', 'Físico', 'Ambos'],
        title: { es: '[Todos] Planificar estrategia de sostenimiento a 90 días', en: '[Everyone] Plan 90-day sustainability strategy' },
        description: {
          es: 'Por qué: El 90% de los autores abandonan el marketing después de la primera semana. Los que persisten son los que construyen carreras.\n\nPaso a paso: Crea un plan de 90 días con: 1) Frecuencia de publicación en redes (mínimo 3x/semana). 2) Calendario de emails a tu lista (mínimo 2x/mes). 3) Presupuesto mensual de Amazon Ads. 4) Lista de sitios de promoción para rotación mensual (Bargain Booksy, BookBub, ENT). 5) Fecha tentativa para tu próximo libro o novella.',
          en: 'Why: 90% of authors abandon marketing after the first week. Those who persist are the ones who build careers.\n\nStep by step: Create a 90-day plan with: 1) Social media posting frequency (minimum 3x/week). 2) Email calendar to your list (minimum 2x/month). 3) Monthly Amazon Ads budget. 4) List of promo sites for monthly rotation (Bargain Booksy, BookBub, ENT). 5) Tentative date for your next book or novella.'
        }
      }
    ]
  }
];
