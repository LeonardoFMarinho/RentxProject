import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateUserController } from '@modules/account/usecases/createUser/createUserController';
import { UpdateUserAvatarController } from '@modules/cars/useCases/updateUserAvatar/updateUseAvatarController';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();
usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticate,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
