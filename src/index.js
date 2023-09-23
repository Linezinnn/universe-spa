import { Router } from './router.js'

const router = new Router()

router.add("/explorer", "./pages/explorer/explorer.html", "./assets/bg3.png")
router.add("/universe", "./pages/universe/universe.html", "./assets/bg2.png")
router.add("/", "./pages/home/home.html", "./assets/bg1.png")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()