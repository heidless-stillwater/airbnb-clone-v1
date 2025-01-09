import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  favorite() {
    console.log('favorite button clicked - favorites', this.element.dataset.favorited )
    if (this.element.dataset.favorited === 'true') {
      this.element.setAttribute('fill', '#CED4DA')
      this.element.dataset.favorited = 'false'
    } else {
      this.element.setAttribute('fill', 'red')
      this.element.dataset.favorited = 'true'
    }
  }
}