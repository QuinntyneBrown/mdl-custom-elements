import { html, TemplateResult, render } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

const styles = unsafeHTML(`<style>${require("./icon.component.css")}<style>`);

export class IconComponent extends HTMLElement {
  
    connectedCallback() {     

        if(!this.shadowRoot) this.attachShadow({ mode: 'open' });
        
		render(this.template, this.shadowRoot);

        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'icon');
    }

    get template(): TemplateResult {
        return html`
            ${styles}
            <i class="material-icons">
                <slot></slot>
            </i>
        `;
    }
}

customElements.define(`mdl-icon`,IconComponent);
