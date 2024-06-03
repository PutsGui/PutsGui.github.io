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
  
    // Efeito de imagem no projeto
    const images = document.querySelectorAll('.image-list img');
    const titles = document.querySelectorAll('.title-list h3');
  
    titles.forEach((title, index) => {
      title.addEventListener('mouseenter', () => {
        images.forEach(img => img.style.opacity = 0);
  
        const dataIndex = parseInt(title.getAttribute('data-index'));
  
        images[dataIndex].style.opacity = 1;
      });
  
      title.addEventListener('mouseleave', () => {
        images.forEach(img => img.style.opacity = 0);
      });
    });
  });
  