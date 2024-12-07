const buttonsAndSections = [
    { buttonId: 'abrirCaixa1', sectionId: 'caixa1' },
    { buttonId: 'abrirCaixa2', sectionId: 'caixa2' },
    { buttonId: 'abrirCaixa3', sectionId: 'caixa3' }
  ];
  

  function selecionarBotão(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
  
    button.addEventListener('click', () => {
      if (section.classList.contains('fecharSection')) {
        section.classList.remove('fecharSection'); 
        button.textContent = `Fechar ${section.querySelector('h3').textContent}`; 
      } else {
        section.classList.add('fecharSection');
        button.textContent = `Abrir ${section.querySelector('h3').textContent}`;
      }
    });
  }
  
  buttonsAndSections.forEach(({ buttonId, sectionId }) => {
    selecionarBotão(buttonId, sectionId);
  });