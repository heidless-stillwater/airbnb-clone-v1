import { Controller } from "@hotwired/stimulus"
import axios from 'axios'

export default class extends Controller {
  favorite() {
    
    if (this.element.dataset.userIsLoggedIn === 'false' ) {
      return document.querySelector('[data-bs-target="#registrationModal"]').click();
    }

    console.log('favorite button clicked - favorites', this.element.dataset.favorited )
    if (this.element.dataset.favorited === 'true') {
      axios.delete(this.element.dataset.unfavoriteUrl, {
      headers: {
        'ACCEPT': 'application/json'
      }   
      }).then((response) => {
        this.element.dataset.favorited = 'false'
        this.element.setAttribute('fill', '#CED4DA');
      });
    } else {
      axios.post(this.element.dataset.favoriteUrl, {
          user_id: this.element.dataset.userId,
          property_id: this.element.dataset.propertyId
        }, {
          headers: {
            'ACCEPT': 'application/json'
          }                     
        })
        .then((response) => {
          this.element.dataset.favorited = 'true'
          this.element.setAttribute('fill', 'red');
        });
    }
  }
}
