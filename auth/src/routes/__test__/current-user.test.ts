import request from 'supertest';
import { app } from '../../app';


it('Successful signup and current user cookie', async () => {
    const cookie = await signin();
   
    if (cookie) {
      const responseCurrentUser = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .send({})
        .expect(200);
   
      expect(responseCurrentUser.body.currentUser.email).toEqual(
        'test@test.com'
      );
    } else {
      fail('Signup did not provide a cookie');
    }
});

it('Responds with null when not authenticated', async () => {
    const response = await request(app)
        .get('/api/users/currentuser')
        .send()
        .expect(200)

    expect(response.body.currentUser).toEqual(null);
})
