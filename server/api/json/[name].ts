import fs from 'fs';
export default defineEventHandler((event) => {
    return JSON.parse(fs.readFileSync(`assets/json/${event.context.params.name}.json`, 'utf8'))
})
