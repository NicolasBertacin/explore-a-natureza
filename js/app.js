document.addEventListener('DOMContentLoaded', () => {
  const SECTIONS_DATA = {
    florestas: {
      title: 'FLORESTAS:',
      paragraphs: [
        'As florestas são ecossistemas complexos e diversificados, que oferecem uma ampla gama de benefícios ecológicos, sociais e econômicos. As florestas podem ser exploradas de muitas maneiras, desde atividades de recreação, como caminhadas e acampamentos, até a colheita sustentável de recursos florestais, como madeira e produtos não madeireiros, como frutas e plantas medicinais.',
        'Além disso, as florestas são o lar de muitas espécies de animais e plantas, algumas delas ameaçadas de extinção, e têm um papel fundamental na manutenção do equilíbrio climático global, contribuindo para a regulação do clima e para a proteção da biodiversidade',
        'No entanto, a exploração humana das florestas também pode ter um grande impacto negativo no meio ambiente, especialmente quando é feita de maneira irresponsável. A exploração ilegal de madeira, a expansão da agricultura e a mineração são algumas das atividades que podem levar ao desmatamento, à perda de biodiversidade e ao aumento da emissão de gases do efeito estufa.'
      ]
    },
    montanhas: {
      title: 'MONTANHAS:',
      paragraphs: [
        'Assim como as praias, as montanhas também são um exemplo maravilhoso da natureza que podem ser exploradas de muitas maneiras. As montanhas oferecem uma grande variedade de atividades, desde caminhadas e escaladas até esportes de inverno, como esqui e snowboard. Além disso, as montanhas possuem uma grande biodiversidade de fauna e flora, sendo habitat de muitas espécies de animais e plantas que precisam ser protegidos.',
        'Ao explorar as montanhas, é importante lembrar que a prática de atividades ao ar livre pode ter impacto no meio ambiente, e é necessário tomar medidas para minimizar esse impacto. Isso inclui o uso de trilhas pré-estabelecidas, não deixar lixo e não perturbar os animais e as plantas locais. Além disso, é importante estar preparado para as condições climáticas e sempre seguir as normas de segurança.'
      ]
    },
    natureza: {
      title: 'NATUREZA:',
      paragraphs: [
        'A contemplação da natureza e suas paisagens renova a mente e acalma o espírito. Estar imerso em ambientes preservar estimula a percepção de equilíbrio ecológico e aguça nossa responsabilidade com o meio ambiente.',
        'A preservação dos solos, rios e florestas tropicais garante a manutenção das condições necessárias para a sobrevivência de inúmeras espécies vegetais e animais ao redor do planeta, fortalecendo a vida sustentável.'
      ]
    },
    animais: {
      title: 'ANIMAIS:',
      paragraphs: [
        'A fauna do nosso planeta é extremamente rica e interconectada. Cada animal, do menor inseto aos grandes mamíferos, desempenha uma função vital no equilíbrio das cadeias alimentares e dos ecossistemas.',
        'Proteger os habitats naturais contra o desmatamento, a poluição e a expansão desenfreada é indispensável para conter a extinção de espécies ameaçadas e assegurar que a vida selvagem continue a prosperar.'
      ]
    }
  };

  const textContent = document.getElementById('textContent');
  const sectionTitle = document.getElementById('sectionTitle');
  const paragraphsWrapper = document.getElementById('paragraphsWrapper');

  let activeKey = '';

  function updateTextContent(sectionKey) {
    if (!sectionKey || sectionKey === activeKey) return;
    activeKey = sectionKey;

    const data = SECTIONS_DATA[sectionKey];
    if (!data) return;

    if (textContent) {
      textContent.style.opacity = '0.2';
      setTimeout(() => {
        if (sectionTitle) sectionTitle.textContent = data.title;
        if (paragraphsWrapper) {
          paragraphsWrapper.innerHTML = data.paragraphs
            .map(p => `<p>${p}</p>`)
            .join('');
        }
        textContent.style.opacity = '1';
      }, 120);
    }
  }

  if (typeof initMenu === 'function') {
    initMenu(updateTextContent);
  }

  if (typeof initModal === 'function') {
    initModal();
  }
});
