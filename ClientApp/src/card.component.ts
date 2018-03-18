import { html, TemplateResult, render } from "lit-html";
import { repeat } from "lit-html/lib/repeat";
import { unsafeHTML } from "lit-html/lib/unsafe-html";

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

        this._bind();
        this._setEventListeners();
    }

    get template(): TemplateResult {
        return html`
            ${styles}
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">
                    <slot></slot>
                </h2>
              </div>
              <div class="mdl-card__supporting-text">
                <slot></slot>
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  <slot></slot>
                </a>
              </div>
              <div class="mdl-card__menu">
                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                  <i class="material-icons">share</i>
                </button>
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

customElements.define(`ce-card`,CardComponent);
