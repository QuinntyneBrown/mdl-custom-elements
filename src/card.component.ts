import { html, TemplateResult, render } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

const styles = unsafeHTML(`<style>${require("./card.component.css")}<style>`);

export class CardComponent extends HTMLElement {
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
            this.setAttribute('role', 'card');

        this.classList.add("mdl-card");
        this.classList.add("mdl-shadow--2dp");

        this._bind();
        this._setEventListeners();
    }

    get template(): TemplateResult {
        return html`
            ${styles}
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">
                    <slot name="title"></slot>
                </h2>
            </div>
            <div class="mdl-card__supporting-text">
                <slot></slot>
            </div>
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

customElements.define(`mdl-card`,CardComponent);
