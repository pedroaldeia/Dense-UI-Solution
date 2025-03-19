// Target class (position and width)
class Target
{
  static colours=[
    '#dc143c', // a random red 
    '#1e90ff', // sky blue
    '#32cd32' ,   // lawngreen
    '#c71585', //ligthpink
    '#FC6A03', // orange
    '#C49102', // dijon
    '#00755E' ,   // tropical rainforest
    '#dc143c', // a random red 
    '#1e90ff', // sky blue
    '#32cd32' ,   // lawngreen
    '#c71585', //ligthpink
    '#FC6A03', // orange
    '#C49102', // dijon
    '#00755E' ,   // tropical rainforest
    '#dc143c', // a random red 
    '#1e90ff', // sky blue
    '#32cd32' ,   // lawngreen
    '#c71585', //ligthpink
    '#FC6A03', // orange
    '#C49102', // dijon
    '#00755E' ,   // tropical rainforest
    '#dc143c', // a random red 
    '#1e90ff', // sky blue
    '#32cd32' ,   // lawngreen
    '#c71585', //ligthpink
    '#FC6A03', // orange
    '#C49102', // dijon
    '#00755E'    // tropical rainforest
  ];

  constructor(x, y, w, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
  }
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    //(this.x-((this.width / 2)*1.25)>mouse_x>this.x+((this.width / 2)*1.25))&&(this.y-((this.width / 2)*0.9)>mouse_y>this.y+((this.width / 2)*0.9)) not working :(
    if(
      Math.abs(this.x - mouse_x) < this.width * 1.25 / 2 &&
      Math.abs(this.y - mouse_y) < this.width * 0.9 / 2
    ){
      sound.play();
      return true;
    }
    else{
      return false;
    }
  }

  getIndex(character) {
    // Convert the character to uppercase and check if it's a letter
    const chare = character.toUpperCase();
    
    if (chare >= 'A' && chare <= 'Z') {
      // Return the 0-based index of the character in the alphabet
      let result = chare.charCodeAt(0) - 'A'.charCodeAt(0);
      console.log(result);
      return result;
    } else {
      // If the character is not a letter, return -1 or another value of your choice
      return -1;
    }
  }
  
  
  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    // Draw target
    fill(color(Target.colours[this.getIndex(this.label.charAt(0))]));                 
    rect(this.x - ((this.width / 2)*1.25), this.y-((this.width / 2)*0.9), this.width*1.25, this.width*0.9,this.width*0.1);

  // Draw first letter
  textFont("Arial", 20);
  fill(color(255, 255, 255));
  textAlign(CENTER);
  text(this.label.charAt(0), this.x, this.y - 0.1 * this.width); // First character slightly above

  // Draw the rest of the label
  textFont("Arial", 14);
  fill(color(255, 255, 255));
  textAlign(CENTER);
  text(this.label, this.x, this.y + 0.1 * this.width); // Rest of the string slightly below
  }
}