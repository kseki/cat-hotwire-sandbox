// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

Turbo.session.drive = true

// Stimulusのデバッグモード有効化
application.debug = true
