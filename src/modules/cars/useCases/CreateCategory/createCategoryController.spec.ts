/* eslint-disable import/no-unresolved */
import request from 'supertest';

import { app } from '@shared/infra/http/app';

describe('Create Category Controller', async () => {
  it('should be able to create a new category', async () => {
    const response = await request(app).post('/categories').send({
      name: 'Category Supertest',
      description: 'Description Category Supertest ',
    });
    expect(response.status).toBe(201);
  });
});
