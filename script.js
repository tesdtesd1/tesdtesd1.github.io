const canvas = document.getElementById('matrix-bg');
   const ctx = canvas.getContext('2d');

   canvas.height = window.innerHeight;
   canvas.width = window.innerWidth;

   const chars = '0101HACKCYBERSECURITY汉YETIハニ';
   const fontSize = 14;
   const columns = canvas.width / fontSize;
   const drops = [];

   for (let x = 0; x < columns; x++) {
       drops[x] = 1;
   }

   function draw() {
       ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
       ctx.fillRect(0, 0, canvas.width, canvas.height);

       ctx.fillStyle = '#00ff00';
       ctx.font = fontSize + 'px monospace';

       for (let i = 0; i < drops.length; i++) {
           const text = chars.charAt(Math.floor(Math.random() * chars.length));
           ctx.fillText(text, i * fontSize, drops[i] * fontSize);

           if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
               drops[i] = 0;

           drops[i]++;
       }
   }

   setInterval(draw, 50);

   window.addEventListener('resize', () => {
       canvas.height = window.innerHeight;
       canvas.width = window.innerWidth;
   });
