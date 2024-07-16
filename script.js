document.addEventListener('DOMContentLoaded', function() {
  // Scroll suave ao clicar nos links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});
  // Mudança de cor de fundo e texto ao rolar a página
  gsap.registerPlugin(ScrollTrigger);

  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

  scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

      ScrollTrigger.create({
          trigger: colorSection,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () =>
              gsap.to("body", {
                  backgroundColor: colorSection.dataset.bgcolor,
                  color: colorSection.dataset.textcolor,
                  overwrite: "auto"
              }),
          onLeaveBack: () =>
              gsap.to("body", {
                  backgroundColor: prevBg,
                  color: prevText,
                  overwrite: "auto"
              })
      });
  });

  // Animação do nome
  const nameLink = document.getElementById('nameLink');
  const fullName = 'LHERME';
  let currentIndex = 0;
  let intervalId;

  nameLink.addEventListener('mouseenter', () => {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
          if (currentIndex < fullName.length) {
              nameLink.textContent += fullName[currentIndex];
              currentIndex++;
          } else {
              clearInterval(intervalId);
          }
      }, 100);
  });

  nameLink.addEventListener('mouseleave', () => {
      nameLink.textContent = 'GUI';
      currentIndex = 0;
      clearInterval(intervalId);
  });

  // Cursor personalizado
  const cursor = document.querySelector('.cursor');
  const links = document.querySelectorAll('a');

  document.body.addEventListener('mousemove', onMouseMove);

  links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
  });

  function onMouseMove(e) {
      const rect = cursor.getBoundingClientRect();
      const cursorX = e.clientX - rect.width / 2;
      const cursorY = e.clientY - rect.height / 2;

      if (e.target.closest('section')) {
          cursor.style.display = 'block';
          cursor.style.top = cursorY + 'px';
          cursor.style.left = cursorX + 'px';
      } else {
          cursor.style.display = 'none';
      }
  }

  function onMouseEnterLink() {
      cursor.classList.add('hovered');
  }

  function onMouseLeaveLink() {
      cursor.classList.remove('hovered');
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    const projects = [
        {
            title: "166studio",
            description: "Criei um site inovador para um estúdio composto por um animador e um ilustrador, inspirado na arquitetura portuguesa. O design do site simula um prédio, destacando-se pelo uso de azulejos típicos de Portugal, que conferem um toque autêntico e cultural. A interface é intuitiva e visualmente atraente, proporcionando uma navegação agradável enquanto reflete a criatividade e o talento dos artistas do estúdio.",
            image: "./imagens/Screenshot 2024-07-03 at 13.41.51.png"
        },
        {
            title: "Trip Planner",
            description: "Desenvolvi uma aplicação inovadora que utiliza Inteligência Artificial para ajudar os usuários a planejar suas viagens. Após responder a algumas perguntas simples, a IA cria um itinerário personalizado, sugerindo locais de interesse de acordo com as preferências e necessidades do usuário. Esta aplicação é ideal para quem deseja uma experiência de viagem personalizada sem o esforço de planejar todos os detalhes.",
            image: "./imagens/81678.jpg"
        },
        {
            title: "Rapsody Roullette",
            description: "Desenvolvi um site voltado para pessoas que procuram descobrir novas músicas de acordo com o gênero e o estado de espírito. Com uma interface amigável e intuitiva, o site permite que os usuários selecionem seu gênero musical preferido e seu mood atual, gerando uma playlist aleatória que se adapta ao momento. Ideal para quem não sabe o que ouvir e está em busca de novas experiências musicais.            ",
            image: "./imagens/musicrandom.jpg"
        }
    ];

    document.querySelectorAll('.project-link').forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const project = projects[index];
            document.getElementById('popup-title').innerText = project.title;
            document.getElementById('popup-description').innerText = project.description;
            document.getElementById('popup-image').src = project.image;
            document.getElementById('popup').classList.add('visible');
        });
    });

    document.getElementById('close-popup').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('popup').classList.remove('visible');
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            document.getElementById('popup').classList.remove('visible');
        }
    });
});
