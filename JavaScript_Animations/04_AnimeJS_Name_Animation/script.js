document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
  
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 800
    });
  
    timeline
      .add({
        targets: nameElement,
        translateX: '50%',
        opacity: 1,
        fontFamily: 'Arial'
      })
      .add({
        targets: nameElement,
        rotate: '1turn',
        scale: [1, 2],
        fontFamily: 'Verdana'
      })
      .add({
        targets: nameElement,
        translateY: 100,
        backgroundColor: '#FFE0B2',
        fontFamily: 'Georgia'
      })
      .add({
        targets: nameElement,
        translateX: 0,
        opacity: 0.5,
        backgroundColor: '#C8E6C9',
        fontFamily: 'Courier New'
      })
      .add({
        targets: nameElement,
        translateY: -100,
        rotate: '1turn',
        color: '#F48FB1',
        fontFamily: 'Times New Roman'
      })
      .add({
        targets: nameElement,
        translateX: '50%',
        opacity: 1,
        backgroundColor: '#BBDEFB',
        fontFamily: 'Impact'
      })
      .add({
        targets: nameElement,
        scale: 1,
        rotate: '1turn',
        color: '#FFF176',
        fontFamily: 'Tahoma'
      })
      .add({
        targets: nameElement,
        translateY: 100,
        backgroundColor: '#FFCC80',
        fontFamily: 'Comic Sans MS'
      })
      .add({
        targets: nameElement,
        translateX: 0,
        opacity: 0.5,
        backgroundColor: '#FFECB3',
        fontFamily: 'Arial Black'
      })
      .add({
        targets: nameElement,
        translateY: -100,
        rotate: '1turn',
        color: '#80CBC4',
        fontFamily: 'Palatino Linotype'
      })
      .add({
        targets: nameElement,
        translateX: '50%',
        opacity: 1,
        backgroundColor: '#F48FB1',
        fontFamily: 'Courier'
      })
      .add({
        targets: nameElement,
        scale: 1,
        rotate: '1turn',
        color: '#B39DDB',
        fontFamily: 'Lucida Console'
      })
      .add({
        targets: nameElement,
        translateY: 100,
        backgroundColor: '#E6EE9C',
        fontFamily: 'Bookman Old Style'
      })
      .add({
        targets: nameElement,
        translateX: 0,
        opacity: 0.5,
        backgroundColor: '#B2DFDB',
        fontFamily: 'Trebuchet MS'
      })
      .add({
        targets: nameElement,
        translateY: -100,
        rotate: '1turn',
        color: '#90CAF9',
        fontFamily: 'Copperplate Gothic'
      })
      .add({
        targets: nameElement,
        translateX: '50%',
        opacity: 1,
        backgroundColor: '#FFAB91',
        fontFamily: 'Calibri'
      })
      .add({
        targets: nameElement,
        scale: 1,
        rotate: '1turn',
        color: '#CE93D8',
        fontFamily: 'Arial Narrow'
      })
      .add({
        targets: nameElement,
        translateY: 100,
        backgroundColor: '#FFF59D',
        fontFamily: 'Century Gothic'
      })
      .add({
        targets: nameElement,
        translateX: 0,
        opacity: 0.5,
        backgroundColor: '#80DEEA',
        fontFamily: 'Rockwell'
      })
      .add({
        targets: nameElement,
        translateY: -100,
        rotate: '1turn',
        color: '#9FA8DA',
        fontFamily: 'Garamond'
      });
  });
  