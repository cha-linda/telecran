
window.addEventListener('DOMContentLoaded', function () {
    let telecran = document.querySelector('.telecran')
    let canvasDom = document.querySelector('#responsiveCanvas')
    let ctx = canvasDom.getContext('2d')

    //let heightRatio = 0.84
    //let maxH = canvasDom.width * heightRatio
    let maxW = canvasDom.width
    let maxH = canvasDom.height
    let square = {
        x: 2,
        y: 2,
        length: 2
    };
    /*///////////////////////////////////////////////////////////////////////////////////////////////////*/
    /*/////////////////////////////////// SNAKE TEMPLATE (SUPPR CLEAR) //////////////////////////////////*/
    /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

    document.addEventListener('keydown', (event) => {
        console.log(event)
        if (event.code === 'ArrowDown' && square.y < maxH) {
            console.log(event);
            ctx.fillRect(square.x, square.y += 1, square.length, square.length);
        }

        if (event.code === 'ArrowUp' && square.y > 0) {
            console.log(event);
            ctx.fillRect(square.x, square.y -= 1, square.length, square.length);
        }

        if (event.code === 'ArrowLeft' && square.x > 0) {
            console.log(event);
            ctx.fillRect(square.x -= 1, square.y, square.length, square.length);
        }

        if (event.code === 'ArrowRight' && square.x < maxW) {
            console.log(event);
            ctx.fillRect(square.x += 1, square.y, square.length, square.length);
        }
    });
    /*///////////////////////////////////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////// WIGGLE TO CANCEL DRAWING ///////////////////////////////////*/
    /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

        document.addEventListener('keydown', (event) => {
        console.log(event)
        if (event.code === 'Space') {
            ctx.clearRect(0, 0, maxW, maxH);
            // reset la position du curseur (optionnel)
            //square.x = 2
            //square.y = 2
            telecran.classList.add('shake')
            setTimeout(() => {
                telecran.classList.remove('shake');
            }, 1000)
        }
    });

    /*///////////////////////////////////////////////////////////////////////////////////////////////////*/
    /*//////////////////////////////////////// DISPLAY MODAL ////////////////////////////////////////////*/
    /*///////////////////////////////////////////////////////////////////////////////////////////////////*/


    if (window.screen.width <= 991) {
        let modal = document.getElementById('modal');
        let main = document.querySelector('main');
            console.log('mobile');
            modal.style.display = "flex";
            main.style.display = "none";
        
    }



});

