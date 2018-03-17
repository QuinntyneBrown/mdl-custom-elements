import { html, TemplateResult, render } from "lit-html";
import { repeat } from "lit-html/lib/repeat";
import { unsafeHTML } from "lit-html/lib/unsafe-html";

const styles = unsafeHTML(`<style>${require("./icon.component.css")}<style>`);

export class IconComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    connectedCallback() {     

        if(!this.shadowRoot) this.attachShadow({ mode: 'open' });
        
		render(this.template, this.shadowRoot);

        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'icon');

        this._bind();
        this._setEventListeners();
    }

    get template(): TemplateResult {
        return html`
            ${styles}
            <i class="material-icons">
                <slot></slot>
            </i>
        `;
    }

    private async _bind() {

    }

    private _setEventListeners() {

    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}

customElements.define(`mdl-icon`,IconComponent);
