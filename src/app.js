import { envs } from './config/env.js'
import { startServer } from './server/serve.js';



const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


(async () => {
    main()
})();