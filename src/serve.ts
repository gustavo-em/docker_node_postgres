import './conect_typorm'


import * as express from 'express';
import { getRepository } from 'typeorm';
import { User } from './entity/User';

const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    const repoUser = getRepository(User)
    let user = new User();
    user.first_name = 'Gustavo'
    user.last_name = 'Emanuel'
    user.age = 11

    let user_saved = await repoUser.save(user)


    return res.send(user_saved)

    return res.send('s')
})



app.listen(3333, () => console.log('run1'))     