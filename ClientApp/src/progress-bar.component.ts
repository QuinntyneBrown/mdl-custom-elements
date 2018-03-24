export class ProgressBarComponent extends HTMLElement {    
    connectedCallback() {             
        this.classList.add("mdl-progress");
        this.classList.add("mdl-js-progress");
        this.classList.add("mdl-progress__indeterminate");        
    }    
}

customElements.define(`mdl-progress-bar`,ProgressBarComponent);