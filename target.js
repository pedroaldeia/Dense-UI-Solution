// Target class (position and width)
class Target
{
  static colours=[
'#8CB4D2', //Soft Blue
'#7199B5', //Darker Soft Blue

'#82AAA0', //Muted Teal
'#6A8F85', //Darker Muted Teal

'#A0C88C', //Pastel Green
'#87A371', //Darker Pastel Green

'#B4AA82', //Dusty Olive
'#989069', //Darker Dusty Olive

'#DCB496', //Soft Peach
'#C19A7F', //Darker Soft Peach

'#E6A0A0', //Misty Rose
'#C68686', //Darker Misty Rose

'#BEA0C8', //Lavender Gray
'#9F87A9', //Darker Lavender Gray

'#A0AAD8', //Periwinkle Blue
'#8590B5', //Darker Periwinkle Blue

'#96C8C8', //Soft Aqua
'#7DA3A3', //Darker Soft Aqua

'#D2BEA0', //Warm Sand
'#B4A286', //Darker Warm Sand

'#E6AA96', //Pale Coral
'#C68D7A', //Darker Pale Coral

'#BE96AA', //Muted Mauve
'#9F7D8D', //Darker Muted Mauve

'#AA8CBE', //Gentle Lilac
'#8E74A0', //Darker Gentle Lilac

'#8CC8AA', //Cool Mint
'#74A38C', //Darker Cool Mint

'#B4D2A0', //Soft Pistachio
'#98B487', //Darker Soft Pistachio

'#A08C78', //Warm Mocha
'#857360', //Darker Warm Mocha

'#96B4C8', //Foggy Blue
'#7A94A3', //Darker Foggy Blue

'#DCABB4', //Soft Blush
'#BF8F98', //Darker Soft Blush

'#8CB4D2', //Soft Blue
'#7199B5', //Darker Soft Blue

'#82AAA0', //Muted Teal
'#6A8F85', //Darker Muted Teal

'#A0C88C', //Pastel Green
'#87A371', //Darker Pastel Green

'#B4AA82', //Dusty Olive
'#989069', //Darker Dusty Olive

'#DCB496', //Soft Peach
'#C19A7F', //Darker Soft Peach

'#E6A0A0', //Misty Rose
'#C68686', //Darker Misty Rose

'#BEA0C8', //Lavender Gray
'#9F87A9', //Darker Lavender Gray

'#A0AAD8', //Periwinkle Blue
'#8590B5', //Darker Periwinkle Blue

'#96C8C8', //Soft Aqua
'#7DA3A3', //Darker Soft Aqua

'#D2BEA0', //Warm Sand
'#B4A286', //Darker Warm Sand

'#E6AA96', //Pale Coral
'#C68D7A', //Darker Pale Coral

'#BE96AA', //Muted Mauve
'#9F7D8D', //Darker Muted Mauve

'#AA8CBE', //Gentle Lilac
'#8E74A0', //Darker Gentle Lilac

'#8CC8AA', //Cool Mint
'#74A38C', //Darker Cool Mint

'#B4D2A0', //Soft Pistachio
'#98B487', //Darker Soft Pistachio

'#A08C78', //Warm Mocha
'#857360', //Darker Warm Mocha

'#96B4C8', //Foggy Blue
'#7A94A3', //Darker Foggy Blue

'#DCABB4', //Soft Blush
'#BF8F98', //Darker Soft Blush


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
      return result;
    } else {
      // If the character is not a letter, return -1 or another value of your choice
      return -1;
    }
  }
  
  
  // Draws the target (i.e., a circle)
  // and its label
  draw(mouse_x, mouse_y)
  {
    // Draw target
    if(
      Math.abs(this.x - mouse_x) < this.width * 1.25 / 2 &&
      Math.abs(this.y - mouse_y) < this.width * 0.9 / 2
    )
    fill(color(Target.colours[(this.getIndex(this.label.charAt(0)))* 2 + 1])); 
    else fill(color(Target.colours[this.getIndex(this.label.charAt(0)) * 2]));                 
    rect(this.x - ((this.width / 2)*1.25), this.y-((this.width / 2)*0.9), this.width*1.25, this.width*0.9,this.width*0.1);

  // Draw first letter
  textFont("Arial", 24);
  fill(color(0, 0, 0));
  textAlign(CENTER);
  text(this.label.charAt(0), this.x, this.y - 0.1 * this.width); // First character slightly above

  // Draw the rest of the label
  textFont("Arial", 18);
  fill(color(0, 0, 0));
  textAlign(CENTER);
  text(this.label, this.x, this.y + 0.1 * this.width); // Rest of the string slightly below
  }
}