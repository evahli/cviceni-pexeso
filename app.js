console.log('Funguju!');

const karticky = document.querySelectorAll('.karticka');

let otoceneKarticky = [];

karticky.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.classList.toggle('otocena');
    if (!event.target.classList.contains('otocena')) {
      otoceneKarticky.push(event.target);
      console.log(otoceneKarticky.length);
      if (otoceneKarticky.length === 2) {
        const img1 = otoceneKarticky[0].querySelector('img');
        const img2 = otoceneKarticky[1].querySelector('img');
        if (img1.src === img2.src) {
          otoceneKarticky[0].classList.add('nalezena');
          otoceneKarticky[1].classList.add('nalezena');
          otoceneKarticky[0].setAttribute('disabled', true);
          otoceneKarticky[1].setAttribute('disabled', true);
        }
        setTimeout(() => {
          if (!otoceneKarticky[0].classList.contains('nalezena')) {
            otoceneKarticky[0].classList.add('otocena');
          }
          if (!otoceneKarticky[1].classList.contains('nalezena')) {
            otoceneKarticky[1].classList.add('otocena');
          }
          otoceneKarticky = [];
        }, 1000);
      }
    }
  });
});

/* Pokud jsou dvě kartičky otočené tak, že ukazují obrázek, zařiďte, aby se po jedné sekundě vrátily do původního stavu.
Neotáčejte zpět kartičky, u kterých uživatel našel celý pár. Kartičkám přidejte vlastnost disabled, aby na ně ani nešlo znovu kliknout.
Že jsou kartičky ze stejného páru poznáte tak, že mají uvnitř obrázek <img> se stejnou hodnotou v atributu src.*/
