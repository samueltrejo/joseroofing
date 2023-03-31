import { Component } from '@angular/core';

@Component({
  selector: 'app-textrotate',
  template: `
    <div class="text">
      <div>
        <div class="word wisteria">to0ns</div>
        <div class="word belize">say hi</div>
        <div class="word pomegranate">follow</div>
        <div class="word green">request a song</div>
        <div class="word midnight">be awsome</div>
      </div>
    </div>
  `,
  styles: [
    `.text {
      position: absolute;
      width: 450px;
      left: 50%;
      margin-left: -225px;
      height: 40px;
      top: 50%;
      margin-top: -20px;
    }
    
    p {
      display: inline-block;
      vertical-align: top;
      margin: 0;
    }
    
    span {
      white-space: pre;
    }
    
    .word {
      position: absolute;
      width: 500px;
      opacity: 0;
    }
    
    .letter {
    /*   display: inline-block; */
      position: relative;
      float: left;
      transform: translateZ(25px);
      transform-origin: 50% 50% 25px;
    }
    
    .letter.out {
      transform: rotateX(90deg);
      transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    
    .letter.behind {
      transform: rotateX(-90deg);
    }
    
    .letter.in {
      transform: rotateX(0deg);
      transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .wisteria {
      color: #8e44ad;
    }
    
    .belize {
      color: #2980b9;
    }
    
    .pomegranate {
      color: #c0392b;
    }
    
    .green {
      color: #16a085;
    }
    
    .midnight {
      color: #2c3e50;
    }`
  ]
})
export class TextrotateComponent {
  // words: string[] = ['re','sucks', 'awesome', 'hard', 'easy'];

  ngOnInit() {
    var words = Array.from(document.getElementsByClassName('word') as HTMLCollectionOf<HTMLElement>)
    var wordArray: any[] = [];
    var currentWord = 0;

    words[currentWord].style.opacity = '1';
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
      
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw: any, i: any) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw: any, i: any) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word: any) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      
      wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);
  }
}
