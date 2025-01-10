import { Controller } from "@hotwired/stimulus"
import axios from 'axios'

export default class extends Controller {
  HEADERS = { 'ACCEPT': 'application/json' }

  favorite() {
    
    if (this.element.dataset.userIsLoggedIn === 'false' ) {
      return document.querySelector('[data-bs-target="#registrationModal"]').click();
    }

    // console.log('favorite button clicked - favorites', this.element.dataset.favorited )
    if (this.element.dataset.favorited === 'true') {
      // console.log('favoriteId: ', this.element.dataset.favoriteId )
      axios.delete(this.getUnfavoritePath(this.element.dataset.favoriteId), {
        headers: this.HEADERS  
      }).then((response) => {
        this.element.dataset.favorited = 'false';
        this.element.dataset.favoriteId = '';
        this.element.setAttribute('fill', '#CED4DA');
      });
    } else {
      axios.post(this.getFavoritePath(), {
          user_id: this.element.dataset.userId,
          property_id: this.element.dataset.propertyId
        }, {
          headers: this.HEADERS                 
        })
        .then((response) => {
          // console.log('response: ', response)
          this.element.dataset.favorited = 'true';
          this.element.dataset.favoriteId = response.data.id;
          this.element.setAttribute('fill', 'red');
        });
    }
  }

  getFavoritePath() {
    return `/api/favorites`;
  }

  getUnfavoritePath(favoriteId) {
    // console.log(`in getUnfavoritePath:: /api/favorites/${favoriteId} `);
    return `/api/favorites/${favoriteId}`;
  }

}
