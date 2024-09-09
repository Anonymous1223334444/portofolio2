const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

// console.log('Dotenv - EMAIL_USER:', process.env.EMAIL_USER)
// console.log('Dotenv - EMAIL_PASS:', process.env.EMAIL_PASS)