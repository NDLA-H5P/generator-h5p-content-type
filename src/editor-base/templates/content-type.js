H5PEditor.<%= titlePascalCase %> = class {

  /**
   * @param {Record<string, unknown>} params
   */
  constructor(params) {
    /** @type {HTMLElement} */
    this.wrapper = null;

    /** @type {string} */
    this.name = params.name;
  }

  /**
   * Mandatory lifecycle function.
   * Runs when the content type is initialized.
   *
   * @param {jQuery} $container
   */
  attach($container) {
    const containerElement = $container.get(0);

    if (!this.wrapper) {
      this.wrapper = this.createWrapper();
    }

    containerElement.appendChild(this.wrapper);
  }

  /**
   * @private
   *
   * Example content type wrapper.
   *
   * @return {HTMLElement}
   */
  createWrapper() {
    const wrapperElement = document.createElement('div');
    wrapperElement.innerText =
      `Hello ${this.name ? this.name : '<%= superb %> H5P developer'}! ✨`;

    return wrapperElement;
  }
}
