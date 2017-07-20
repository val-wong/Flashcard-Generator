console.log("loaded");

function ClozeFlashcard(text, cloze){
  this.text = text,
  this.cloze = cloze,
  this.partial = function(){
    var q = this.text.replace(this.cloze, '__________');
    return q;
  },
  this.fullText = function(){
    return this.text;
  },
  this.ClozeShow = function(){
    return this.cloze;
  }
}

module.exports = ClozeFlashcard;
