// based on https://developer.mozilla.org/fr/docs/Web/Web_Components/Using_custom_elements
class ProgressBar extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // Create div element
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const progress = document.createElement('div');
        progress.setAttribute('class', 'progress');
       
           // Take attribute content and put it inside the info span
        let step = this.getAttribute('data-progress');
        progress.style.width = step + '%';
        

       
        const style = document.createElement('style');

        style.textContent = `
      .wrapper { height: 10px; border: solid 1px #ddd }
         .progress { height: 10px; background-color: orange; }
    `;
        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        // Attach the created elements to the shadow dom
        shadow.appendChild(wrapper);
        wrapper.appendChild(progress);
       // wrapper.innerHTML = html;
    }
}

// Define the new element
customElements.define('progress-bar', ProgressBar);
