export const roadmapContent = [
  {
    weekId: 10, isFree: true,
    title: { es: 'Semana 10: Los cimientos', en: 'Week 10: The Foundations' },
    tasks: [
      { id: 'w10-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Definir la psicografía del lector', en: 'Define reader psychographics' }, description: { es: 'No te limites a pensar en la edad o el género de tu público. Define qué miedos, deseos o problemas profundos resuelve tu historia. ¿Tu lector busca escapar de la rutina, sentir adrenalina o necesita sanar emociones? Entender esto te permitirá hablarle directamente a su cerebro emocional en toda tu publicidad, logrando que conecten de inmediato con tu mensaje.', en: 'Do not limit yourself to thinking about the age or gender of your audience. Define what deep fears, desires, or problems your story solves. Does your reader want to escape routine, feel adrenaline, or heal emotions? Understanding this will allow you to speak directly to their emotional brain in all your advertising.' }, upsell: { id: 'prompt-gemini', type: 'tool', title: { es: '¿Necesitas ayuda con esto?', en: 'Need help with this?' }, text: { es: 'Desbloquea nuestro Prompter Editorial (Bot Gemini Personalizado) para generar tu psicografía y tropos automáticamente.', en: 'Unlock our Editorial Prompter (Custom Gemini Bot) to generate your psychographics and tropes automatically.' }, price: 'Incluido en Premium', link: 'https://gemini.google.com' } },
      { id: 'w10-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Montar la base de operaciones (Landing Page)', en: 'Set up your home base (Landing Page)' }, description: { es: 'Tu lista de correos es el único activo digital que realmente te pertenece, a diferencia de los seguidores en redes sociales. Crea una página de aterrizaje sencilla y ofrece un "imán" irresistible a cambio de su email.', en: 'Your email list is the only digital asset that truly belongs to you. Create a simple landing page and offer an irresistible lead magnet in exchange for their email.' } },
      { id: 'w10-t3', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Definir de 3 a 5 tropos principales', en: 'Define 3 to 5 main tropes' }, description: { es: 'Los tropos son los pilares reconocibles que los lectores aman y buscan activamente. Selecciona los más fuertes de tu libro y úsalos como la base de todo tu contenido visual.', en: 'Tropes are the recognizable pillars that readers love and actively seek out. Select the strongest ones from your book and use them as the basis for all your visual content.' } },
      { id: 'w10-t4', formats: ['Físico', 'Ambos'], title: { es: 'Pedir la copia de prueba (Proof Copy)', en: 'Order the Proof Copy' }, description: { es: '(Solo Físico) El mundo digital lo aguanta todo, pero la imprenta no. Pide una copia de prueba física a través de tu plataforma para revisar con el libro en las manos.', en: '(Physical Only) The digital world can handle anything, but printing cannot. Order a physical proof copy through your platform to review with the book in your hands.' } }
    ]
  },
  {
    weekId: 9, isFree: true,
    title: { es: 'Semana 9: Armando el escuadrón', en: 'Week 9: Assembling the Squad' },
    tasks: [
      { id: 'w9-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Lanzar convocatoria para el Equipo ARC', en: 'Launch call for ARC Team' }, description: { es: 'Un libro sin reseñas tempranas es invisible para los algoritmos de venta. Crea un formulario sencillo y compártelo para buscar lectores beta.', en: 'A book without early reviews is invisible to sales algorithms. Create a simple form and share it to find advance readers.' } },
      { id: 'w9-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Publicar el primer teaser visual', en: 'Publish the first visual teaser' }, description: { es: 'Empieza a calentar motores sin revelar aún la portada oficial. Diseña un video corto o gráfico que capture la estética y la atmósfera del libro.', en: 'Start warming up without revealing the official cover yet. Design a short video or graphic that captures the aesthetics and atmosphere of the book.' }, upsell: { id: 'alchemy-studio', type: 'service', title: { es: '¿Bloqueo creativo visual?', en: 'Creative visual block?' }, text: { es: 'En Bookish Alchemy AI Studio creamos tus imágenes, teasers y portadas con IA de altísima calidad.', en: 'At Bookish Alchemy AI Studio we create your images, teasers, and covers with high-quality AI.' }, price: 'Próximamente', link: '#' } },
      { id: 'w9-t3', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Reclamar perfiles de autor', en: 'Claim author profiles' }, description: { es: 'Abre y optimiza tus perfiles oficiales en Amazon Author Central y Goodreads. Sube una fotografía profesional y una biografía atractiva.', en: 'Open and optimize your official profiles on Amazon Author Central and Goodreads. Upload a professional photo and an engaging biography.' } }
    ]
  },
  {
    weekId: 8, isFree: false,
    title: { es: 'Semana 8: El misterio vende', en: 'Week 8: Mystery Sells' },
    tasks: [
      { id: 'w8-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Seleccionar Equipo ARC y enviar bienvenida', en: 'Select ARC Team and send welcome' }, description: { es: 'Revisa las solicitudes de tu formulario y selecciona a tus lectores. Envíales un correo cálido dándoles la bienvenida al equipo.', en: 'Review the applications from your form and select your readers. Send them a warm welcome email explaining the rules.' }, upsell: { id: 'pr-templates', type: 'resource', title: { es: 'Ahorra horas redactando', en: 'Save hours writing' }, text: { es: 'Adquiere nuestro Pack de Plantillas de Email PR con guiones probados para contactar lectores.', en: 'Get our PR Email Templates Pack with proven scripts to contact readers and follow up.' }, price: 'Incluido en Premium', link: 'https://docs.google.com' } },
      { id: 'w8-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Rompecabezas de la portada', en: 'Cover puzzle' }, description: { es: 'Juega con la anticipación. En lugar de mostrar la portada completa, revela solo pequeños recortes a lo largo de la semana.', en: 'Play with anticipation. Instead of showing the full cover, reveal only small cutouts throughout the week.' } },
      { id: 'w8-t3', formats: ['Físico', 'Ambos'], title: { es: 'Diseñar y encargar el "Swag"', en: 'Design and order Swag' }, description: { es: '(Solo Físico) El material promocional físico enamora a los lectores. Diseña estos elementos y mándalos a la imprenta.', en: '(Physical Only) Physical promotional material makes readers fall in love. Design and send them to the printer.' } },
      { id: 'w8-t4', formats: ['Físico', 'Ambos'], title: { es: 'Agendar el evento presencial', en: 'Schedule the in-person event' }, description: { es: '(Solo Físico) Habla con esa librería local o cafetería y fija la fecha y hora exactas para tu presentación.', en: '(Physical Only) Talk to that local bookstore and set the exact date and time for your presentation.' } }
    ]
  },
  {
    weekId: 7, isFree: false,
    title: { es: 'Semana 7: El golpe visual', en: 'Week 7: The Visual Strike' },
    tasks: [
      { id: 'w7-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: '¡Cover Reveal Day!', en: 'Cover Reveal Day!' }, description: { es: 'El día de revelar la portada es tu primer gran evento digital. Publica la imagen completa en todas tus redes.', en: 'Cover reveal day is your first big digital event. Publish the full image on all networks.' } },
      { id: 'w7-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Activar la preventa o lista de espera', en: 'Activate preorder or waitlist' }, description: { es: 'Si publicas en plataformas que lo permiten, activa la preventa oficial.', en: 'If your platform allows it, activate the official preorder.' } },
      { id: 'w7-t3', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Enviar manuscrito al Equipo ARC', en: 'Send manuscript to ARC Team' }, description: { es: 'Entrega el archivo final a tus lectores beta utilizando plataformas seguras como BookFunnel.', en: 'Deliver the final file to your ARC readers using secure platforms like BookFunnel.' } },
      { id: 'w7-t4', formats: ['Físico', 'Ambos'], title: { es: 'Armar las "PR Boxes"', en: 'Assemble PR Boxes' }, description: { es: '(Solo Físico) Prepara cajas promocionales con el libro físico y regalitos temáticos.', en: '(Physical Only) Prepare promotional boxes with the physical book and themed gifts.' } }
    ]
  },
  {
    weekId: 6, isFree: false,
    title: { es: 'Semana 6: Los protagonistas', en: 'Week 6: The Protagonists' },
    tasks: [
      { id: 'w6-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Fichas de personajes', en: 'Character profiles' }, description: { es: 'Dedica esta semana a presentar a tus protagonistas resaltando sus características más atractivas, motivaciones o red flags.', en: 'Dedicate this week to presenting your protagonists highlighting their most attractive features.' } },
      { id: 'w6-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Arte de los personajes', en: 'Character art' }, description: { es: 'Compartir ilustraciones o imágenes hiperrealistás de tus personajes ayuda a que el lector visualice la historia.', en: 'Sharing illustrations or hyper-realistic images of your characters helps the reader visualize the story.' } },
      { id: 'w6-t3', formats: ['Físico', 'Ambos'], title: { es: 'Enviar PR Boxes por correo', en: 'Send PR Boxes by mail' }, description: { es: '(Solo Físico) Envía tus cajas promocionales esta semana para garantizar que lleguen a los creadores con tiempo.', en: '(Physical Only) Send your promotional boxes this week to guarantee they arrive with enough time.' } }
    ]
  },
  {
    weekId: 5, isFree: false,
    title: { es: 'Semana 5: Inmersión', en: 'Week 5: Immersion' },
    tasks: [
      { id: 'w5-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Compartir la Playlist oficial', en: 'Share official Playlist' }, description: { es: 'La música es un atajo directo a las emociones. Crea una lista de reproducción en Spotify con las canciones que inspiraron tu obra.', en: 'Music is a direct shortcut to emotions. Create a Spotify playlist with the songs that inspired your work.' } },
      { id: 'w5-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Seguimiento al Equipo ARC', en: 'Follow up with ARC Team' }, description: { es: 'Envía un correo breve y sin presiones preguntando cómo va la lectura y recordándoles sutilmente la fecha.', en: 'Send a brief, no-pressure email asking how the reading is going and gently reminding them of the date.' } },
      { id: 'w5-t3', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Incentivos de preventa', en: 'Preorder incentives' }, description: { es: 'Ofrece un regalo digital exclusivo a quienes te envíen un comprobante de compra anticipada.', en: 'Offer an exclusive digital gift to those who send you proof of early purchase.' } }
    ]
  },
  {
    weekId: 4, isFree: false,
    title: { es: 'Semana 4: Subiendo el volumen', en: 'Week 4: Turning up the volume' },
    tasks: [
      { id: 'w4-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Lanzar el Book Trailer', en: 'Launch the Book Trailer' }, description: { es: 'Sube la apuesta con un video dinámico en formato vertical diseñado para atrapar la atención en 3 segundos.', en: 'Raise the stakes with a dynamic vertical video designed to grab attention in 3 seconds.' } },
      { id: 'w4-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Instrucciones finales al Equipo ARC', en: 'Final instructions to ARC Team' }, description: { es: 'Envía un correo detallando los pasos para el día del lanzamiento, con los enlaces directos correspondientes.', en: 'Send an email detailing the steps for launch day, with direct links.' } },
      { id: 'w4-t3', formats: ['Físico', 'Ambos'], title: { es: 'Publicar afiche del evento', en: 'Publish event poster' }, description: { es: '(Solo Físico) Haz oficial tu presentación publicando un diseño con fecha, hora y ubicación.', en: '(Physical Only) Make your presentation official by publishing a design with date, time, and location.' } }
    ]
  },
  {
    weekId: 3, isFree: false,
    title: { es: 'Semana 3: La prueba social', en: 'Week 3: Social Proof' },
    tasks: [
      { id: 'w3-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Publicar los primeros "Blurbs"', en: 'Publish the first Blurbs' }, description: { es: 'Pide permiso a tu equipo ARC para extraer frases explosivas de sus reseñas tempranas y convértelas en gráficos.', en: 'Ask your ARC team for permission to extract explosive quotes from their early reviews to turn into graphics.' } },
      { id: 'w3-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Francotirador de categorías', en: 'Category Sniper' }, description: { es: 'Investiga y selecciona tres subcategorías muy específicas en Amazon donde tengas menos competencia.', en: 'Research and select three very specific subcategories on Amazon with less competition.' } },
      { id: 'w3-t3', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Agendar colaboraciones', en: 'Schedule collaborations' }, description: { es: 'Multiplica tu alcance cerrando entrevistas en podcasts o directos compartidos para la semana de tu lanzamiento.', en: 'Multiply your reach by scheduling podcast interviews or shared lives.' } }
    ]
  },
  {
    weekId: 2, isFree: false,
    title: { es: 'Semana 2: El ensayo general', en: 'Week 2: Dress Rehearsal' },
    tasks: [
      { id: 'w2-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Subir archivo final y Contenido A+', en: 'Upload final file & A+ Content' }, description: { es: 'Carga el manuscrito definitivo. Diseña el Contenido A+ en Amazon para embellecer y vender más.', en: 'Upload the final manuscript. Design A+ Content on Amazon to beautify and sell more.' }, upsell: { id: 'aplus-templates', type: 'resource', title: { es: 'Plantillas A+ Imán de Ventas', en: 'A+ Sales Magnet Templates' }, text: { es: 'Plantillas de Canva listas para usar. Crea tu Contenido A+ en minutos y mejora la conversión de tu página de Amazon.', en: 'Ready-to-use Canva templates. Create your A+ Content in minutes.' }, price: 'Incluido en Premium', link: 'https://canva.com' } },
      { id: 'w2-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Programar contenido (Batching)', en: 'Batch Content Scheduling' }, description: { es: 'Protege tu energía programando todos tus posts, videos y correos de los próximos 10 días.', en: 'Protect your energy by scheduling all your posts and emails for the next 10 days.' } },
      { id: 'w2-t3', formats: ['Físico', 'Ambos'], title: { es: 'Pedido de copias de autor', en: 'Order author copies' }, description: { es: '(Solo Físico) Solicita copias de autor a precio de costo para llevar a tu evento presencial.', en: '(Physical Only) Request author copies at cost price to bring to your event.' } },
      { id: 'w2-t4', formats: ['Físico', 'Ambos'], title: { es: 'Preparar kit de firmas', en: 'Prepare signing kit' }, description: { es: '(Solo Físico) Organiza bolígrafos, marcapáginas y sistema de cobro para el evento.', en: '(Physical Only) Organize pens, bookmarks, and payment system for the event.' } }
    ]
  },
  {
    weekId: 1, isFree: false,
    title: { es: 'Semana 1: La locura del lanzamiento', en: 'Week 1: Launch Madness' },
    tasks: [
      { id: 'w1-t1', formats: ['Digital', 'Físico', 'Ambos'], title: { es: '¡Release Day! (Correo directo)', en: 'Release Day! (Direct Email)' }, description: { es: 'Envía un correo claro y directo a tu lista celebrando el lanzamiento e incluyendo un botón de compra enorme.', en: 'Send a clear and direct email to your list celebrating the launch and including a huge buy button.' } },
      { id: 'w1-t2', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Estrategia de Anuncios', en: 'Ad Stacking Strategy' }, description: { es: 'Apila esfuerzos promocionales combinando anuncios moderados a lo largo de la semana para mantener ventas constantes.', en: 'Stack promotional efforts using moderate ads throughout the week to maintain constant sales.' } },
      { id: 'w1-t3', formats: ['Digital', 'Físico', 'Ambos'], title: { es: 'Avalancha de Prueba Social', en: 'Social Proof Avalanche' }, description: { es: 'Repostea todo el contenido generado por tus lectores. ¡Y no refresques la página de ventas cada 5 minutos!', en: 'Repost all content generated by your readers. And do not refresh the sales page every 5 minutes!' } },
      { id: 'w1-t4', formats: ['Físico', 'Ambos'], title: { es: 'El evento presencial', en: 'The in-person event' }, description: { es: '(Solo Físico) Disfruta el momento. Asegúrate de delegar a alguien para que tome muchas fotos y videos.', en: '(Physical Only) Enjoy the moment. Make sure to delegate someone to take lots of photos and videos.' } }
    ]
  }
];
