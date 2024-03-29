// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }



    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {

        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.


        this.x += this.speed * dt;

        if (this.x > 510) {

            this.x = -50;
            this.speed = 100 + Math.floor(Math.random() * 300);
        }

        if (player.x < this.x + 70 && player.x + 70 > this.x &&
            player.y < this.y + 45 && player.y + 45 > this.y) {

            player.x = 202;
            player.y = 405;
        }


    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }

    update(dt) {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(keyPressed) {

        switch(keyPressed){
            case 'left':
            if(this.x > 0){
             this.x -= 102;    
            }
            break;
            case 'right':
            if(this.x < 400){
                this.x += 102;
            }
            break;
            case 'up': 
            if(this.y > 0){
                this.y -= 83;
            }
            break;
            case 'down':
            if(this.y < 400){
                this.y -= 83;
            }
            break;
        }

        if (this.y == -10) {
            setTimeout(function () {
                alert('you won');
                player.x = 202;
                player.y = 405;
            }, 500);
            
        }

    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player(202, 405);
const topbug = new Enemy(-150, 60, 400);
const middlebug = new Enemy(-150, 145, 250);
const bottombug = new Enemy(-150, 225, 300);

let allEnemies = [topbug, middlebug, bottombug];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
