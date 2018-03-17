import { html, TemplateResult, render } from "lit-html";
import { repeat } from "lit-html/lib/repeat";
import { unsafeHTML } from "lit-html/lib/unsafe-html";

const styles = unsafeHTML(`<style>${require("./mdl-button.component.css")}<style>`);

export class MdlButtonComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {       

        if (!this.shadowRoot) this.attachShadow({ mode: 'open' });

		render(this.template, this.shadowRoot);

        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'mdlbutton');

        this.classList.add("mdl-button");
        this.classList.add("mdl-js-button");
        this.classList.add("mdl-button--raised");
        this.classList.add("mdl-js-ripple-effect");
        this.classList.add("mdl-button--accent");
    }

    get template(): TemplateResult {
        return html`
            ${styles}
            <slot></slot>
        `;
    }
}

customElements.define(`mdl-button`,MdlButtonComponent);
