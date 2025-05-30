# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "axios", to: "https://cdn.skypack.dev/pin/axios@v1.6.7-CtiTWk1RHZKnFCXj0sDG/mode=imports,min/optimized/axios.js", preload: true
pin "mapkick/bundle", to: "mapkick.bundle.js"
pin "lodash-es" # @4.17.21
